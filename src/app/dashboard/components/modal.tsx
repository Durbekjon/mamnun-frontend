"use client";
import { useState } from "react";
import { ServicesService } from "@/services/services.service";

export default function Modal({
  type,
  service,
  onClose,
  onRefresh,
}: {
  type: any;
  service: any;
  onClose: any;
  onRefresh: any;
}) {
  const [formData, setFormData] = useState(
    service || { title: "", description: "", type: "edu" }
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (type === "add") {
        await ServicesService.create(formData);
      } else if (type === "edit") {
        await ServicesService.update(service.id, formData);
      } else if (type === "delete") {
        await ServicesService.delete(service.id);
      }
      onRefresh();
      onClose();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center modal rounded">
      <div className="bg-white p-6 w-96 padding-50">
        <h2 className="text-xl font-bold mb-4">
          {type === "delete"
            ? "Confirm Delete"
            : type === "edit"
            ? "Edit Service"
            : "Add Service"}
        </h2>
        {type !== "delete" ? (
          <>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            />
            {type !== "add" && (
              <img
                src={formData.imageUrl}
                style={{ margin: "auto" }}
                width={200}
                height={200}
                alt=""
              />
            )}
            <input
              type="text"
              name="imageUrl"
              placeholder="Image Url"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
              rows={6}
            ></textarea>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            >
              <option value="edu">Education</option>
              <option value="travel">Travel</option>
            </select>
          </>
        ) : (
          <p>Are you sure you want to delete this service?</p>
        )}
        <div className="flex justify-end mt-4" style={{ gap: "100px" }}>
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-200 button"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className={`ml-2 px-4 py-2 rounded-md text-white transition duration-200 ${
              type === "delete" ? "bg-red-500 hover:bg-red-600" : "button"
            }`}
            disabled={loading}
          >
            {loading ? "Processing..." : type === "delete" ? "Delete" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
