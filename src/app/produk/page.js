"use client";
import { useState } from "react";

export default function ProdukPage() {
  const [favorites, setFavorites] = useState([false, false, false, false]);

  const toggleFavorite = (index) => {
    const newFav = [...favorites];
    newFav[index] = !newFav[index];
    setFavorites(newFav);
  };

  const productImages = ["https://i.ibb.co.com/RpZB6n2q/z.png", "https://i.ibb.co.com/RpZB6n2q/z.png", "https://i.ibb.co.com/RpZB6n2q/z.png", "https://i.ibb.co.com/RpZB6n2q/z.png"];

  const productTitles = ["Baju Anak Anak", "Setelan Anak Lucu", "Baju Anak Casual Elegan", "Setelan Anak OOTD Jalan Jalan"];

  const productRatings = [4.9, 4.7, 4.8, 5.0];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-4">🛍 Produk Kids Fashion</h1>

      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((item, idx) => (
          <div key={item} className="bg-white rounded-2xl shadow-sm overflow-hidden relative hover:scale-105 transition-transform">
            {/* Pojok Love */}
            <div className={`absolute top-2 right-2 text-lg cursor-pointer transition-colors ${favorites[idx] ? "text-pink-500" : "text-pink-300"}`} onClick={() => toggleFavorite(idx)}>
              ❤️
            </div>

            {/* Image Area */}
            <div className="relative w-full aspect-square">
              <img src={productImages[idx]} alt={`Produk ${item}`} className="w-full h-full object-cover" />

              {/* Badge Terlaris */}
              {item === 1 && <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-md font-bold">🔥 Terlaris</div>}
            </div>

            {/* Content */}
            <div className="p-3 space-y-2">
              <p className="text-sm font-semibold leading-tight">{productTitles[idx]}</p>

              {/* Harga */}
              <div className="flex items-center gap-2">
                <span className="text-pink-600 font-bold text-sm">Rp 89.000</span>
                <span className="text-gray-400 text-xs line-through">Rp 129.000</span>
              </div>

              {/* Badge Gratis Ongkir & COD */}
              <div className="flex flex-wrap gap-1">
                <span className="bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-md font-medium">Gratis Ongkir</span>
                <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded-md font-medium">COD</span>
              </div>

              {/* Rating & Terjual */}
              <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                <span className="flex items-center gap-1 text-black-400">⭐ {productRatings[idx]}</span>
                <span>{100 + idx * 25} Terjual</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
