"use client";
import { useEffect, useState } from "react";
import Aside from "../components/aside";
import { ServicesService } from "@/services/services.service";
import "../style.css";
import Modal from "../components/modal";

export default function Services() {
  const [services, setServices] = useState<any[]>([]);
  const [type, setType] = useState<"edu" | "travel" | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"add" | "edit" | "delete" | null>(
    null
  );
  const [selectedService, setSelectedService] = useState<any>(null);

  const menuItems = [
    { name: "Informations", href: "/dashboard/informations" },
    { name: "Services", href: "/dashboard/services" },
    { name: "Quote & Contact", href: "/dashboard/contact-form" },
  ];

  const fetchServices = async (type?: "edu" | "travel") => {
    try {
      setLoading(true);
      const { data } = type
        ? await ServicesService.getAll(type)
        : await ServicesService.getAll();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices(type ?? undefined);
  }, [type]);

  const handleOpenModal = (type: "add" | "edit" | "delete", service?: any) => {
    setSelectedService(service || null);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
    setSelectedService(null);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Aside menuItems={menuItems} />
      <main className="flex-1 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-4xl padding-50">
          <h1 className="text-4xl text-center font-extrabold text-gray-900 mb-8">
            Company Services
          </h1>
          <button
            className="add-button text-white px-4 py-2 rounded mb-4"
            onClick={() => handleOpenModal("add")}
          >
            +Add Service
          </button>
          {loading ? (
            <p className="text-center text-gray-500">Loading information...</p>
          ) : (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-2">#</th>
                  <th className="p-2">Title</th>
                  <th className="p-2">Type</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, idx) => (
                  <tr key={idx} className="">
                    <td className="p-2 text-center">{idx + 1}</td>

                    <td className="p-2 text-center">{service.title}</td>
                    <td className="p-2 text-center">{service.type}</td>
                    <td className="p-2 flex">
                      <button
                        className=" text-white px-2 py-1 rounded mr-2 button"
                        style={{ margin: "3px" }}
                        onClick={() => handleOpenModal("edit", service)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded button"
                        style={{ margin: "3px" }}
                        onClick={() => handleOpenModal("delete", service)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {modalType && (
        <Modal
          type={modalType}
          service={selectedService}
          onClose={handleCloseModal}
          onRefresh={() => fetchServices(type ?? undefined)}
        />
      )}
    </div>
  );
}
