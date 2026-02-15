"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // sementara masih false

  return (
    <div className="min-h-screen relative bg-gray-100">
      {/* Konten profile mock */}
      <div className={`p-4 space-y-4 ${!isLoggedIn ? "blur-sm" : ""}`}>
        <h1 className="text-2xl font-bold text-black">Halo, Nama Pengguna</h1>
        <div className="flex items-center p-4 gap-4 bg-gray-100">
          <img src="https://i.ibb.co.com/yBFC2qfJ/z2.png" alt="Foto Profil" className="w-20 h-20 rounded-full object-cover" />
          <div>
            <h2 className="text-lg font-bold text-black">Nama Pengguna</h2>
            <p className="text-sm text-black/70">Bio singkat tentang pengguna.</p>
            <p className="text-sm mt-1 font-semibold text-black/80">120 Following | 250 Followers</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 h-40 flex items-center justify-center">
              <span className="text-black/50 text-lg">Item {i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay login  posisi tengah-bawah */}
      {!isLoggedIn && (
        <div className="absolute left-1/2 bottom-50 -translate-x-1/2 w-11/12 max-w-sm bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center z-50 rounded-lg p-6 shadow-lg">
          <h2 className="text-lg font-bold text-center mb-2">Login dengan TikTok</h2>
          <p className="text-sm text-center text-black/70 mb-4">Untuk mengakses halaman ini dan berbelanja</p>
          <a href="/api/tiktok-login?code=dummycode" className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition">
            Login dengan TikTok
          </a>
        </div>
      )}
    </div>
  );
}
