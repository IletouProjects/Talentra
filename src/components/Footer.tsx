import { Link } from "react-router";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E7E0D7] bg-[#FFFDFC]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-7xl flex-col justify-center gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-[#252525]">
            © {currentYear} Talentra
          </p>

          <p className="text-xs text-[#6B6863]">
            La bonne expertise pour chaque projet.
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm font-medium text-[#6B6863]">
          <Link
            to="/about"
            className="transition hover:text-[#245C4F]"
          >
            À propos
          </Link>

          <Link
            to="/contact"
            className="transition hover:text-[#245C4F]"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;