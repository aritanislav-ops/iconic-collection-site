'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Acasă" },
  { href: "/modele", label: "Modele" },
  { href: "/pachete", label: "Pachete" },
  { href: "/proces", label: "Proces" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="brandLogo">
            <img src="/brand/logo-dark.png" alt="iCONiC collection" />
          </Link>

          <div className="navlinks">
            {nav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
