"use client";

import {
  Leaf,
  Award,
  TrendingDown,
  Target,
} from "lucide-react";

const stats = [
  {
    title: "Total Emission",
    value: "245 kg",
    subtitle: "CO₂ / month",
    icon: Leaf,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Green Score",
    value: "82",
    subtitle: "/100",
    icon: Target,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Current Badge",
    value: "Gold",
    subtitle: "Eco Champion",
    icon: Award,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Reduction",
    value: "15%",
    subtitle: "vs last month",
    icon: TrendingDown,
    color: "bg-blue-100 text-blue-600",
  },
];

export default function DashboardStats() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                  {item.value}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {item.subtitle}
                </p>
              </div>

              <div
                className={`rounded-xl p-4 ${item.color}`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}