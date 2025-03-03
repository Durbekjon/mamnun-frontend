"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";

type Visit = { date: string; count: number; visits?: string[] };
type DashboardProps = { visits: Visit[] };

const getTodayVisits = (visits: Visit[]) => {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  // Bugungi oydagi tashriflarni filter qilish
  const todayVisits = visits.filter(
    (visit) => new Date(visit.date).getMonth() === todayMonth
  );

  // Sanani guruhlash va count ni qo‘shish
  const grouped: Record<string, number> = {};
  todayVisits.forEach((visit) => {
    const visitDate = format(new Date(visit.date), "yyyy-MM-dd");
    grouped[visitDate] = (grouped[visitDate] || 0) + visit.count;
  });

  return Object.entries(grouped).map(([date, count]) => ({ date, count }));
};

const groupByMonth = (visits: Visit[]) => {
  const monthlyData: Record<string, number> = {};
  visits.forEach((visit) => {
    const month = format(new Date(visit.date), "yyyy-MM");
    monthlyData[month] = (monthlyData[month] || 0) + visit.count;
  });

  return Object.entries(monthlyData).map(([date, count]) => ({ date, count }));
};

const groupByYear = (visits: Visit[]) => {
  const yearlyData: Record<string, number> = {};
  visits.forEach((visit) => {
    const year = format(new Date(visit.date), "yyyy");
    yearlyData[year] = (yearlyData[year] || 0) + visit.count;
  });

  return Object.entries(yearlyData).map(([date, count]) => ({ date, count }));
};

export default function Chart({ visits }: DashboardProps) {
  const [filter, setFilter] = useState<"daily" | "monthly" | "yearly">("daily");

  const filteredData =
    filter === "monthly"
      ? groupByMonth(visits)
      : filter === "yearly"
      ? groupByYear(visits)
      : getTodayVisits(visits); // Bugungi ma'lumotlarni olish

  return (
    <div>
      {/* Filter Tugmalari */}
      <div className="flex justify-center gap-2 mb-4">
        {["Yearly", "Monthly", "Daily"].map((type) => (
          <button
            key={type}
            onClick={() =>
              setFilter(type.toLowerCase() as "daily" | "monthly" | "yearly")
            }
            className={`px-4 py-2 rounded-md transition ${
              filter === type.toLowerCase()
                ? "bg-purple-500 text-white"
                : "bg-gray-300 hover:bg-gray-400 text-black"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={filteredData}
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#4A5568"
            radius={[5, 5, 0, 0]}
            barSize={50}
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Agar bugungi kunga ma'lumot bo'lmasa */}
      {filter === "daily" && filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          Bugungi kunga ma'lumot topilmadi.
        </p>
      )}
    </div>
  );
}
