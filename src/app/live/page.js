"use client";

import { useEffect, useState } from "react";

export default function LivePage() {
  const [liveStatus, setLiveStatus] = useState("loading");

  useEffect(() => {
    const checkLiveStatus = () => {
      const now = new Date();
      const jakartaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));

      const hour = jakartaTime.getHours();

      // Live setiap hari jam 10:00 - 15:00 WIB
      if (hour >= 10 && hour < 15) {
        setLiveStatus("live");
      } else {
        setLiveStatus("offline");
      }
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-100">
      {/* Status LIVE */}
      <div className="p-4 flex items-center gap-2 z-20 relative">
        {liveStatus === "live" ? (
          <>
            <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
            <span className="text-red-500 font-bold text-sm">Host Sedang Live</span>
          </>
        ) : (
          <>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="text-black-500 text-sm">Host Sedang Tidak Live</span>
          </>
        )}
      </div>

      {/* Preview Area Fullscreen Responsif - Foto Blur */}
      <div className="w-full h-[50vh] sm:h-[80vh] md:h-[500px] relative overflow-hidden rounded-xl flex items-center justify-center">
        {/* Background Foto Blur */}
        <img
          src="/images/baju-anak.webp" // ganti dengan foto konten nyata
          alt="Preview Live"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />

        {/* Icon Play Video */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-200 opacity-80 hover:opacity-100 transition-opacity cursor-pointer z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Tombol Dinamis */}
      <div className="p-4 z-20 relative">
        <a
          href={liveStatus === "live" ? "#" : "https://wa.me/6289675007000?text=Ingatkan%20saya%20saat%20live%20dimulai"}
          target="_blank"
          className={`block text-center py-3 rounded-xl font-semibold ${liveStatus === "live" ? "bg-red-500 text-white animate-pulse" : "bg-green-500 text-white"}`}
        >
          {liveStatus === "live" ? "Tonton Sekarang 🔥" : "Ketinggalan Live? ➔ Ingatkan Saya via WhatsApp"}
        </a>
      </div>
    </div>
  );
}
