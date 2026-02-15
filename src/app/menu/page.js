"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Tabs horizontal
  const tabs = [
    {
      name: "Home",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10h4v-6h6v6h4V10m-4 0V5l-6-6-6 6v5" />
        </svg>
      ),
    },
    {
      name: "Video",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8v12H4V6z" />
        </svg>
      ),
    },
    {
      name: "Love",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8a6 6 0 0112 0c0 6-6 9-6 9s-6-3-6-9z" />
        </svg>
      ),
    },
    {
      name: "Favorite",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.04 6.293a1 1 0 00.95.69h6.615c.969 0 1.371 1.24.588 1.81l-5.356 3.888a1 1 0 00-.364 1.118l2.04 6.293c.3.921-.755 1.688-1.538 1.118l-5.356-3.888a1 1 0 00-1.175 0l-5.356 3.888c-.783.57-1.838-.197-1.538-1.118l2.04-6.293a1 1 0 00-.364-1.118L2.816 11.72c-.783-.57-.38-1.81.588-1.81h6.615a1 1 0 00.95-.69l2.04-6.293z"
          />
        </svg>
      ),
    },
  ];

  // Sub navbar vertical
  const subNavbar = [
    { name: "Akun", sub: ["Profil", "Ubah Password"] },
    { name: "Pesanan", sub: ["Sedang Diproses", "Riwayat"] },
    { name: "Chat Toko", sub: ["Chat Baru", "Semua Chat"] },
    { name: "Setting", sub: ["Preferensi", "Bantuan"] },
  ];

  // Dummy konten per tab
  const dummyContent = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar Horizontal */}
      <nav className="flex justify-end items-center bg-gray-100 p-3 gap-4">
        {/* Icon Tambahkan Teman */}
        <button className="w-6 h-6 text-black">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9a3 3 0 11-6 0 3 3 0 016 0zM6 12v6m3-3H3" />
          </svg>
        </button>

        {/* Icon Notifikasi */}
        <button className="w-6 h-6 text-black">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405C18.79 15.21 18 14 18 14V9a6 6 0 10-12 0v5s-.79 1.21-1.595 1.595L3 17h5m4 0v1a3 3 0 11-6 0v-1h6z" />
          </svg>
        </button>

        {/* Icon Menu */}
        <div className="relative">
          <button className="w-6 h-6 text-black" onClick={() => setMenuOpen(!menuOpen)}>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute top-8 right-0 w-48 bg-white shadow-md rounded-md p-2 z-50">
              {subNavbar.map((menu) => (
                <div key={menu.name} className="mb-2">
                  <p className="font-bold text-black cursor-pointer">{menu.name}</p>
                  <ul className="ml-3 mt-1">
                    {menu.sub.map((sub) => (
                      <li key={sub} className="text-black text-sm cursor-pointer hover:bg-gray-100 p-1 rounded-md">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Profile Info */}
      <div className="flex items-center p-4 gap-4 bg-gray-100">
        <img src="https://i.ibb.co.com/yBFC2qfJ/z2.png" alt="Foto Profil" className="w-20 h-20 rounded-full object-cover" />
        <div>
          <h2 className="text-lg font-bold text-black">Nama Pengguna</h2>
          <p className="text-sm text-black/70">Bio singkat tentang pengguna.</p>
          <p className="text-sm mt-1 font-semibold text-black/80">120 Following | 250 Followers</p>
        </div>
      </div>

      {/* Tab Filter Horizontal */}
      <div className="flex justify-around bg-gray-100 mt-2 p-2">
        {tabs.map((tab) => (
          <button key={tab.name} className={`flex flex-col items-center gap-1 text-sm transition ${activeTab === tab.name ? "text-black font-bold" : "text-black/60"}`} onClick={() => setActiveTab(tab.name)}>
            {tab.icon}
          </button>
        ))}
      </div>

      {/* Grid Konten Vertikal 2 kolom dengan divider tipis */}
      <div className="p-2 grid grid-cols-2 gap-2">
        {dummyContent.map((item) => (
          <div key={item} className="bg-white rounded-lg overflow-hidden border border-gray-200 h-40 flex items-center justify-center">
            <span className="text-black/50 text-lg">Item {item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
