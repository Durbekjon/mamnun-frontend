import { formatDate, getOrdinalSuffix } from "./invitation.component";

export default function RegistrationComponent({
  registrationDeadline,
}: {
  registrationDeadline: string;
}) {
  return (
    <div className="edufair-container">
      <h2 className="main-text">
        If you wish to participate, please fill out the form below
      </h2>
      <p className="registration-deadline">
        The registration closes:{" "}
        <span className="text-bold">{formatDate(registrationDeadline)}</span>
      </p>

      <div className="registration-buttons">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf1tQpYBbPErDSrn4UbHoLGyDIKELh1vXWTYRxvsdKdfTTvjA/viewform"
          target="_blank"
          className="registration-button"
        >
          As a Student
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdwCFi59gQ9PWKImymjJ3KBL80837kQwEXmGveNJi4egkXsvw/viewform"
          target="_blank"
          className="registration-button"
        >
          As an Institution
        </a>
      </div>

      <p className="contact-info">
        For more information, please contact us from the form below or write an
        email!
      </p>
    </div>
  );
}
