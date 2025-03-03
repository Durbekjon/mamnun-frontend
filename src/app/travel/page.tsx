"use client";
import { ServicesService } from "@/services/services.service";
import CollabsComponent from "../components/common/collabs.component";
import PaymentTypesComponent from "../components/common/payment-types.component";
import MainComponent from "../components/education/main.component";
import FooterComponent from "../components/footer/footer.component";
import Header from "../components/header/header";
import { useEffect, useState } from "react";
import EducationStats from "../components/education/education-stats";
import ServicesComponent from "../components/common/services.component";
import QuoteRequest from "../components/quote-request/quote-request.component";
import { VisitService } from "@/services/visit.service";

export default function EducationPage() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    VisitService.trackVisit();
    const fetchServices = async () => {
      const { data } = await ServicesService.getAll("travel");
      setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <main>
      <Header currentPage="travel" />
      <MainComponent currentPage="travel" />

      <ServicesComponent services={services} />

      <EducationStats currentPage="travel" />
      <QuoteRequest currentPage="travel" />
      <CollabsComponent />
      <PaymentTypesComponent />
      <FooterComponent />
    </main>
  );
}
