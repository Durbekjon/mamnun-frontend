import FacebookIcon from "../iconic-components/facebook";
import InstagramIcon from "../iconic-components/instagram";
import "./style.css";
export default function FooterComponent() {
  return (
    <div className="mamnun-container">
      <div className="footer-row">
        <div className="footer-column">
          <p>MG Elektro LLC since 1997</p>
          <p>Tax ID: 202399407</p>
          <p>Terms of Conditions Imprint</p>
        </div>
        <div className="footer-column">
          <p> Farobiy st. 229</p>
          <p>100002</p>
          <p>Tashkent, Uzbekistan</p>
        </div>
        <div className="footer-column">
          <p>+998949181305</p>
          <p>info@mamnunagency.com</p>
          <div className="social-media-links flex flex-1 gap-1">
            <a href="https://www.instagram.com/mamnunagency?igsh=bzk0dGt4anhqbTlw">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61572399132304">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span style={{ textAlign: "center" }}>
          © 2025 Mamnun. All Rights Reserved
        </span>
      </div>
    </div>
  );
}
