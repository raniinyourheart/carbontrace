"use client";

import { Award, Leaf, Lock } from "lucide-react";

export default function GreenBadgeDisplay() {
  // nanti diganti dari API/database
  const currentBadge = {
    name: "Green Starter",
    description: "Successfully reduced carbon emissions below 100 kg CO₂.",
    progress: 65,
    nextBadge: "Eco Champion",
  };

  return (
    <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="rounded-xl bg-green-100 p-3">
          <Award className="text-green-600" size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Green Badge
          </h2>
          <p className="text-sm text-gray-500">
            Your sustainability achievement
          </p>
        </div>
      </div>

      {/* Badge */}
      <div className="flex flex-col items-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg">
          <Leaf className="text-white" size={46} />
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-800">
          {currentBadge.name}
        </h3>

        <p className="mt-2 text-center text-sm text-gray-500">
          {currentBadge.description}
        </p>
      </div>

      {/* Progress */}
      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-gray-700">
            Progress
          </span>

          <span className="text-green-600 font-semibold">
            {currentBadge.progress}%
          </span>
        </div>

        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-700"
            style={{
              width: `${currentBadge.progress}%`,
            }}
          />
        </div>
      </div>

      {/* Next Badge */}
      <div className="mt-8 rounded-xl bg-green-50 p-4">
        <div className="flex items-center gap-3">
          <Lock className="text-green-600" size={20} />

          <div>
            <h4 className="font-semibold text-gray-800">
              Next Badge
            </h4>

            <p className="text-sm text-gray-500">
              {currentBadge.nextBadge}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}