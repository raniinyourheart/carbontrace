"use client";

import { useState } from "react";
import { Leaf, Calculator } from "lucide-react";

export default function CalculatorForm() {
  const [formData, setFormData] = useState({
    businessType: "",
    electricity: "",
    fuel: "",
    transportation: "",
    waste: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    // nanti fetch ke API
    // /api/calculator
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-green-100">
          <Leaf className="text-green-600" size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Carbon Calculator
          </h2>

          <p className="text-gray-500 text-sm">
            Calculate your business carbon footprint.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Business */}

        <div>
          <label className="block mb-2 font-medium">
            Business Type
          </label>

          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="">Select Business</option>
            <option>Food & Beverage</option>
            <option>Retail</option>
            <option>Fashion</option>
            <option>Manufacturing</option>
            <option>Services</option>
          </select>
        </div>

        {/* Electricity */}

        <div>
          <label className="block mb-2 font-medium">
            Electricity Usage (kWh/month)
          </label>

          <input
            type="number"
            name="electricity"
            value={formData.electricity}
            onChange={handleChange}
            placeholder="Example: 350"
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Fuel */}

        <div>
          <label className="block mb-2 font-medium">
            Fuel Usage (Liter/month)
          </label>

          <input
            type="number"
            name="fuel"
            value={formData.fuel}
            onChange={handleChange}
            placeholder="Example: 120"
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Transportation */}

        <div>
          <label className="block mb-2 font-medium">
            Transportation Distance (km/month)
          </label>

          <input
            type="number"
            name="transportation"
            value={formData.transportation}
            onChange={handleChange}
            placeholder="Example: 600"
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Waste */}

        <div>
          <label className="block mb-2 font-medium">
            Waste Produced (kg/month)
          </label>

          <input
            type="number"
            name="waste"
            value={formData.waste}
            onChange={handleChange}
            placeholder="Example: 45"
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
        >
          <Calculator size={18} />
          Calculate Carbon Footprint
        </button>
      </form>
    </div>
  );
}