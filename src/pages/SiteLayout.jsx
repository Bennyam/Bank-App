import { Outlet } from "react-router-dom";
import Header from "../features/layout/Header";
import Footer from "../features/layout/Footer";

function SiteLayout() {
  return (
    <div className="hero-img m-6 grid h-[calc(100vh-3rem)] grid-rows-[auto_1fr_auto] bg-cover bg-center px-12 py-6">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SiteLayout;
