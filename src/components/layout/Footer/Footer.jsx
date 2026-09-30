import { ArrowUpRight, Instagram } from "lucide-react";
import BrandLogo from "../../brand/BrandLogo/BrandLogo";
import RichText from "../../ui/RichText";
import { site } from "../../../config/site";
import { copy, formatText } from "../../../i18n";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <BrandLogo />
        <p>
          <RichText text={copy.footer.description} />
        </p>
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <Instagram size={18} />
          {copy.footer.instagram}
          <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          {formatText(copy.footer.copyright, {
            year: new Date().getFullYear(),
          })}
        </span>
        <span>{copy.footer.location}</span>
        <a href="#">{copy.footer.backToTop} ↑</a>
      </div>
    </footer>
  );
}
