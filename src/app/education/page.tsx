"use client";
import { ServicesService } from "@/services/services.service";
import CollabsComponent from "../components/common/collabs.component";
import PaymentTypesComponent from "../components/common/payment-types.component";
import MainComponent from "../components/education/main.component";
import FooterComponent from "../components/footer/footer.component";
import Header from "../components/header/header";
import "./style.css";
import { useEffect, useState } from "react";
import EducationStats from "../components/education/education-stats";
import ServicesComponent from "../components/common/services.component";
import QuoteRequest from "../components/quote-request/quote-request.component";
import { VisitService } from "@/services/visit.service";

export default function EducationPage() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    VisitService.trackVisit();
  }, []);
  useEffect(() => {
    const fetchServices = async () => {
      const { data } = await ServicesService.getAll("edu");
      console.log(data);
      setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <main>
      <Header currentPage="education" />
      <MainComponent currentPage="education" />
      <ServicesComponent services={services} />
      <EducationStats currentPage="education" />
      <QuoteRequest currentPage="education" services={services} />
      <CollabsComponent />
      <PaymentTypesComponent />
      <FooterComponent />
    </main>
  );
}
