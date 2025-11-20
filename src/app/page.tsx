export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            BigFish Darts
          </h1>
          <p className="text-xl text-gray-300">
            Interactive darts gaming with real-time video
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            Game Room
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Video Feed Placeholder */}
            <div className="bg-black/50 rounded-lg aspect-video flex items-center justify-center">
              <p className="text-gray-400">Video feed will appear here</p>
            </div>
            
            {/* Scoreboard Placeholder */}
            <div className="bg-black/50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Scoreboard</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-white">
                  <span>Player 1</span>
                  <span className="font-bold">501</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Player 2</span>
                  <span className="font-bold">501</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Start Game
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
