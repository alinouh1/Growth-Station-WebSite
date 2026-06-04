type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "h-10 w-auto max-w-[140px]" }: BrandLogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="Growth Station"
      className={`border-0 bg-transparent object-contain object-left mix-blend-lighten outline-none ${className}`}
    />
  );
}
