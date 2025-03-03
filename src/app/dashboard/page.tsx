"use client";

import { useEffect, useState } from "react";
import Aside from "./components/aside";
import { QuoteRequestService } from "@/services/quote-request.service";
import { VisitService } from "@/services/visit.service";
import Chart from "./chart";
import "./style.css";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>({
    edu: 0,
    travel: 0,
    degreePrograms: 0,
    fullVipAssistance: 0,
    groundTransportation: 0,
    internships: 0,
    meetAndGreet: 0,
    shortTermPrograms: 0,
    teacherTrainings: 0,
    tourPackage: 0,
  });
  const [visits, setVisits] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: quotes } = await QuoteRequestService.get();
        setStats({
          edu: quotes.edu,
          travel: quotes.travel,
          ...quotes.requestCounts,
        });

        const { data: visitsResult } = await VisitService.get();
        setVisits(visitsResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(visits));
  }, [visits]);

  const menuItems = [
    { name: "Informations", href: "/dashboard/informations" },
    { name: "Services", href: "/dashboard/services" },
    { name: "Quote & Contact", href: "/dashboard/contact-form" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Aside menuItems={menuItems} />
      <main className="flex-1 flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-4xl padding-50">
          <h1 className="text-2xl font-bold mb-4 text-center">Dashboard</h1>

          {/* EDU & TRAVEL Stats */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {["edu", "travel"].map((key: string) => (
              <div
                key={key}
                className="card text-white text-center p-4 rounded"
              >
                <h2 className="text-lg font-semibold capitalize">{key}</h2>
                <p className="text-2xl font-bold">{stats[key]}</p>
              </div>
            ))}
          </div>

          {/* Other Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {Object.entries(stats)
              .filter(([key]) => key !== "edu" && key !== "travel")
              .map(([key, value]) => (
                <div
                  key={key}
                  className="card text-white text-center p-4 rounded"
                >
                  <h2 className="text-lg font-semibold capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </h2>
                  <p className="text-2xl font-bold">{value as String}</p>
                </div>
              ))}
          </div>

          {/* Chart */}
          {loading ? <p>Loading...</p> : <Chart visits={visits} />}
        </div>
      </main>
    </div>
  );
}
