"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cta, navLinks } from "@/content/site";
import { Icon } from "./Icon";
import styles from "./Header.module.css";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  /* Solid background + border once the page has scrolled past the hero edge. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently occupying the viewport. */
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );

    for (const id of sectionIds) {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  /* Escape closes the mobile menu; body scroll is locked while it is open. */
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.solid : ""}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand} aria-label="KVASol — back to top">
          <Image
            src="/brand/kvasol-mark.png"
            alt="KVASol"
            width={520}
            height={295}
            className={styles.logo}
            priority
          />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  aria-current={active === link.href.replace("#", "") ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href={cta.primary.href} className={`btn btnPrimary btnSm ${styles.cta}`}>
            {cta.primary.label}
          </a>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={22} />
            <span className="srOnly">{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`${styles.panel} ${menuOpen ? styles.panelOpen : ""}`}
        hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul className={styles.panelList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.panelLink} onClick={closeMenu}>
                  {link.label}
                  <Icon name="arrow-right" size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={cta.primary.href}
          className={`btn btnPrimary ${styles.panelCta}`}
          onClick={closeMenu}
        >
          {cta.primary.label}
        </a>
      </div>
    </header>
  );
}
