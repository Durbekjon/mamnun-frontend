"use client";

import Image from "next/image";
import "./index.css";
export default function PaymentTypesComponent() {
  const data = [
    { url: "/images/visa.png" },
    { url: "/images/mastercard.png" },
    { url: "/images/american-express.png" },
    { url: "/images/apple-pay.png" },
  ];

  return (
    <section className="home-payment-types">
      <div className="home-payment-types-container">
        <div className="home-payment-types-content">
          {data.map((d, index) => (
            <div className="column" key={index}>
              <Image
                src={d.url}
                alt={`Payment Type ${index + 1}`}
                width={48}
                height={35}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
