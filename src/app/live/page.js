export default function LivePage() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-white">
      {/* Background */}
      <img src="/images/baju-anak.webp" alt="Live" className="absolute inset-0 w-full h-full object-cover" />

      {/* Gradients */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black/90 to-transparent"></div>

      {/* TOP BAR */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <img src="/images/setelan-anak.webp" className="w-10 h-10 rounded-full border border-white" alt="avatar" />

          <div>
            <p className="text-sm font-semibold">@kidsfashion</p>

            <div className="flex items-center gap-2 mt-1">
              <span className="bg-red-600 text-[10px] px-2 py-[2px] rounded font-bold">LIVE</span>

              <span className="text-[10px] bg-black/40 px-2 py-[2px] rounded">1.2K penonton</span>
            </div>
          </div>

          {/* FOLLOW BUTTON */}
          <button className="ml-2 bg-pink-500 text-xs px-3 py-1 rounded-full font-semibold">Follow</button>
        </div>

        {/* Close */}
        <button className="text-white text-2xl font-light">×</button>
      </div>

      {/* RIGHT SIDE ACTIONS */}
      <div className="absolute right-3 bottom-32 flex flex-col items-center gap-6 z-20">
        {/* Like */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-xl">❤️</div>
          <span className="text-xs mt-1">12K</span>
        </div>

        {/* Comment */}
        <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-xl">💬</div>

        {/* Gift */}
        <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-xl">🎁</div>

        {/* SHARE BUTTON (SVG lebih mirip asli) */}
        <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
            <path d="M18 8a3 3 0 10-2.83-4H15a3 3 0 000 6c.34 0 .66-.06.96-.17l-6.27 3.65a3 3 0 100 1.04l6.27 3.65A3 3 0 1018 16a2.99 2.99 0 00-1.96.74l-6.27-3.65a3.07 3.07 0 000-2.18l6.27-3.65c.3.11.62.17.96.17z" />
          </svg>
        </div>
      </div>

      {/* COMMENTS AREA */}
      <div className="absolute bottom-28 left-4 right-20 space-y-2 text-sm z-20 max-h-40 overflow-hidden">
        <div className="bg-black/40 px-3 py-1 rounded-full w-fit">
          <span className="font-semibold text-pink-400">siti sukini:</span> Kak ini ready?
        </div>

        <div className="bg-black/40 px-3 py-1 rounded-full w-fit">
          <span className="font-semibold text-yellow-400">bundamaya:</span> Ambil 2 yaa
        </div>

        <div className="bg-black/40 px-3 py-1 rounded-full w-fit">
          <span className="font-semibold text-green-400">rafi99:</span> Bisa kirim hari ini?
        </div>

        <div className="bg-black/40 px-3 py-1 rounded-full w-fit">
          <span className="font-semibold text-blue-400">mama_putri:</span> Warna pink ada?
        </div>

        <div className="bg-black/40 px-3 py-1 rounded-full w-fit">
          <span className="font-semibold text-purple-400">adelia:</span> Spill harga dong kak
        </div>
      </div>

      {/* BOTTOM CHAT INPUT */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 z-20">
        <input type="text" placeholder="Kirim komentar..." className="flex-1 bg-black/50 rounded-full px-4 py-2 text-sm outline-none" />

        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-lg">🎁</div>
      </div>
    </div>
  );
}
