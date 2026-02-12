import Link from "next/link";
import Header from "../../../assets/Header";
import Footer from "../../../assets/Footer";

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB]">
      <Header />

      <main
        className="relative flex-grow px-6 pt-28 pb-24 text-white"
        style={{
          background:
            "linear-gradient(180deg, #0a133b 0%, #09103a 35%, #070c2e 65%, #050510 100%)",
        }}
      >
        {/* ambient gradient orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,_#4f7cff_60%,_transparent)]" />
          <div className="absolute top-1/3 -right-16 h-80 w-80 rounded-full blur-3xl opacity-25 bg-[radial-gradient(closest-side,_#9f7aea_60%,_transparent)]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white/40">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-[#cbd6ff] to-white bg-clip-text text-transparent">
              Post Not Found
            </span>
          </h1>

          <p className="text-white/70 text-lg mb-2">
            The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          <p className="text-white/50 text-sm mb-8">
            It might have been removed, renamed, or you might have mistyped the URL.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4f7cff] to-[#7aa2ff] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(79,124,255,0.4)] transition-all hover:shadow-[0_12px_40px_rgba(79,124,255,0.6)] hover:scale-105 focus:ring-2 focus:ring-[#4f7cff]/60"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>
            
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3 text-sm font-medium text-white/80 hover:bg-white/20 transition-colors"
            >
              Go Home
            </Link>
          </div>

          {/* Suggestions */}
          <div className="mt-12 text-left">
            <h2 className="text-lg font-semibold text-white/90 mb-4">What you can do:</h2>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7aa2ff] mt-2 flex-shrink-0" />
                Check the URL for typos
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7aa2ff] mt-2 flex-shrink-0" />
                Browse our latest blog posts
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7aa2ff] mt-2 flex-shrink-0" />
                Use the search function to find related content
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}