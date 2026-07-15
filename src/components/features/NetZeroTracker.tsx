"use client";

import { Target, TrendingDown, Leaf } from "lucide-react";

export default function NetZeroTracker() {
  // nanti ambil dari API/database
  const currentEmission = 245;
  const targetEmission = 100;

  const progress = Math.min(
    ((targetEmission / currentEmission) * 100),
    100
  ).toFixed(0);

  return (
    <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-green-100 p-3">
          <Target className="text-green-600" size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Net Zero Tracker
          </h2>

          <p className="text-sm text-gray-500">
            Track your sustainability goals
          </p>
        </div>
      </div>

      {/* Current & Target */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-green-50 p-4">
          <p className="text-sm text-gray-500">
            Current Emission
          </p>

          <h3 className="mt-2 text-3xl font-bold text-green-700">
            {currentEmission}
          </h3>

          <span className="text-sm text-gray-500">
            kg CO₂/month
          </span>
        </div>

        <div className="rounded-xl bg-emerald-50 p-4">
          <p className="text-sm text-gray-500">
            Target Emission
          </p>

          <h3 className="mt-2 text-3xl font-bold text-emerald-700">
            {targetEmission}
          </h3>

          <span className="text-sm text-gray-500">
            kg CO₂/month
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-8">
        <div className="mb-2 flex justify-between">
          <span className="font-medium text-gray-700">
            Progress to Net Zero
          </span>

          <span className="font-semibold text-green-600">
            {progress}%
          </span>
        </div>

        <div className="h-4 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 rounded-xl border border-green-100 bg-green-50 p-4">
        <div className="flex items-start gap-3">
          <Leaf
            className="mt-1 text-green-600"
            size={22}
          />

          <div>
            <h4 className="font-semibold text-gray-800">
              Sustainability Goal
            </h4>

            <p className="mt-1 text-sm text-gray-600">
              Reduce approximately{" "}
              <span className="font-semibold text-green-700">
                {currentEmission - targetEmission} kg CO₂
              </span>{" "}
              to achieve your monthly Net Zero target.
            </p>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="mt-6 flex items-center justify-between rounded-xl bg-gray-50 p-4">
        <div className="flex items-center gap-2">
          <TrendingDown
            className="text-green-600"
            size={20}
          />

          <span className="font-medium text-gray-700">
            Monthly Trend
          </span>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
          Improving 🌱
        </span>
      </div>
    </div>
  );
}