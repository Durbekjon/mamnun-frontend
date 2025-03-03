export default function InvitationComponent() {
  return (
    <div className="edufair-container">
      <div className="ribbon">
        <span className="ribbon-text">Invitation</span>
      </div>
      <div className="invitation-content">
        <p className="main-title">
          We are thrilled to announce that the{" "}
          <span className="text-bold">MAMNUN</span> Agency is organizing an
          exciting <span className="text-bold">Education Fair</span> in Tashkent
          on April 6th!
        </p>
        <div className="sub-content">
          <div className="event-details">
            <p>Event Details:</p>
            <ul className="list-items">
              <li>
                <span className="text-bold">Date:</span> April 6th, 2025 (10 am
                till 6 pm)
              </li>
              <li>
                <span className="text-bold">Location:</span> Hotel Hyatt
                Tashkent, Uzbekistan
              </li>
            </ul>
          </div>
          <p className="event-descriptoin">
            This is a fantastic opportunity for both{" "}
            <span className="text-bold">institutions</span> and{" "}
            <span className="text-bold">students</span> to connect, explore
            educational programs, and discover new opportunities. Don’t miss out
            on the chance to engage with leading institutions and gain valuable
            insights for your future. Mark your calendars and be part of this
            enriching experience!
          </p>
        </div>
      </div>
    </div>
  );
}
