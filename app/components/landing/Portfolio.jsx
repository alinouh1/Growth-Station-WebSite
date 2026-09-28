import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import './Process.css';

const STATIONS = [
  { title: 'Discovery', desc: 'Brand, audience & goals', icon: '🔍' },
  { title: 'Strategy', desc: 'Roadmap & positioning', icon: '🎯' },
  { title: 'Design', desc: 'Experience that converts', icon: '✏️' },
  { title: 'Development', desc: 'Scalable implementation', icon: '</>' },
  { title: 'Launch', desc: 'Go live with confidence', icon: '🚀' },
  { title: 'Growth', desc: 'Optimize and scale', icon: '📈' },
];

const STOPS = [0.05, 0.24, 0.43, 0.62, 0.81, 1];

// icon/gap بالبكسل، half (نص عرض الطريق) بوحدات الـ viewBox
const MODES = {
  desktop: {
    vb: [2000, 900],
    d: 'M100 500 C350 250 600 750 900 500 S1450 250 1900 500',
    half: 56, icon: 48, gap: 24, trainScale: 1,
    sides: ['above', 'below', 'above', 'below', 'above', 'below'],
  },
  vertical: {
    vb: [1000, 1500],
    d: 'M500 80 C700 260 300 460 500 700 S700 1140 500 1420',
    half: 50, icon: 38, gap: 8, trainScale: 0.75,
    sides: ['right', 'left', 'right', 'left', 'right', 'left'],
  },
};

const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const isVerticalQuery = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches;

