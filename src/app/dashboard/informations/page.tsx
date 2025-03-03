"use client";
import Aside from "../components/aside";
import { useEffect, useState } from "react";
import { InfoService } from "@/services/info.service";
import "../style.css";

export default function Informations() {
  const [info, setInfo] = useState<any>(null);
  const [editingInfo, setEditingInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchInfo = async () => {
    try {
      const { data } = await InfoService.get();
      setInfo(data);
      setEditingInfo(data);
    } catch (error) {
      console.error("Failed to fetch information:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleUpdateInfo = async () => {
    await InfoService.update(info.id, {
      phoneNumber: editingInfo.phoneNumber,
      mail: editingInfo.mail,
    });
    fetchInfo();
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingInfo((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Check if the button should be shown
  const isButtonDisabled = () => {
    return (
      info?.phoneNumber === editingInfo?.phoneNumber &&
      info?.mail === editingInfo?.mail
    );
  };

  const menuItems = [
    { name: "Informations", href: "/dashboard/informations" },
    { name: "Services", href: "/dashboard/services" },
    { name: "Quote & Contact", href: "/dashboard/contact-form" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Aside menuItems={menuItems} />

      <main className="flex-1 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-2xl border border-gray-200 padding-50">
          <h1 className="text-4xl text-center font-extrabold text-gray-900 mb-8">
            Company Information
          </h1>

          {/* Loading State */}
          {loading ? (
            <p className="text-center text-gray-500">Loading information...</p>
          ) : (
            <>
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="border-b border-gray-300 hover:bg-gray-100 transition">
                    <td className="py-4 px-6 font-semibold text-gray-800">
                      Telephone Number
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="text"
                        name="phoneNumber"
                        value={editingInfo?.phoneNumber || ""}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition outline-none"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition">
                    <td className="py-4 px-6 font-semibold text-gray-800">
                      Email
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="text"
                        name="mail"
                        value={editingInfo?.mail || ""}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition outline-none"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Save Button (Appears when changes are made) */}
              {!isButtonDisabled() && (
                <button
                  className="mt-6 px-6 py-3 text-white font-semibold transition-all duration-200 ease-in-out button"
                  onClick={() => handleUpdateInfo()}
                >
                  Save Changes
                </button>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
