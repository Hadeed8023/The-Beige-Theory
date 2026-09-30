import Modal from "../../ui/Modal";
import BrandLogo from "../../brand/BrandLogo/BrandLogo";
import RichText from "../../ui/RichText";
import { site } from "../../../config/site";
import { copy } from "../../../i18n";
import "./MobileMenu.css";

export default function MobileMenu({ onClose }) {
  return (
    <Modal
      title={copy.accessibility.menuTitle}
      onClose={onClose}
      className="mobile-menu"
    >
      <BrandLogo onClick={onClose} />
      <nav id="mobile-nav" aria-label={copy.accessibility.mobileNavigation}>
        {site.navigation.map(({ id, href }) => (
          <a key={id} href={href} onClick={onClose}>
            {copy.navigation[id]}
          </a>
        ))}
      </nav>
      <p className="menu-footnote">
        <RichText text={copy.menu.footnote} />
      </p>
    </Modal>
  );
}
