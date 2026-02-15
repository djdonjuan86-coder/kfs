<main className="h-screen w-screen overflow-hidden bg-gray-100 flex flex-col">
  <div className="p-4 text-center">
    <h1 className="text-2xl font-bold">Kids Fashion Story</h1>
    <p className="text-sm">Stylish · Spacious · Fashionable</p>
  </div>

  {/* Preview Full Height */}
  <div className="relative flex-1 overflow-hidden flex items-center justify-center">
    <img src="https://i.ibb.co/cKWgqXFf/image.png" alt="Preview Live" className="absolute inset-0 w-full h-full object-cover blur-sm" />

    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-300 z-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>

  <div className="p-4">
    <a href="/live" className="block bg-pink-500 text-white text-center py-3 rounded-xl font-semibold">
      Join Live Sekarang
    </a>
  </div>
</main>;
