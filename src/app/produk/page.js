"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProdukPage() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const products = [
    {
      id: 1,
      title: "Baju Anak Anak",
      image: "/images/setelan-anak-1.webp",
      price: 89000,
      originalPrice: 129000,
      rating: 4.9,
      sold: 100,
      bestSeller: true,
    },
    {
      id: 2,
      title: "Setelan Anak Lucu",
      image: "/images/setelan-anak-2.webp",
      price: 89000,
      originalPrice: 129000,
      rating: 4.7,
      sold: 125,
    },
    {
      id: 3,
      title: "Baju Anak Casual Elegan",
      image: "/images/setelan-anak-3.webp",
      price: 89000,
      originalPrice: 129000,
      rating: 4.8,
      sold: 150,
    },
    {
      id: 4,
      title: "Setelan Anak OOTD Jalan Jalan",
      image: "/images/setelan-anak-4.webp",
      price: 89000,
      originalPrice: 129000,
      rating: 5.0,
      sold: 175,
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-4">🛍 Produk Kids Fashion</h1>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden relative hover:scale-105 transition-transform duration-300">
            {/* Love Button */}
            <div className={`absolute top-2 right-2 text-lg cursor-pointer transition-colors z-10 ${favorites[product.id] ? "text-pink-500" : "text-pink-300"}`} onClick={() => toggleFavorite(product.id)}>
              ❤️
            </div>

            {/* Image Area */}
            <div className="w-full overflow-hidden rounded-t-2xl">
              <Image src={product.image} alt={product.title} width={500} height={500} className="w-full h-auto object-cover aspect-square" priority={product.id === 1} />
            </div>

            {/* Content */}
            <div className="p-3 space-y-2">
              <p className="text-sm font-semibold leading-tight">{product.title}</p>

              {/* Harga */}
              <div className="flex items-center gap-2">
                <span className="text-pink-600 font-bold text-sm">Rp {product.price.toLocaleString("id-ID")}</span>
                <span className="text-gray-400 text-xs line-through">Rp {product.originalPrice.toLocaleString("id-ID")}</span>
              </div>

              {/* Badge */}
              <div className="flex flex-wrap gap-1">
                <span className="bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-md font-medium">Gratis Ongkir</span>
                <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded-md font-medium">COD</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                <span>⭐ {product.rating}</span>
                <span>{product.sold}+ Terjual</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
