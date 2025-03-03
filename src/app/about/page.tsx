import AboutHeroComponent from "./components/hero.component";
import InfoSection from "./components/info.component";
import CollabsComponent from "../components/common/collabs.component";
import PaymentTypesComponent from "../components/common/payment-types.component";
import FooterComponent from "../components/footer/footer.component";
import Header from "../components/header/header";
import "./style.css";
export default function About() {
  return (
    <main>
      <Header currentPage={"about"} />
      <AboutHeroComponent />
      <InfoSection />
      <CollabsComponent />
      <PaymentTypesComponent />
      <FooterComponent />
    </main>
  );
}
