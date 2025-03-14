"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import "./style.css";
import Header from "../components/header/header";
import FooterComponent from "../components/footer/footer.component";
import InvitationComponent from "./components/invitation.component";
import BenefitsComponent from "./components/benefits.component";
import ContactComponent from "../components/contact/contact.component";
import CollabsComponent from "../components/common/collabs.component";
import PaymentTypesComponent from "../components/common/payment-types.component";
import RegistrationComponent from "./components/registration.component";
import { VisitService } from "@/services/visit.service";
import { EventService } from "@/services/event.service";

export default function EduFair() {
  const [event, setEvent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [notFoundFlag, setNotFoundFlag] = useState(false); // Track notFound state

  useEffect(() => {
    let isMounted = true; // Cleanup flag

    const fetchEvent = async () => {
      try {
        const { data } = await EventService.getEvent();
        if (!data || !data.visible) {
          setNotFoundFlag(true);
          return;
        }
        VisitService.trackVisit();
        if (isMounted) {
          setEvent(data);
        }
      } catch (error) {
        console.error("Error fetching event:", error);
        setNotFoundFlag(true);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchEvent();

    return () => {
      isMounted = false; // Prevent state update after unmount
    };
  }, []);

  if (notFoundFlag) return notFound();

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="edufair">
      <Header currentPage="edufair" />
      <InvitationComponent
        eventDate={event?.eventDate}
        eventLocation={event?.location}
        eventTime={event?.eventTime}
        eventDescription={event?.description}
      />
      <BenefitsComponent
        studentBenefits={event?.studentBenefits}
        institutionBenefits={event?.institutionBenefits}
      />
      <RegistrationComponent
        registrationDeadline={event?.registrationDeadline}
      /> 
      <ContactComponent currentPage="edufair" />
      <CollabsComponent />
      <PaymentTypesComponent />
      <FooterComponent />
    </main>
  );
}
