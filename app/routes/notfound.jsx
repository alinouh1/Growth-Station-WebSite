import { Link } from "react-router-dom"
import { BrandLogo } from "../components/landing/BrandLogo"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gs-dark flex items-center justify-center px-6">
      <div className="text-center">
        <Link to="/" className="inline-block mb-8">
          <BrandLogo className="h-16 w-auto max-w-[220px]" />
        </Link>
        <h1 className="font-display text-6xl md:text-8xl font-bold text-gs-gold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gs-mint/80 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block rounded-full bg-gs-gold px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-gs-gold/30 transition-all hover:-translate-y-0.5 hover:bg-gs-teal hover:shadow-gs-teal/30"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
