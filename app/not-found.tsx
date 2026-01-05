import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-8xl md:text-[180px] font-medium text-white leading-none tracking-tight mb-4">404</h1>
        <p className="text-xl md:text-2xl text-white/60 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-medium text-lg transition-all duration-300 hover:bg-[#ff3b00] hover:text-black group"
        >
          <svg
            className="w-5 h-5 rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  )
}
