"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/ueber-mich", label: "Rechtsanwältin" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/erstberatung", label: "Erstberatung" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white relative z-50">
      <div
        className="flex items-center justify-between"
        style={{ paddingLeft: "var(--page-x)", paddingRight: "var(--page-x)", paddingTop: "10px", paddingBottom: "10px" }}
      >
        {/* Logo */}
        <Link href="/" className="block">
          <Image
            src="/images/cgk-logo.jpg"
            alt="CGK Rechtsanwaltskanzlei"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors duration-200 hover:text-[#2C5F3A]",
                pathname === link.href ? "text-[#2C5F3A]" : "text-[#797979]"
              )}
              style={{
                fontSize: "15px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                paddingLeft: "13px",
                paddingRight: "40px",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span
            className={cn(
              "block w-6 h-0.5 bg-[#797979] transition-transform duration-200",
              menuOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-[#797979] transition-opacity duration-200",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-[#797979] transition-transform duration-200",
              menuOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-[#797979]/20 px-8 pb-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "block py-3 transition-colors duration-200",
                pathname === link.href ? "text-[#2C5F3A]" : "text-[#797979]"
              )}
              style={{
                fontSize: "15px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      {/* Bottom border */}
      <div className="border-b border-[#797979]/20" />
    </header>
  );
}
