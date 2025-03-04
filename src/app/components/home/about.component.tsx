import Link from "next/link";

export default function AboutComponent() {
  return (
    <section className="home-about mamnun-container">
      <div className="home-about-container">
        <h3 className="home-about-title">Who We Are?</h3>
        <p className="home-about-text">
          We are a proud family-owned company dedicated to delivering
          exceptional education and travel services customized just for you. Our
          mission is to empower students to achieve their academic and career
          aspirations by offering comprehensive support at every stage — from
          university admissions to visa assistance. In addition to our
          educational services, we specialize in crafting unique travel
          experiences that ensure every journey is memorable and enriching. Our
          commitment to quality and transparency means you can trust us to guide
          you through the process with clarity and confidence. Your{" "}
          <strong>satisfaction</strong> is our top priority, and we are here to
          help you turn your dreams into reality.
        </p>
        <Link href="/about" className="home-about-link">
          About Us
        </Link>
      </div>
    </section>
  );
}
