import Link from "next/link";
import Image from "next/image";
import { ConsentDialogLink } from "@c15t/nextjs/components/consent-dialog-link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#797979]">
      <div
        className="py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        style={{ paddingLeft: "var(--page-x)", paddingRight: "var(--page-x)" }}
      >
        <div className="flex items-center gap-4">
          <Image
            src="/images/cgk-logo.jpg"
            alt="CGK Rechtsanwaltskanzlei"
            width={48}
            height={48}
            className="object-contain"
          />
          <span style={{ color: "#797979", fontSize: "13px" }}>
            © {new Date().getFullYear()} CGK Rechtsanwaltskanzlei - Carolin Gerring-Keil
          </span>
        </div>
        <div className="flex gap-8">
          <Link
            href="/impressum"
            style={{ color: "#797979", fontSize: "13px" }}
            className="hover:text-[#2C5F3A] transition-colors duration-200"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            style={{ color: "#797979", fontSize: "13px" }}
            className="hover:text-[#2C5F3A] transition-colors duration-200"
          >
            Datenschutz
          </Link>
          <ConsentDialogLink
            style={{ color: "#797979", fontSize: "13px", cursor: "pointer" }}
            className="hover:text-[#2C5F3A] transition-colors duration-200"
          >
            Cookie-Einstellungen
          </ConsentDialogLink>
        </div>
      </div>
    </footer>
  );
}
