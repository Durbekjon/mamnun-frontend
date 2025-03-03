export default function HeroComponent() {
  return (
    <section className="home-hero">
      <div className="home-hero-content">
        <p className="home-hero-title" data-aos="fade-up">
          Education and Travel
        </p>
        <p className="home-hero-subtitle" data-aos="fade-up">
          only with S<i>atisfaction</i>
        </p>
        <div className="home-hero-buttons">
          <a className="home-button" href="/education">
            Education and Careers
          </a>
          <a className="home-button" href="/travel">
            Tourism and Travel
          </a>
        </div>
      </div>
    </section>
  );
}
