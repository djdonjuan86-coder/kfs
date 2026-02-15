"use client";
import Image from "next/image";

export default function ProdukPage() {
  const products = [
    {
      id: 1,
      title: "Baju Anak Anak",
      image: "/images/setelan-anak-1.webp",
      price: 89000,
      originalPrice: 129000,
      rating: 4.9,
      sold: 100,
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
      price: 129000,
      originalPrice: 129000,
      rating: 4.8,
      sold: 150,
    },
    {
      id: 4,
      title: "Setelan Anak OOTD Jalan Jalan",
      image: "/images/setelan-anak-4.webp",
      price: 75000,
      originalPrice: 129000,
      rating: 5.0,
      sold: 175,
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold mb-4">🛍 Produk Kids Fashion</h1>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => {
          const discount = product.originalPrice > product.price ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : null;

          return (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:scale-105 transition-transform duration-300">
              {/* Image Area */}
              <div className="relative w-full overflow-hidden rounded-t-2xl">
                {/* Badge Diskon / Terlaris */}
                {discount ? (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-[7px] px-1 py-1 rounded-md z-10 shadow">-{discount}%</div>
                ) : (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-[8px] px-1 py-1 rounded-md z-10 shadow">Terlaris</div>
                )}

                <Image src={product.image} alt={product.title} width={500} height={500} className="w-full h-auto object-cover aspect-square transition-transform duration-300 hover:scale-110" priority={product.id === 1} />

                {/* TikTok Shop Style Bottom Strip */}
                <div className="absolute bottom-0 left-0 rounded-md px-2 py-1 flex gap-2 items-left">
                  {/* Gratis Ongkir */}
                  <div className="flex flex-col text-white leading-tight">
                    <span className="text-[7px] bg-teal-500">Gratis Ongkir</span>
                    <span className="text-[8px] bg-teal-500 font-semibold">XTRA</span>
                  </div>

                  {/* Separator */}
                  <div className="w-[1px] h-6 bg-white/30"></div>

                  {/* Hemat Bonus */}
                  <div className="flex flex-col text-black leading-tight">
                    <span className="text-[7px] bg-yellow-300">Hemat Pakai</span>
                    <span className="text-[8px] bg-yellow-300 font-semibold">Bonus</span>
                  </div>

                  {/* Separator */}
                  <div className="w-[1px] h-6 bg-white/30"></div>

                  {/* COD */}
                  <div className="flex flex-col text-white leading-tight">
                    <span className="text-[7px] bg-orange-500">Bayar</span>
                    <span className="text-[8px] bg-orange-500 font-semibold">COD</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 space-y-2">
                {/* Judul Slim Regular */}
                <p className="text-sm font-normal leading-tight text-gray-800">{product.title}</p>

                {/* Harga */}
                <div className="flex items-end gap-2">
                  <span className="text-base font-semibold text-pink-600">Rp {product.price.toLocaleString("id-ID")}</span>

                  {product.originalPrice > product.price && <span className="text-[10px] text-gray-400 line-through">Rp {product.originalPrice.toLocaleString("id-ID")}</span>}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>⭐ {product.rating}</span>
                  <span>{product.sold}+ Terjual</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
