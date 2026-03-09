
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[repeating-linear-gradient(135deg,#fffbe6_0_40px,#ffe066_40px_80px)] p-2">
      <div className="bg-gradient-to-br from-[#fffbe6] to-[#ffe066] rounded-3xl shadow-xl border-4 border-yellow-400 px-6 py-8 md:max-w-xl w-full text-center transition-all">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-2 tracking-wide drop-shadow-sm">
          🍯 Honeypaw Studios 🍯
        </h1>
        <p className="text-lg md:text-xl text-yellow-800 font-semibold mb-8 tracking-wide">
          Coming soon...
        </p>
        <a
          className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 text-white font-bold text-lg md:text-xl py-3 px-8 rounded-full shadow hover:from-yellow-500 hover:to-yellow-300 hover:scale-105 hover:-rotate-2 transition mb-8"
          href="https://itch.io/c/7119283/honeypaw-releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out the games
        </a>
        <div className="mt-8 flex items-center justify-center gap-2 text-yellow-800 text-base md:text-lg font-medium">
          jwt2706 <span role="img" aria-label="handshake">🤝</span> luciana121
        </div>
      </div>
    </div>
  );
}

export default App;
