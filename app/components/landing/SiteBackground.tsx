export function SiteBackground() {
  return (
    <div
      className="gs-bg-drift pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <img
        src="/images/hero-bg.png"
        alt=""
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gs-cream/86 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-gs-mint/15 via-transparent to-gs-gold/10" />
    </div>
  );
}