const Process = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const pathRef = useRef(null);
  const clipRef = useRef(null);
  const trainRef = useRef(null);
  const stationRefs = useRef([]);
  const laneRefs = useRef([]);
  const rafRef = useRef(null);
  const pathLengthRef = useRef(0);
  const activeIndexRef = useRef(-1);

  const [mode, setMode] = useState(() => (isVerticalQuery() ? 'vertical' : 'desktop'));
  const [activeIndex, setActiveIndex] = useState(-1); // -1 = لسه محطة ما ظهرتش

  const modeRef = useRef(mode);
  modeRef.current = mode;
  const st = useRef({ progress: 0 });

  /* ---------- هندسة المسار ---------- */
  const geo = () => {
    const path = pathRef.current;
    const L = pathLengthRef.current || path.getTotalLength();
    const at = (l) => path.getPointAtLength(clamp(l, 0, L));
    const tan = (l) => {
      const a = at(l - 1), b = at(l + 1);
      const m = Math.hypot(b.x - a.x, b.y - a.y) || 1;
      return { dx: (b.x - a.x) / m, dy: (b.y - a.y) / m };
    };
    return { L, at, tan };
  };

  /* ---------- رسم القطر + الخط المتقدم + المحطات النشطة ---------- */
  const render = useCallback((progress) => {
    if (!pathRef.current) return;
    const m = MODES[modeRef.current];
    const { L, at, tan } = geo();
    if (!isFinite(L) || L <= 0) return;

    let p = clamp(progress);
    STOPS.forEach((s) => { if (Math.abs(p - s) < 0.015) p = s; });

    const pt = at(L * p);
    const { dx, dy } = tan(L * p);
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    const train = trainRef.current;
    if (train) {
      train.style.left = (pt.x / m.vb[0]) * 100 + '%';
      train.style.top = (pt.y / m.vb[1]) * 100 + '%';
      train.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scale(${m.trainScale})`;
    }

    if (clipRef.current) {
      const vertical = modeRef.current === 'vertical';
      clipRef.current.setAttribute('width', vertical ? m.vb[0] : Math.max(0, pt.x));
      clipRef.current.setAttribute('height', vertical ? Math.max(0, pt.y) : m.vb[1]);
    }

    let idx = -1;
    STOPS.forEach((s, i) => { if (p >= s - 0.001) idx = i; });
    if (idx !== activeIndexRef.current) {
      activeIndexRef.current = idx;
      setActiveIndex(idx);
    }
  }, []);

  /* ---------- مكان المحطات + خطوط الطريق ---------- */
  const layout = useCallback(() => {
    if (!pathRef.current || !stageRef.current) return;
    pathLengthRef.current = pathRef.current.getTotalLength();
    const m = MODES[modeRef.current];
    const { L, at, tan } = geo();

    const scale = stageRef.current.clientWidth / m.vb[0] || 1;
    // المسافة من مركز الطريق لمركز الأيقونة (بتتحسب بالبكسل عشان متتغطيش على أي شاشة)
    const off = m.half + (m.icon / 2 + m.gap) / scale;

    STOPS.forEach((s, i) => {
      const el = stationRefs.current[i];
      if (!el) return;
      const l = L * s;
      const p = at(l);
      const { dx, dy } = tan(l);
      let nx = -dy, ny = dx;
      const side = m.sides[i];
      if ((side === 'above' && ny > 0) || (side === 'below' && ny < 0) ||
        (side === 'left' && nx > 0) || (side === 'right' && nx < 0)) {
        nx = -nx; ny = -ny;
      }
      const label = el.querySelector('.st-label');
      if (label && modeRef.current === 'vertical') {
        const stationX = ((p.x + nx * off) / m.vb[0]) * stageRef.current.clientWidth;
        const room = side === 'right'
          ? stageRef.current.clientWidth - stationX - 42
          : stationX - 42;
        label.style.setProperty('--label-max-width', `${Math.max(44, room)}px`);
      } else {
        label?.style.removeProperty('--label-max-width');
      }
      el.style.left = ((p.x + nx * off) / m.vb[0]) * 100 + '%';
      el.style.top = ((p.y + ny * off) / m.vb[1]) * 100 + '%';
    });

    const buildLane = (dist, seg = 160) => {
      const pts = [];
      for (let i = 0; i <= seg; i++) {
        const l = (L * i) / seg;
        const p = at(l);
        const { dx, dy } = tan(l);
        pts.push(`${(p.x - dy * dist).toFixed(2)},${(p.y + dx * dist).toFixed(2)}`);
      }
      return 'M' + pts.join(' L');
    };
    const lane = m.half + 10;
    const dL = buildLane(-lane), dR = buildLane(lane);
    laneRefs.current.forEach((el, i) => el && el.setAttribute('d', i % 2 === 0 ? dL : dR));

    render(st.current.progress);
  }, [render]);

  useLayoutEffect(() => { layout(); }, [mode, layout]);

  useEffect(() => {
    window.addEventListener('resize', layout);
    return () => window.removeEventListener('resize', layout);
  }, [layout]);

  /* ---------- تبديل الوضع (ديسكتوب / عمودي) ---------- */
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1024px)');
    const h = () => setMode(mq.matches ? 'vertical' : 'desktop');
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  /* ---------- تحديث تقدم القطار مع scroll طبيعي ---------- */
  useEffect(() => {
    const updateProgress = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const section = sectionRef.current;
        if (!section) return;

        const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
        const rect = section.getBoundingClientRect();
        const progress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height));
        if (Math.abs(progress - st.current.progress) < 0.001) return;

        st.current.progress = progress;
        render(progress);
      });
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [render]);

  const m = MODES[mode];

  return (
    <div ref={sectionRef} className={`proc ${mode}`}>
      <div className="p-particles" />
      <div className="p-glow" />

      <div className="p-title">
        <span>HOW WE WORK</span>
        <h1>Our Process</h1>
      </div>

      <div className="p-wrap">
        <div className="p-stage" ref={stageRef}>
          <svg className="p-svg" viewBox={`0 0 ${m.vb[0]} ${m.vb[1]}`}>
            <defs>
              <clipPath id="proc-clip">
                <rect ref={clipRef} x="0" y="0" width="0" height={m.vb[1]} />
              </clipPath>
            </defs>
            <path className="road-shadow" d={m.d} transform="translate(0 6)" />
            <path className="track" ref={pathRef} d={m.d} />
            <path className="track-hl" d={m.d} />

            <path className="lane-base" ref={(el) => (laneRefs.current[0] = el)} />
            <path className="lane-base" ref={(el) => (laneRefs.current[1] = el)} />
            <path className="lane-prog" ref={(el) => (laneRefs.current[2] = el)} clipPath="url(#proc-clip)" />
            <path className="lane-prog" ref={(el) => (laneRefs.current[3] = el)} clipPath="url(#proc-clip)" />
          </svg>

          {STATIONS.map((s, i) => (
            <div
              key={s.title}
              ref={(el) => (stationRefs.current[i] = el)}
              className={`st ${m.sides[i]} ${i <= activeIndex ? 'active' : ''}`}
            >
              <div className="st-icon">{s.icon}</div>
              <div className="st-label">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}

          <div className="train" ref={trainRef}>
            <div className="t-shadow" />
            <div className="t-body">
              <div className="t-light" />
              <div className="t-window" />
              <div className="t-window" />
              <div className="t-window" />
              <div className="t-wheel w1" />
              <div className="t-wheel w2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Process };