export default function HoneyCard() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gradient-to-br from-[#fffbe6] to-[#ffe066] rounded-3xl shadow-xl border-4 border-yellow-400 px-2 py-8 mx-8 md:max-w-xl w-full text-center transition-all">
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-2 tracking-wide drop-shadow-sm">
        Honeypaw Studios
      </h1>
      <p className="mx-14 text-md md:text-xl text-yellow-900 font-semibold mb-8 tracking-wide">
        We’re a small indie game studio, and we can’t wait to show you what we’ve been working on. Stay tuned for updates!
      </p>
      <a
        className="mt-6 mb-12 inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 text-white font-bold text-lg md:text-xl py-3 px-8 rounded-full shadow hover:from-yellow-500 hover:to-yellow-300 hover:scale-105 hover:-rotate-2 transition mb-8"
        href="https://itch.io/c/7119283/honeypaw-releases"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out our demo games!
      </a>
      <div className="flex items-center justify-center gap-2 text-yellow-800 text-base md:text-lg font-medium">
        jwt2706 <span role="img" aria-label="handshake">🤝</span> luciana121
      </div>
      <div className="mt-4 text-yellow-700 text-xs md:text-sm font-medium opacity-80">
        &copy; {year} Honeypaw Studios
      </div>
    </div>
  );
}
