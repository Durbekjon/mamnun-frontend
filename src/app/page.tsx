"use client";
import Header from "./components/header/header";
import HeroComponent from "./components/home/hero.component";
import AboutComponent from "./components/home/about.component";
import CollabsComponent from "./components/common/collabs.component";
import PaymentTypesComponent from "./components/common/payment-types.component";
import FooterComponent from "./components/footer/footer.component";
import Video from "./components/common/video.component";
import "./index.css";
import ContactComponent from "./components/contact/contact.component";
import { useEffect } from "react";
import { VisitService } from "@/services/visit.service";

export default function Home() {
  useEffect(() => {
    VisitService.trackVisit();
  }, []);
  return (
    <main className="home">
      <Header currentPage="home" />
      <HeroComponent />
      <Video />
      <AboutComponent />
      <ContactComponent currentPage="home" />
      <CollabsComponent />
      <PaymentTypesComponent />
      <FooterComponent />
    </main>
  );
}
