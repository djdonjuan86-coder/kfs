"use client";
import { useEffect, useState } from "react";

export default function LivePage() {
  const [hearts, setHearts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // Floating hearts (posisi agak tengah atas)
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev, { id: Date.now(), left: Math.random() * 60 + 20 }]);

      setTimeout(() => {
        setHearts((prev) => prev.slice(1));
      }, 2500);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-white" onClick={() => setShowPopup(true)}>
      {/* Background */}
      <img src="/images/baju-anak.webp" alt="Live" className="absolute inset-0 w-full h-full object-cover" />

      {/* Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black/95 to-transparent"></div>

      {/* TOP BAR */}
      <div className="absolute top-4 left-4 right-4 flex items-center z-20">
        <div className="flex items-center gap-3">
          {/* Avatar with LIVE ring */}
          <div className="relative">
            <span className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping"></span>
            <img src="/images/setelan-anak.webp" className="w-10 h-10 rounded-full border-2 border-red-500 relative" alt="avatar" />
          </div>

          <div>
            <p className="text-sm font-semibold">@kidsfashion</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-red-600 text-[10px] px-2 py-[2px] rounded font-bold">LIVE</span>
              <span className="text-[10px] bg-black/40 px-2 py-[2px] rounded">1.2K</span>
            </div>
          </div>

          <button className="ml-2 bg-pink-500 text-xs px-3 py-1 rounded-full font-semibold" onClick={(e) => e.stopPropagation()}>
            Follow
          </button>
        </div>
      </div>

      {/* ❤️ LOVE ANIMATION - AGAK TENGAH ATAS */}
      {hearts.map((heart) => (
        <div key={heart.id} className="absolute top-1/3 text-red-500 text-2xl animate-ping" style={{ left: `${heart.left}%` }}>
          ❤️
        </div>
      ))}

      {/* RIGHT SIDE ACTIONS */}
      <div className="absolute right-3 bottom-32 flex flex-col items-center gap-6 z-20">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-xl">❤️</div>
          <span className="text-xs mt-1">12K</span>
        </div>

        <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-xl">💬</div>

        <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-xl">🎁</div>
      </div>

      {/* COMMENTS */}
      <div className="absolute bottom-28 left-4 right-20 space-y-2 text-sm z-20 max-h-40 overflow-hidden">
        <div className="bg-black/40 px-3 py-1 rounded-full w-fit">
          <span className="font-semibold text-pink-400">siti:</span> Kak ini ready?
        </div>
        <div className="bg-black/40 px-3 py-1 rounded-full w-fit">
          <span className="font-semibold text-yellow-400">mama_putri:</span> Warna pink ada?
        </div>
        <div className="bg-black/40 px-3 py-1 rounded-full w-fit">
          <span className="font-semibold text-green-400">rafi99:</span> Spill harga dong kak
        </div>
      </div>

      {/* BOTTOM CHAT INPUT */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 z-20" onClick={(e) => e.stopPropagation()}>
        <input type="text" placeholder="Kirim komentar..." className="flex-1 bg-black/50 rounded-full px-4 py-2 text-sm outline-none" />
        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-lg">🎁</div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-pink-500 text-white rounded-2xl px-6 py-6 text-center max-w-sm w-11/12 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <p className="text-lg font-semibold mb-4">
              Ketinggalan Live? <br />
              Infokan Jadwal Live Berikutnya
            </p>

            <a href="/live" className="inline-block bg-white text-pink-600 font-semibold px-5 py-2 rounded-full">
              Beritahu Saya
            </a>

            <button onClick={() => setShowPopup(false)} className="block text-sm mt-4 opacity-80">
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
