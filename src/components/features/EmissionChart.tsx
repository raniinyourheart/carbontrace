"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BarChart3 } from "lucide-react";

const emissionData = [
  { month: "Jan", emission: 320 },
  { month: "Feb", emission: 295 },
  { month: "Mar", emission: 280 },
  { month: "Apr", emission: 250 },
  { month: "May", emission: 235 },
  { month: "Jun", emission: 210 },
];

export default function EmissionChart() {
  return (
    <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-green-100 p-3">
          <BarChart3 className="text-green-600" size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Carbon Emission Trend
          </h2>

          <p className="text-sm text-gray-500">
            Monthly carbon footprint monitoring
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={emissionData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis unit=" kg" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="emission"
              stroke="#22c55e"
              strokeWidth={4}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary */}
      <div className="mt-6 rounded-xl bg-green-50 p-4">
        <h3 className="font-semibold text-gray-800">
          Summary
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Carbon emissions have decreased steadily over the last
          six months, indicating positive progress toward
          sustainability goals.
        </p>
      </div>
    </div>
  );
}