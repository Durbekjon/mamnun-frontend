import { useEffect, useState } from "react";

interface InvitationComponentProps {
  eventDate: string;
  eventLocation: string;
  eventTime: string;
  eventDescription: string;
}

export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return (
    date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    }) + getOrdinalSuffix(date.getDate())
  );
};

export const getOrdinalSuffix = (day: number) => {
  if (day >= 11 && day <= 13) return "th"; // Special case for 11-13
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const getYear = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.getFullYear();
};

export default function InvitationComponent(props: InvitationComponentProps) {
  const [formedEventDate, setFormedEventDate] = useState<string>("");
  const [formedEventYear, setFormedEventYear] = useState<number>();
  const { eventDate, eventLocation, eventTime, eventDescription } = props;
  useEffect(() => {
    setFormedEventDate(formatDate(eventDate));
    setFormedEventYear(getYear(eventDate));
  }, [eventDate]);
  console.log(formedEventDate, eventDate);
  return (
    <div className="edufair-container">
      <div className="ribbon"></div>
      <div className="invitation-content">
        <p className="main-title">
          We are thrilled to announce that the{" "}
          <span className="text-bold">MAMNUN</span> Agency is organizing an
          exciting <span className="text-bold">Education Fair</span> in Tashkent
          on {formedEventDate}!
        </p>
        <div className="sub-content">
          <div className="event-details">
            <p>Event Details:</p>
            <ul className="list-items">
              <li>
                <span className="text-bold">Date:</span> {formedEventDate},{" "}
                {formedEventYear} ({eventTime})
              </li>
              <li>
                <span className="text-bold">Location:</span> {eventLocation}
              </li>
            </ul>
          </div>
          <p className="event-descriptoin">
            {/* This is a fantastic opportunity for both{" "}
            <span className="text-bold">institutions</span> and{" "}
            <span className="text-bold">students</span> to connect, explore
            educational programs, and discover new opportunities. Don’t miss out
            on the chance to engage with leading institutions and gain valuable
            insights for your future. Mark your calendars and be part of this
            enriching experience! */}
            {eventDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
