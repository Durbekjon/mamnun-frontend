export default function InfoSection() {
  return (
    <section className="info-section px-4 sm:px-6 lg:px-12 my-16">
      {/* About Us */}
      <h2 className="info-section__title text-center">About Us</h2>
      <div className="info-section__content max-w-4xl mx-auto">
        <p className="info-section__description text-sm sm:text-base leading-relaxed">
          <span className="info-section__bold-text">MAMNUN</span> is not just an
          education consultancy agency; we are also a premier travel agency
          dedicated to providing unique travel packages and exceptional
          services. Our expertise extends beyond education, as we offer VIP
          passenger ground handling with Fast Track assistance at airports,
          ensuring a seamless travel experience for our clients. Whether you are
          seeking educational opportunities or planning your next adventure,{" "}
          <span className="info-section__bold-text">MAMNUN</span> is here to
          cater to all your travel needs, including ground transportation across
          the globe. Experience the perfect blend of education and travel with{" "}
          <span className="info-section__bold-text">MAMNUN</span>, where your
          <span className="info-section__bold-text"> satisfaction</span> is our
          top priority!
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="info-section__grid grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
        <div className="info-section__card p-6  text-center">
          <h3 className="info-section__subtitle text-lg font-semibold">
            Our Mission
          </h3>
          <p className="info-section-ben text-sm sm:text-base mt-2">
            To challenge cultural stereotypes by promoting education and travel
            as opportunities for personal and professional growth for everyone.
          </p>
        </div>
        <div className="info-section__card p-6  text-center">
          <h3 className="info-section__subtitle text-lg font-semibold">
            Our Vision
          </h3>
          <p className="info-section-ben text-sm sm:text-base mt-2">
            To bridge global learning opportunities, providing diverse
            educational programs worldwide to students while crafting unique
            travel experiences and memorable journeys customized to individual
            aspirations.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <h2 className="info-section__title text-center mt-16">Why Choose Us?</h2>
      <div className="info-section__content max-w-5xl mx-auto mt-6">
        <p className="info-section__description text-sm sm:text-base leading-relaxed">
          At <span className="info-section__bold-text">MAMNUN</span>, we are
          passionate about both education and travel. We are committed to
          helping you create lasting memories while achieving your academic
          aspirations. We have established partnerships with ranked universities
          worldwide, giving students access to a diverse range of programs and
          opportunities. <br />
          <br />
          Our track record speaks for itself. We have successfully assisted
          numerous students in gaining admission to prestigious institutions and
          securing scholarships. We are dedicated to providing transparent,
          reliable, and high-quality services to ensure that every student has
          the best chance of success. <br />
          <br />
          In addition to our educational services, we offer customized travel
          packages designed to create unique and memorable experiences. Enjoy
          our VIP passenger ground handling services, including Fast Track
          assistance at airports, allowing you to bypass long lines and enjoy a
          stress-free travel experience. <br />
          <br />
          Our experienced team provides expert advice and support, helping you
          navigate both educational opportunities and travel logistics with
          ease. We offer valuable insights on cultural differences, helping you
          adapt and thrive in new environments. <br />
          <br />
          Choose <span className="info-section__bold-text">MAMNUN</span> as your
          trusted partner in education and travel, and let us help you turn your
          dreams into reality — ensuring your satisfaction every step of the
          way!
        </p>
      </div>
    </section>
  );
}
