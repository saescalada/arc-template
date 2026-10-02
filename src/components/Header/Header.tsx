import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Header.css";

const links = [["/", "HOME"], ["/games", "GAMES"], ["/news", "NEWS"], ["/about", "ABOUT"], ["/contact", "CONTACT"]];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const { pathname } = useLocation();
  const open = openPath === pathname;
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        menuButton.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpenPath(null);
    };
    const desktop = window.matchMedia("(min-width: 769px)");
    const resize = () => { if (desktop.matches) setOpenPath(null); };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <header ref={header} className={`header ${scrolled ? "header-scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="header-container">
        <Link to="/" className="header-logo" aria-label="AOne Games — Home" onClick={() => setOpenPath(null)}>
          <img src={logo} alt="AOne Games" width="1920" height="825" />
        </Link>
        <button ref={menuButton} className="header-menu" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpenPath(open ? null : pathname)}><span /><span /></button>
        <nav id="main-navigation" className="header-nav" aria-label="Main navigation" onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== menuButton.current) setOpenPath(null);
        }}>
          {links.map(([to, label]) => <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpenPath(null)} className={({ isActive }) => isActive ? "active" : ""}>{label}</NavLink>)}
        </nav>
      </div>
    </header>
  );
}
export default Header;

