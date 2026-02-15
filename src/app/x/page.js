export default function LivePage() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-white">
      {/* Background Video / Thumbnail */}
      <img src="/images/baju-anak.webp" alt="Live" className="absolute inset-0 w-full h-full object-cover" />

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent"></div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/90 to-transparent"></div>

      {/* TOP BAR */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        {/* Live Info */}
        <div className="flex items-center gap-2">
          <img src="/images/setelan-anak.webp" className="w-10 h-10 rounded-full border border-white" alt="avatar" />

          <div>
            <p className="text-sm font-semibold">@kidsfashion</p>
            <div className="flex items-center gap-1">
              <span className="bg-red-600 text-xs px-2 py-[2px] rounded-md font-bold">LIVE</span>
              <span className="text-xs bg-black/40 px-2 py-[2px] rounded-md">1.2K</span>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button className="text-white text-2xl font-light">×</button>
      </div>

      {/* RIGHT SIDE ACTIONS */}
      <div className="absolute right-3 bottom-32 flex flex-col items-center gap-5 z-20">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center">❤️</div>
          <span className="text-xs mt-1">12K</span>
        </div>

        <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center">💬</div>

        <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center">🎁</div>

        <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center">↗</div>
      </div>

      {/* COMMENTS AREA */}
      <div className="absolute bottom-28 left-4 right-20 space-y-2 text-sm z-20">
        <div className="bg-black/40 px-3 py-1 rounded-full w-fit">
          <span className="font-semibold text-pink-400">siti sukini:</span> Kak ini ready?
        </div>

        <div className="bg-black/40 px-3 py-1 rounded-full w-fit">
          <span className="font-semibold text-yellow-400">bundamaya:</span> Ambil 2 yaa
        </div>
      </div>

      {/* BOTTOM CHAT INPUT */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 z-20">
        <input type="text" placeholder="Kirim komentar..." className="flex-1 bg-black/50 rounded-full px-4 py-2 text-sm outline-none" />

        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">🎁</div>
      </div>
    </div>
  );
}
