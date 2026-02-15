export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Kids Fashion Story</h1>
      <p className="text-s mb-3">Stylish · Spacious · Fasyhionable</p>
      <div className="p-4 space-y-4">
        <h1 className="text-xl font-bold">🔴 Live Streaming</h1>

        {/* Preview Area Fullscreen Responsif dengan Foto Blur */}
        <div className="w-full h-[50vh] sm:h-[70vh] md:h-[500px] relative overflow-hidden rounded-xl flex items-center justify-center">
          {/* Background Foto Blur */}
          <img
            src="https://i.ibb.co.com/cKWgqXFf/image.png" // ganti dengan foto konten nyata
            alt="Preview Live"
            className="absolute inset-0 w-full h-full object-cover filter blur-sm"
          />

          {/* Icon Play Video */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-400 opacity-50 hover:opacity-50 transition-opacity cursor-pointer z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <a href="/live" className="block bg-pink-500 text-white text-center py-3 rounded-xl font-semibold">
          Join Live Sekarang
        </a>
      </div>
      <p> </p>
    </main>
  );
}
