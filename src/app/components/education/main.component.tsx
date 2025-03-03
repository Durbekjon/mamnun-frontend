"use client";
import { useEffect, useState } from "react";

export default function MainComponent(props: { currentPage: string }) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (props.currentPage === "education") {
      setTitle("Education and Careers");
      setDescription(
        `At MAMNUN, we are dedicated to providing high-quality services with 8 years of experience and a strong track record in securing student visas worldwide. As a family-owned company, we empower students to achieve their academic and career goals through partnerships with public and private universities globally. Embark on your educational journey with confidence. Let us help you take the first step towards achieving your academic goals and securing your future.`
      );
    } else if (props.currentPage === "travel") {
      setTitle("Tourism and Travel");
      setDescription(
        `At MAMNUN, we go above and beyond to provide you with exceptional service and amenities that will make your trip unforgettable. From luxury accommodations to expert guides, we take care of every detail so you can sit back, relax, and enjoy your vacation. We offer a wide range of travel services, organizing unique trips for all those looking for new experiences. Our tours cover cultural and educational destinations as well as leisure and adventure travel. We cater to individual preferences and help make every trip unforgettable by offering convenience, reliability, and professionalism at all stages. With exclusive VIP ground handling and Fast Track services at airports worldwide, along with reliable transportation from trusted partners, we guarantee a seamless and stress-free journey. Experience the MAMNUN difference and elevate your travel today!`
      );
    }
  }, [props.currentPage]);

  return (
    <div
      className="flex flex-col items-center justify-center px-8 py-28"
      style={{ padding: "101px", marginBottom: "44px" }}
    >
      <h1
        className="text-center text-4xl md:text-5xl font-semibold text-black mb-10"
        style={{ padding: "51px" }}
      >
        {title}
      </h1>
      <p className="text-center text-lg md:text-xl max-w-3xl font-light text-gray-700 leading-relaxed px-6 md:px-10">
        {description}
      </p>
    </div>
  );
}
