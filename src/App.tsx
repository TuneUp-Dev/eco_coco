import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import Vision from "./components/Vision";
import WhoAreWe from "./components/WhoAreWe";

function App() {
  return (
    <>
      <div className="">
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
}

export default App;
