export default function BrandLogo({ onClick }) {
  return (
    <a
      className="brand-logo"
      href="#"
      onClick={onClick}
      aria-label={copy.brand.homeLabel}
    >
      <img
        src={`${import.meta.env.BASE_URL}brand-logo.svg`}
        alt={copy.brand.name}
        width="200"
        height="64"
      />
    </a>
  );
}
import { copy } from "../../../i18n";
import "./BrandLogo.css";
