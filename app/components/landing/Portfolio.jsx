import { useState, useEffect, useRef, useCallback } from 'react';
import './Portfolio.css';

const Process = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const clipRectRef = useRef(null);
  const trainRef = useRef(null);
  const bgGlowRef = useRef(null);
  const titleCardRef = useRef(null);
  const descCardRef = useRef(null);
  const stationRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [trainStyle, setTrainStyle] = useState({ left: 0, top: 0, transform: 'rotate(0deg)', transformOrigin: '35px 13px' });
  const [stationStyles, setStationStyles] = useState([]);
  // FIX 5: Remove clipWidth and bgGlowTransform from state - use direct DOM manipulation
  const [isSectionActive, setIsSectionActive] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const sectionRef = useRef(null);
  const nextSectionRef = useRef(null);

  // FIX 3a: useRef بدل useState للـ localProgress — صفر re-renders عند scroll
  const localProgressRef = useRef(0);
  const scrollLockedRef = useRef(false);
  const rafRef = useRef(null);

  const stations = [
    { title: 'Discovery', desc: 'Brand, audience & goals', icon: '🔍' },
    { title: 'Strategy', desc: 'Roadmap & positioning', icon: '🎯' },
    { title: 'Design', desc: 'Experience that converts', icon: '✏️' },
    { title: 'Development', desc: 'Scalable implementation', icon: '</>' },
    { title: 'Launch', desc: 'Go live with confidence', icon: '🚀' },
    { title: 'Growth', desc: 'Optimize and scale', icon: '📈' },
  ];

  const stops = [0.05, 0.23, 0.42, 0.60, 0.80, 1];
  const sides = ['above', 'below', 'above', 'below', 'above', 'below'];

  // Track dimensions - stroke-width: 112 means 56px from center
  const TRACK_HALF_WIDTH = 56;
  // Station distance from track center (half track + gap + half icon)
  const STATION_GAP = 50; // gap between track edge and station icon
  const STATION_OFFSET = TRACK_HALF_WIDTH + STATION_GAP + 24; // 24 = half icon size
  // Lane lines offset from track center
  const laneOffset = TRACK_HALF_WIDTH + 12; // 12px outside track edge

  const buildOffsetPath = (offsetDist, segments = 160) => {
    if (!pathRef.current) return '';
    const path = pathRef.current;
    const length = path.getTotalLength();
    const pts = [];
    for (let i = 0; i <= segments; i++) {
      const len = length * (i / segments);
      const p = path.getPointAtLength(len);
      const p2 = path.getPointAtLength(Math.min(len + 0.5, length));
      const dx = p2.x - p.x;
      const dy = p2.y - p.y;
      const mag = Math.hypot(dx, dy) || 1;
      const nx = -dy / mag;
      const ny = dx / mag;
      pts.push((p.x + nx * offsetDist).toFixed(2) + ',' + (p.y + ny * offsetDist).toFixed(2));
    }
    return 'M' + pts.join(' L');
  };

  const getSvgTransform = () => {
    if (!svgRef.current) return { scale: 1, offsetX: 0, offsetY: 0 };
    const rect = svgRef.current.getBoundingClientRect();
    const vb = svgRef.current.viewBox.baseVal;
    const scale = Math.min(rect.width / vb.width, rect.height / vb.height);
    const offsetX = rect.left + (rect.width - vb.width * scale) / 2;
    const offsetY = rect.top + (rect.height - vb.height * scale) / 2;
    return { scale, offsetX, offsetY };
  };

  const toScreen = (pt, t) => ({
    x: t.offsetX + pt.x * t.scale,
    y: t.offsetY + pt.y * t.scale,
  });

  const layoutStations = useCallback(() => {
    if (!pathRef.current || !svgRef.current) return;
    const path = pathRef.current;
    const length = path.getTotalLength();
    const t = getSvgTransform();

    const styles = stationRefs.current.map((_, i) => {
      const len = length * stops[i];
      const p = path.getPointAtLength(len);
      const p2 = path.getPointAtLength(Math.min(len + 1, length));

      const sp = toScreen(p, t);
      const sp2 = toScreen(p2, t);

      const dx = sp2.x - sp.x;
      const dy = sp2.y - sp.y;
      const mag = Math.hypot(dx, dy) || 1;

      let nx = -dy / mag;
      let ny = dx / mag;

      // FIX 1: force الاتجاه بشكل مباشر بدل flip
      const wantAbove = sides[i] === 'above';
      if ((wantAbove && ny > 0) || (!wantAbove && ny < 0)) {
        nx = -nx;
        ny = -ny;
      }

      return {
        left: sp.x + nx * STATION_OFFSET,
        top: sp.y + ny * STATION_OFFSET,
      };
    });

    // FIX: Directly set styles on DOM elements for immediate positioning
    stationRefs.current.forEach((ref, i) => {
      if (ref && styles[i]) {
        ref.style.left = styles[i].left + 'px';
        ref.style.top = styles[i].top + 'px';
      }
    });

    setStationStyles(styles);
  }, []);

  // FIX 3b & 5: moveTrain inside useCallback + requestAnimationFrame + direct DOM manipulation
  const moveTrain = useCallback((progress) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      if (!pathRef.current) return;
      const path = pathRef.current;
      const length = path.getTotalLength();

      if (!isFinite(length) || length <= 0) return;

      const t = getSvgTransform();

      let progressPercent = Math.max(0, Math.min(1, progress));
      stops.forEach(stop => {
        if (Math.abs(progressPercent - stop) < 0.015) progressPercent = stop;
      });

      // FIX 5: Direct DOM manipulation for bgGlowTransform instead of setState
      if (bgGlowRef.current) {
        bgGlowRef.current.style.transform = `translate(-50%,-50%) translateY(${progressPercent * 100}%)`;
      }

      const currentLength = length * progressPercent;
      if (!isFinite(currentLength)) return;

      const point = path.getPointAtLength(currentLength);
      const nextPoint = path.getPointAtLength(Math.min(currentLength + 1, length));

      // FIX 5: Direct DOM manipulation for clipWidth instead of setState
      if (clipRectRef.current) {
        clipRectRef.current.setAttribute('width', Math.max(0, point.x));
      }

      const sp = toScreen(point, t);
      const spNext = toScreen(nextPoint, t);
      const angle = Math.atan2(spNext.y - sp.y, spNext.x - sp.x) * 180 / Math.PI;

      // FIX 2: transform-origin على مركز العربية الفعلي (35px عرض, 13px ارتفاع)
      setTrainStyle({
        left: sp.x - 35,
        top: sp.y - 13,
        transform: `rotate(${angle}deg)`,
        transformOrigin: '35px 13px',
      });

      let newActiveIndex = 0;
      stops.forEach((stop, i) => {
        if (progressPercent >= stop - 0.001) newActiveIndex = i;
      });
      setActiveIndex(newActiveIndex);
    });
  }, []);

  // FIX 4: Function to reveal the next section after animation completes
  const revealNextSection = useCallback(() => {
    // Find the next sibling element after the hero section
    const heroElement = sectionRef.current;
    if (heroElement) {
      let nextEl = heroElement.nextElementSibling;
      // Look for the first element with section-reveal class
      while (nextEl) {
        if (nextEl.classList && nextEl.classList.contains('section-reveal')) {
          // Add revealed class with a small delay for smooth transition
          setTimeout(() => {
            nextEl.classList.add('revealed');
          }, 100);
          break;
        }
        // Also check children for section-reveal class
        const revealChild = nextEl.querySelector('.section-reveal');
        if (revealChild) {
          setTimeout(() => {
            revealChild.classList.add('revealed');
          }, 100);
          break;
        }
        nextEl = nextEl.nextElementSibling;
      }
    }
  }, []);

  const layoutAll = useCallback(() => {
    layoutStations();
    moveTrain(localProgressRef.current);
  }, [layoutStations, moveTrain]);

  useEffect(() => {
    if (pathRef.current) {
      const dLeft = buildOffsetPath(-laneOffset);
      const dRight = buildOffsetPath(laneOffset);

      const laneLeftBase = document.querySelector('#lane-left-base');
      const laneLeftProgress = document.querySelector('#lane-left-progress');
      const laneRightBase = document.querySelector('#lane-right-base');
      const laneRightProgress = document.querySelector('#lane-right-progress');

      if (laneLeftBase) laneLeftBase.setAttribute('d', dLeft);
      if (laneLeftProgress) laneLeftProgress.setAttribute('d', dLeft);
      if (laneRightBase) laneRightBase.setAttribute('d', dRight);
      if (laneRightProgress) laneRightProgress.setAttribute('d', dRight);
    }
  }, []);

  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (e) => {
      // If animation is completed, allow normal scrolling (don't prevent default)
      if (animationCompleted) return;

      if (!isSectionActive || !scrollLockedRef.current) return;

      // Only prevent default for downward scroll (deltaY > 0)
      // Allow upward scroll to pass through for normal navigation
      if (e.deltaY <= 0) return;

      e.preventDefault();

      // FIX 3a: تحديث الـ ref مباشرة بدون setState — صفر re-renders
      const delta = e.deltaY * 0.001;
      localProgressRef.current = Math.max(0, Math.min(1, localProgressRef.current + delta));

      moveTrain(localProgressRef.current);

      // unlock عند اكتمال الأنيميشن
      if (localProgressRef.current >= 0.99 && !animationCompleted) {
        scrollLockedRef.current = false;
        setAnimationCompleted(true);
        // FIX 4: Trigger section reveal for next section
        revealNextSection();
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      // If animation is completed, allow normal scrolling
      if (animationCompleted) return;

      if (!isSectionActive || !scrollLockedRef.current) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;

      // Only prevent default for downward scroll (deltaY > 0)
      // Allow upward scroll to pass through for normal navigation
      if (deltaY <= 0) return;

      e.preventDefault();

      const delta = deltaY * 0.002;
      localProgressRef.current = Math.max(0, Math.min(1, localProgressRef.current + delta));

      moveTrain(localProgressRef.current);

      if (localProgressRef.current >= 0.99 && !animationCompleted) {
        scrollLockedRef.current = false;
        setAnimationCompleted(true);
        // FIX 4: Trigger section reveal for next section
        revealNextSection();
      }
    };

    // FIX 1: Proper IntersectionObserver logic for scroll-triggered animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is visible
            if (!animationCompleted) {
              // Animation not completed - start/reset from beginning
              setIsSectionActive(true);
              localProgressRef.current = 0;
              scrollLockedRef.current = true;
              moveTrain(0);
            }
            // If animationCompleted, don't lock scroll - allow normal scrolling
          } else {
            // Section is not visible
            setIsSectionActive(false);
            scrollLockedRef.current = false;

            // Only reset animation if user scrolled UP past the section
            // (entry.boundingClientRect.top > 0 means section is above viewport)
            if (animationCompleted && entry.boundingClientRect.top > 0) {
              // User scrolled up past section - reset for next visit
              setAnimationCompleted(false);
              localProgressRef.current = 0;
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) observer.observe(sectionElement);

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('resize', layoutAll);
    layoutAll();

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', layoutAll);
      observer.disconnect();
      // FIX 3b: cleanup RAF عند unmount
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  // FIX 3c: dependency array مكتملة
  }, [isSectionActive, animationCompleted, moveTrain, layoutAll, revealNextSection]);

  return (
    <div ref={sectionRef} className="hero">
      <div className="particles"></div>

      <div className="bg-glow" ref={bgGlowRef}></div>

      <div className="title">
        <span>HOW WE WORK</span>
        <h1>Our Process</h1>
      </div>

      <svg id="metro-svg" ref={svgRef} viewBox="0 0 2000 900">
        <defs>
          <clipPath id="progress-clip">
            <rect id="clip-rect" ref={clipRectRef} x="0" y="0" width="0" height="900" />
          </clipPath>
        </defs>

        <path
          id="road-shadow"
          d="M100 506 C350 256 600 756 900 506 S1450 256 1900 506"
        />
        <path
          id="track"
          ref={pathRef}
          d="M100 500 C350 250 600 750 900 500 S1450 250 1900 500"
        />
        <path
          id="track-highlight"
          d="M100 500 C350 250 600 750 900 500 S1450 250 1900 500"
        />

        <path id="lane-left-base" className="lane-base" />
        <path id="lane-right-base" className="lane-base" />

        <path id="lane-left-progress" className="lane-progress" clipPath="url(#progress-clip)" />
        <path id="lane-right-progress" className="lane-progress" clipPath="url(#progress-clip)" />
      </svg>

      <div className="train" id="train" ref={trainRef} style={trainStyle}>
        <div className="shadow"></div>
        <div className="body">
          <div className="headlight"></div>
          <div className="window"></div>
          <div className="window"></div>
          <div className="window"></div>
          <div className="wheel w1"></div>
          <div className="wheel w2"></div>
        </div>
      </div>

      {stations.map((station, index) => (
        <div
          key={index}
          ref={el => stationRefs.current[index] = el}
          className={`station ${index <= activeIndex ? 'active' : ''}`}
          style={stationStyles[index] || {}}
        >
          <div className="icon">{station.icon}</div>
          <h3>{station.title}</h3>
        </div>
      ))}

      <div className="info-card">
        <h2 ref={titleCardRef}>{stations[activeIndex].title}</h2>
        <p ref={descCardRef}>{stations[activeIndex].desc}</p>
      </div>
    </div>
  );
};

export { Process };