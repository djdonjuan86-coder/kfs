export default function ProdukPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Produk Kids Fashion</h1>

      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow p-3">
            <div className="h-28 bg-gray-200 rounded-lg mb-2"></div>
            <p className="text-sm font-semibold">Dress Anak {item}</p>
            <p className="text-pink-500 font-bold">Rp 89.000</p>
          </div>
        ))}
      </div>
    </div>
  );
}
