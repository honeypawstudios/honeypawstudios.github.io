import { FaGithub } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";

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
      <div className="flex justify-center gap-12 mb-8 mt-6">
        <a
          href="https://github.com/honeypawstudios"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on GitHub"
          className="group"
        >
          <FaGithub className="w-10 h-10 text-gray-800 group-hover:text-yellow-700 transition" />
        </a>
        <a
          href="https://itch.io/c/7119283/honeypaw-releases"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="See our games on Itch.io"
          className="group"
        >
          <SiItchdotio className="w-10 h-10 text-[#fa5c5c] group-hover:text-yellow-700 transition" />
        </a>
      </div>
      <div className="text-yellow-800 text-base md:text-md font-medium flex flex-col items-center justify-center gap-0">
        <span>Designed with ❤️ by</span>
        <span className="flex items-center gap-2">jwt2706 <span role="img" aria-label="handshake">🤝</span> luciana121</span>
      </div>
      <div className="mt-4 text-yellow-700 text-xs md:text-sm font-medium opacity-80">
        &copy; {year} Honeypaw Studios
      </div>
    </div>
  );
}
