import './index.css';

function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">
      <nav className="absolute top-4 right-4 space-x-4 text-sm">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Select Your Character</h1>
        <p className="text-gray-400 mb-8">Role: Full-Stack Developer</p>

        {/* Character Placeholder */}
        <div className="w-48 h-48 bg-gray-800 rounded-full mb-6 mx-auto shadow-lg border border-gray-700">
          {/* Replace with image/3D later */}
        </div>

        {/* Select Button */}
        <button className="bg-blue-600 hover:bg-blue-500 transition px-6 py-2 rounded-xl text-lg font-medium">
          Select Character
        </button>
      </div>

      {/* Stat Panel */}
      <div className="mt-10 max-w-md bg-gray-900/70 border border-gray-800 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Character Stats</h2>
        <ul className="space-y-1 text-sm">
          <li>🧠 JavaScript: Expert</li>
          <li>⚛️ React: Advanced</li>
          <li>💨 Tailwind: Advanced</li>
          <li>🔧 Node.js: Intermediate</li>
        </ul>
      </div>
    </main>
  );
}

export default App;
