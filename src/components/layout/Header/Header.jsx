import { useState } from "react";
import { Menu } from "lucide-react";
import BrandLogo from "../../brand/BrandLogo/BrandLogo";
import MobileMenu from "../MobileMenu/MobileMenu";
import { site } from "../../../config/site";
import { copy } from "../../../i18n";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="header">
        <BrandLogo />
        <nav
          aria-label={copy.accessibility.mainNavigation}
          className="desktop-nav"
        >
          {site.navigation.map((item) => (
            <a key={item.id} href={item.href}>
              {copy.navigation[item.id]}
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle icon-button"
          aria-label={
            menuOpen
              ? copy.accessibility.closeMenu
              : copy.accessibility.openMenu
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(true)}
        >
          <Menu />
        </button>
      </header>
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}
