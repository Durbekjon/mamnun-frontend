"use client";

import { useEffect, useState } from "react";
import { QuoteRequestService } from "@/services/quote-request.service";
import "../style.css";
import Aside from "../components/aside";
import TrashIcon from "@/app/components/iconic-components/trash";
import { ContactFormService } from "@/services/contact-form.service";

export default function Dashboard() {
  const [quoteRequests, setQuoteRequests] = useState([]);
  const [contactForms, setContactForms] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<{
    id: number;
    type: "quote" | "contact";
  } | null>(null);

  useEffect(() => {
    async function fetchQuoteRequests() {
      try {
        const [quoteResponse, contactResponse] = await Promise.all([
          QuoteRequestService.get(),
          ContactFormService.get(),
        ]);
        setQuoteRequests(quoteResponse.data.quoteRequests);
        setContactForms(contactResponse.data.contactForms);
      } catch (error) {
        console.error("Error fetching quote requests:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchQuoteRequests();
  }, []);

  const openDeleteModal = (id: number, type: "contact" | "quote") => {
    setSelectedData({ id, type });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  const handleDelete = async () => {
    if (!selectedData) return;
    try {
      if (selectedData.type === "quote") {
        await QuoteRequestService.delete(selectedData.id);
      } else {
        await ContactFormService.delete(selectedData.id);
      }

      setQuoteRequests((prev) =>
        prev.filter((req: any) => req.id !== selectedData)
      );
      closeModal();
    } catch (error) {
      console.error("Error deleting request:", error);
    }
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
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-4xl padding-50">
          <h1
            className="text-2xl font-bold mb-4 text-center"
            style={{ padding: "20px" }}
          >
            Quote Requests
          </h1>
          {/* Table */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="overflow-auto">
              <table className="min-w-full min-h-full">
                <thead>
                  <tr className="text-center">
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Phone Number</th>
                    <th className="px-4 py-2">Quote Type</th>
                    <th className="px-4 py-2">Created At</th>
                    <th className="px-4 py-2">Control</th>
                  </tr>
                </thead>
                <tbody>
                  {quoteRequests.length > 0 ? (
                    quoteRequests.map((request: any, idx: number) => (
                      <tr key={request.id} className="text-center">
                        <td>{idx + 1}</td>
                        <td className="px-4 py-2">{request.name}</td>
                        <td className="px-4 py-2">{request.email}</td>
                        <td className="px-4 py-2">
                          {request.phoneNumber || "N/A"}
                        </td>
                        <td className="px-4 py-2">{request.quoteType}</td>
                        <td className="px-4 py-2">
                          {new Date(request.createdAt).toLocaleDateString()}
                        </td>
                        <td className="flex justify-center space-x-2">
                          {/* <button className="button text-white rounded"><PenIcon /></button> */}
                          <button
                            className="delete-button text-white rounded bg-red-500 p-2"
                            onClick={() => openDeleteModal(request.id, "quote")}
                          >
                            <TrashIcon />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="text-center py-4">
                        No quote requests available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
          <h1
            className="text-2xl font-bold mb-4 text-center"
            style={{ padding: "20px" }}
          >
            Contact Requests
          </h1>
          {/* Table */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="overflow-auto">
              <table className="min-w-full min-h-full">
                <thead>
                  <tr className="text-center">
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Last Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Subject</th>
                    <th className="px-4 py-2">Created At</th>
                    <th className="px-4 py-2">Control</th>
                  </tr>
                </thead>
                <tbody>
                  {contactForms.length > 0 ? (
                    contactForms.map((contact: any, idx: number) => (
                      <tr key={contact.id} className="text-center">
                        <td>{idx + 1}</td>
                        <td className="px-4 py-2">{contact.firstName}</td>
                        <td className="px-4 py-2">{contact.lastName}</td>
                        <td className="px-4 py-2">{contact.email}</td>
                        <td className="px-4 py-2">{contact.subject}</td>
                        <td className="px-4 py-2">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </td>
                        <td className="flex justify-center space-x-2">
                          {/* <button className="button text-white rounded"><PenIcon /></button> */}
                          <button
                            className="delete-button text-white rounded bg-red-500 p-2"
                            onClick={() =>
                              openDeleteModal(contact.id, "contact")
                            }
                          >
                            <TrashIcon />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="text-center py-4">
                        No quote requests available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 padding-50">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete it?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-gray px-4 py-2 bg-gray-300 text-white rounded button"
                style={{ margin: "10px", width: "50%" }}
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="delete-button px-4 py-2 bg-red-500 text-white rounded flex"
                style={{ margin: "10px" }}
                onClick={handleDelete}
              >
                <span style={{ padding: "0 5px" }}>Delete</span> <TrashIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
