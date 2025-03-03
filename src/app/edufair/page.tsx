"use client";

import Header from "../components/header/header";
import FooterComponent from "../components/footer/footer.component";
import InvitationComponent from "./components/invitation.component";
import "./style.css";
import BenefitsComponent from "./components/benefits.component";
import ContactComponent from "../components/contact/contact.component";
import CollabsComponent from "../components/common/collabs.component";
import PaymentTypesComponent from "../components/common/payment-types.component";
import RegistrationComponent from "./components/registration.component";
import { VisitService } from "@/services/visit.service";
import { useEffect } from "react";
export default function EduFair() {
  useEffect(() => {
    VisitService.trackVisit();
  }, []);
  return (
    <main className="edufair">
      <Header currentPage="edufair" />
      <InvitationComponent />
      <BenefitsComponent />
      <RegistrationComponent />
      <ContactComponent currentPage="edufair" />
      <CollabsComponent />
      <PaymentTypesComponent />
      <FooterComponent />
    </main>
  );
}
