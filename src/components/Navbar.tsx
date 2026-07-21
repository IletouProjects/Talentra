import { useState } from "react";
import { Link, NavLink } from "react-router";

const navigationLinks = [
  { label: "Accueil", path: "/" },
  { label: "Projets", path: "/projects" },
  { label: "À propos", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E7EC] bg-white/95 backdrop-blur-xl">
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-3"
            aria-label="Talentra — Accueil"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0170C1] text-lg font-bold text-white shadow-sm transition-transform duration-200 group-hover:scale-[1.03]">
              T
            </span>

            <div className="leading-tight">
              <span className="block text-xl font-bold tracking-tight text-[#0F2742]">
                Talentra
              </span>

              <span className="hidden text-xs font-medium text-[#667085] sm:block">
                Talents et opportunités
              </span>
            </div>
          </Link>

          {/* Navigation ordinateur */}
          <div className="hidden h-full items-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  [
                    "group relative flex h-full items-center text-sm font-semibold",
                    "transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-[#0170C1] focus-visible:ring-offset-4",
                    isActive
                      ? "text-[#0170C1]"
                      : "text-[#475467] hover:text-[#0F2742]",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>

                    <span
                      className={[
                        "absolute bottom-0 left-0 h-[3px] w-full",
                        "origin-center rounded-t-full bg-[#0170C1]",
                        "transition-transform duration-300",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      ].join(" ")}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Bouton principal */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#0170C1] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#005FA3] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0170C1] focus-visible:ring-offset-2"
            >
              Publier une mission
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition-colors hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0170C1] focus-visible:ring-offset-2 md:hidden"
            aria-label={
              isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation mobile */}
        <div
          id="mobile-navigation"
          className={[
            "overflow-hidden transition-all duration-300 ease-out md:hidden",
            isMenuOpen
              ? "max-h-[420px] border-t border-[#EAECF0] opacity-100"
              : "max-h-0 border-t border-transparent opacity-0",
          ].join(" ")}
        >
          <div className="space-y-2 py-5">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  [
                    "flex items-center justify-between rounded-lg px-4 py-3",
                    "text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "bg-[#EAF4FB] text-[#015A9A]"
                      : "text-[#475467] hover:bg-[#F8FAFC] hover:text-[#0F2742]",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>

                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[#0170C1]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#0170C1] px-5 py-3 text-sm font-semibold text-lg text-white transition-colors hover:bg-[#005FA3]"
            >
              Publier une mission
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;