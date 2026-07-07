import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="font-bold text-xl text-gray-800">
              Carbon<span className="text-green-600">Trace</span>
            </span>
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-green-600">
              Beranda
            </Link>
            <Link href="/calculator" className="text-gray-600 hover:text-green-600">
              Kalkulator
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-green-600">
              Dashboard
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-green-600">
              Tentang
            </Link>
          </div>

          {/* Tombol CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-gray-600 hover:text-green-600"
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Daftar Gratis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}