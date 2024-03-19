import React from "react";
import Service from "../helperComponents/Services/Service";
import Feture from "../helperComponents/Feture/Feture";
import Cta from "../helperComponents/Cta";
import Pricing from "../helperComponents/Price/Pricing";
import Team from "../helperComponents/Team/Team";
import Faq from "../helperComponents/Faq/Faq";
import Contact from "../helperComponents/Contact";
import Footer from "../helperComponents/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* START HOME */}
      <Outlet />
      {/* END HOME */}
      {/*  START SERVICES */}
      <Service />
      {/*  END SERVICES */}
      {/* START CTA */}
      <Cta />
      {/* END CTA */}
      {/* START FEATURES */}
      <Feture />
      {/* END FEATURES */}
      {/* START Pricing */}
      <Pricing />
      {/* END Pricing */}
      {/* START Clients */}
      <Team />
      {/* END Clients */}
      {/* START FAQ */}
      <Faq />
      {/* END FAQ */}
      {/* START Conatct */}
      <Contact />
      {/* END Conatct */}
      {/* START Footer */}
      <Footer />
      {/* END Footer */}
    </>
  );
}

export default Layout;
