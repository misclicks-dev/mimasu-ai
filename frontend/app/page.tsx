import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Logo Area - Double size */}
      <div className="mb-8 text-center">
        <div className="w-[350px] h-auto mx-auto mb-6">
          {" "}
          {/* Double width */}
          <Image
            src="/mimasu-logo.svg"
            alt="Mimasu.ai Logo"
            width={350} // Double original size
            height={128} // Maintain aspect ratio (adjust based on your SVG)
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Title & Tagline */}
      <div className="text-center mb-8 space-y-4">
        <h2 className="text-5xl font-bold text-gray-900">
          Your AI-Powered Anime Guide
        </h2>
        <p className="text-x1 text-gray-600 mt-2">
          Coming Soon: Personalized anime recommendations powered by AI
        </p>
      </div>

      {/* Email Capture */}
      <div className="w-full max-w-md space-y-4">
        <div className="bg-white p-1 rounded-lg shadow-xl bg-gradient-to-r from-[#FF204E] to-black">
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email for updates"
              className="w-full px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF204E]"
            />
            <button
              type="submit"
              className="px-6 py-3 text-[#FF204E] rounded-lg font-semibold 
                        hover:bg-gray-900 transition-all duration-200 shadow-lg"
            >
              Notify
            </button>
          </form>
        </div>

        {/* Privacy Note */}
        <p className="text-center text-sm text-gray-500">
          We respect your privacy. No spam, ever.
        </p>
      </div>

      {/* Subtle Footer */}
      <footer className="absolute bottom-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Mimasu.ai All rights reserved
      </footer>
    </div>
  );
}
