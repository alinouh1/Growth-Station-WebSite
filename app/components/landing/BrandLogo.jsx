export function BrandLogo({ className = "h-14 w-auto max-w-[180px]" }) {
  return (
    <img
      src="./images/logo2.png"
      alt="Growth Station"
      className={`border-0 bg-transparent object-contain object-left outline-none ${className}`}
    />
  )
}
