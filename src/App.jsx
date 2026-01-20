function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Logo/Studio Name */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="text-7xl">🐾</div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Honeypaw Studios
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Coming Soon Section */}
        <div className="mb-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Coming Soon
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We're crafting extraordinary gaming experiences with passion and creativity.
            Stay tuned for something magical! 🎮✨
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Creative Design</h3>
            <p className="text-gray-300">Beautiful, immersive game worlds</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-300">Pushing boundaries in gameplay</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="text-xl font-semibold text-white mb-2">Passion</h3>
            <p className="text-gray-300">Made with love and dedication</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-6">
          <p className="text-gray-300 text-lg">
            Be the first to know when we launch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full sm:w-auto"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold rounded-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto">
              Notify Me
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-gray-400 text-sm">
          <p>© 2026 Honeypaw Studios. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default App
