import SocialLinks from "../SocialLinks";
import { Link } from "react-router-dom";
import footerArtwork from "../../assets/images/hero-test.jpg";
import logo from "../../assets/images/logo.svg";
import "./Footer.css";

const navigation = [
  ["/news", "NEWS"],
  ["/games", "GAMES"],
  ["/about", "COMPANY"],
  ["/contact", "CONTACT"],
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-artwork" aria-hidden="true">
        <img src={footerArtwork} alt="" loading="lazy" />
      </div>

      <div className="footer-container">
        <Link to="/" className="footer-logo" aria-label="AOne Games — Home">
          <img src={logo} alt="AOne Games" width="1920" height="825" loading="lazy" />
        </Link>

        <SocialLinks />

        <nav className="footer-navigation" aria-label="Footer navigation">
          {navigation.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
        </nav>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} AONE GAMES. ALL RIGHTS RESERVED.</small>
          <ul className="footer-legal" aria-label="Legal information">
            <li><span>Privacy Policy</span></li>
            <li><span>Terms of Use</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

