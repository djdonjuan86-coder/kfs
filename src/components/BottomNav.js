"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItem = (href, label) => (
    <Link href={href} className={`flex-1 text-center py-3 text-sm ${pathname === href ? "text-pink-500 font-semibold" : "text-gray-400"}`}>
      {label}
    </Link>
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t flex shadow-md">
      {navItem("/", "Home")}
      {navItem("/live", "Live")}
      {navItem("/produk", "Produk")}
      {navItem("/profil", "Profil")}
    </div>
  );
}
