import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Calculator,
  Award,
  BarChart3,
  Sparkles,
  Brain,
  TrendingUp,
  ShieldCheck,
  
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Calculator,
      title: "Hitung Jejak Karbon",
      desc: "Upload tagihan listrik dan data usaha. AI akan menghitung emisi karbon secara otomatis.",
    },
    {
      icon: Brain,
      title: "Analisis AI",
      desc: "Dapatkan insight dan rekomendasi untuk mengurangi emisi bisnis Anda.",
    },
    {
      icon: Award,
      title: "Green Badge",
      desc: "Tampilkan komitmen lingkungan dengan badge digital dan QR terverifikasi.",
    },
  ];

  const stats = [
    { value: "500+", label: "UMKM" },
    { value: "10K+", label: "Ton CO₂" },
    { value: "95%", label: "Akurasi AI" },
    { value: "2060", label: "Net Zero" },
  ];

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Aurora Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />

        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-400/25 blur-[120px]" />
        <div className="absolute top-20 right-0 h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-lime-400/20 blur-[120px]" />
        <div className="absolute top-40 right-1/3 h-[300px] w-[300px] rounded-full bg-cyan-300/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 backdrop-blur-xl px-4 py-2 shadow-sm mb-6">
                <Sparkles className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">
                  AI Powered Carbon Management
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900">
                Kelola
                <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                  Jejak Karbon
                </span>
                UMKM Indonesia
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
                Platform AI untuk membantu UMKM menghitung,
                memonitor, dan mengurangi emisi karbon secara
                mudah menuju Indonesia Net Zero 2060.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/calculator"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 text-white font-semibold shadow-xl shadow-green-300/40 transition-all hover:scale-105"
                >
                  Mulai Hitung
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-xl px-8 py-4 font-semibold text-gray-700 hover:bg-white"
                >
                  Lihat Demo
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  Terverifikasi
                </div>

                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  Analisis Instan
                </div>

                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  Ramah Lingkungan
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">

              {/* Floating Card */}
              <div className="absolute -top-8 right-0 z-20 rounded-2xl bg-white p-4 shadow-2xl">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">AI Insight</span>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  Potensi hemat energi 22%
                </p>
              </div>

              {/* Dashboard */}
              <div className="rounded-[32px] border border-white/40 bg-white/70 backdrop-blur-2xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.12)]">

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm text-gray-500">
                      Carbon Dashboard
                    </p>

                    <h3 className="text-2xl font-bold">
                      CarbonTrace
                    </h3>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    Green Badge
                  </span>
                </div>

                <div className="space-y-6">

                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>Progress Net Zero</span>
                      <span>78%</span>
                    </div>

                    <div className="h-4 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-green-50 p-5">
                      <p className="text-sm text-gray-500">
                        Emisi Bulan Ini
                      </p>

                      <h4 className="text-3xl font-bold mt-2">
                        1.2T
                      </h4>
                    </div>

                    <div className="rounded-2xl bg-cyan-50 p-5">
                      <p className="text-sm text-gray-500">
                        Pengurangan
                      </p>

                      <h4 className="text-3xl font-bold mt-2">
                        -18%
                      </h4>
                    </div>

                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-5 text-white">
                    <p className="text-sm opacity-90">
                      AI Recommendation
                    </p>

                    <h4 className="text-lg font-semibold mt-2">
                      Ganti lampu ke LED untuk menurunkan emisi hingga 15%
                    </h4>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-5 py-4 shadow-xl">
                🏆 Verified Green Business
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <h3 className="text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  {stat.value}
                </h3>

                <p className="mt-2 text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center mb-16">
            <span className="font-semibold text-green-600">
              FITUR UNGGULAN
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900">
              Semua yang Dibutuhkan UMKM
            </h2>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Kelola jejak karbon bisnis dengan teknologi AI yang sederhana dan efektif.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {features.map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-3xl border border-green-100 bg-white/80 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(34,197,94,0.20)]"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-cyan-500/5" />

                  <div className="relative">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-green-100 to-cyan-100 p-4">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">

        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-500" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_40%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center text-white">

          <Leaf className="mx-auto h-14 w-14 mb-6" />

          <h2 className="text-4xl md:text-6xl font-black">
            Siap Jadi UMKM Hijau?
          </h2>

          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Mulai perjalanan menuju bisnis berkelanjutan dan tunjukkan
            komitmen lingkungan kepada pelanggan Anda.
          </p>

          <Link
            href="/register"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-green-600 shadow-2xl transition hover:scale-105"
          >
            Daftar Gratis Sekarang
            <ArrowRight className="h-5 w-5" />
          </Link>

        </div>
      </section>
    </main>
  );
}