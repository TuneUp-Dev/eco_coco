import React from "react";
import AboutUs from "./components/AboutUs.jsx";
import Blogs from "./components/Blogs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Product from "./components/Product.jsx";
import Products from "./components/Products.jsx";
import Vision from "./components/Vision.jsx";
import WhoAreWe from "./components/WhoAreWe.jsx";
import UseAnalytics from "./UseAnalytics.jsx";

const Home = () => {
  UseAnalytics();

  return (
    <>
      <div className="w-full">
        <Navbar />
        <Hero />
        <WhoAreWe />
        <Products />
        <Vision />
        <Product />
        <AboutUs />
        <FAQ />
        <Blogs />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
