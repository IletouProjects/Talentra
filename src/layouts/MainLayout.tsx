import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { useLocation, useOutlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

function MainLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[#F6F8FB] text-[#172033]">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location.pathname}>
            {outlet}
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;