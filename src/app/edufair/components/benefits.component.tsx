interface BenefitsComponentProps {
  studentBenefits: { title: string; description: string }[];
  institutionBenefits: { title: string; description: string }[];
}
export default function BenefitsComponent(props: BenefitsComponentProps) {
  return (
    <div className="edufair-container">
      <div className="images-section">
        <img
          src="https://static.wixstatic.com/media/352e13_f15a163c400f4143a70fdc3c64c03df1~mv2.jpg/v1/fill/w_455,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hyatt-Regency-Tashkent-P046-Exterior-Night-View_4x3.jpg"
          alt="Hyatt Regency Exterior"
          className="benefit-image"
        />
        <img
          src="https://static.wixstatic.com/media/352e13_7e8454a3242146c480455751dfc6037b~mv2.jpg/v1/fill/w_439,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hyatt-Regency-Tashkent-P067-Sette-Bar.jpg"
          alt="Hyatt Regency Bar"
          className="benefit-image"
        />
      </div>

      <div className="benefits-section">
        <div className="benefits-column">
          <h2>Benefits for Students</h2>
          <ul>
            {props?.studentBenefits?.map((benefit) => (
              <li key={benefit.title}>
                <strong>{benefit.title}</strong>
                {benefit.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="benefits-column">
          <h2>Benefits for Institutions</h2>
          <ul>
            {props?.institutionBenefits?.map((benefit) => (
              <li key={benefit.title}>
                <strong>{benefit.title}</strong>
                {benefit.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
