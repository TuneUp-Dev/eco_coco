import { useState, useEffect } from "react";
import Logo from "../assets/Logo2.svg";
import LinkedIn from "../assets/linkedin.svg";
import Facebook from "../assets/fb.svg";
import X from "../assets/x.svg";
import Instagram from "../assets/instagram.svg";
import Youtube from "../assets/youtube.svg";
import { Button } from "@heroui/react";
import axios from "axios";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
        "http://localhost:5002/send-newsletter",
        formData
      );

      if (10 < 0) {
        console.log(response);
      }
      setStatus("Email sent successfully!");
      setFormData({ email: "" });
    } catch (error) {
      setStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <>
      <footer className="bg-black text-white py-10 px-6 md:px-20">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-5 max-w-[1440px]">
          {/* Logo & Copyright */}
          <div className="w-[260px] flex flex-col justify-start items-start gap-y-3">
            <img src={Logo} alt="Eco Coco Products" className="w-[56px] mb-4" />
            <p className="text-[14px]">
              Copyright &copy;{new Date().getFullYear()} Eco Coco Products.{" "}
              <br />
              All Rights Reserved
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.linkedin.com/company/eco-coco-products/about/?viewAsMember=true">
                <span className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[#3C474C]">
                  <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    className="w-[15px] h-[15px] cursor-pointer hover:opacity-80"
                  />
                </span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573822894498">
                <span className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[#3C474C]">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="w-[15px] h-[15px] cursor-pointer hover:opacity-80"
                  />
                </span>
              </a>
              <a href="https://x.com/ecococoproducts">
                <span className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[#3C474C]">
                  <img
                    src={X}
                    alt="X"
                    className="w-[14px] h-[14px] ml-[1.5px] cursor-pointer hover:opacity-80"
                  />
                </span>
              </a>
              <a href="https://www.instagram.com/ecococoproduct/">
                <span className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[#3C474C]">
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="w-[15px] h-[15px] cursor-pointer hover:opacity-80"
                  />
                </span>
              </a>
              <a href="https://www.youtube.com/@EcoCocoProducts">
                <span className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[#3C474C]">
                  <img
                    src={Youtube}
                    alt="Youtube"
                    className="w-[15px] h-[15px] cursor-pointer hover:opacity-80"
                  />
                </span>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="ml-20">
            <h3 className="font-semibold text-lg">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <p
                  onClick={() => scrollToSection("about")}
                  className="text-white hover:text-neutral-300 cursor-pointer"
                >
                  About Us
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSection("products")}
                  className="text-white hover:text-neutral-300 cursor-pointer"
                >
                  Products
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSection("testimonials")}
                  className="text-white hover:text-neutral-300 cursor-pointer"
                >
                  Testimonial
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSection("faq")}
                  className="text-white hover:text-neutral-300 cursor-pointer"
                >
                  FAQ
                </p>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="ml-2">
            <h3 className="font-semibold text-lg">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  Coir Pith
                </a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  Pith Block
                </a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  Pith Compost
                </a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  Coir Fiber Bale
                </a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  More...
                </a>
              </li>
            </ul>
          </div>

          {/* Blogs */}
          <div className="-ml-10">
            <h3 className="font-semibold text-lg">Blogs</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  The Future of Coir
                </a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  Eco-Friendly Farming
                </a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  Coir-Based Products
                </a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  More...
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="-ml-10">
            <h3 className="font-semibold text-lg">Newsletter</h3>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-[290px] h-[43px] bg-black border border-[E2BC7D] text-[9E9E9E] px-3 py-2 rounded-[6px] outline-none"
              />
              <Button
                type="submit"
                className="w-[84px] h-[30px] bg-[#E2BC7D] text-white be-bold text-[14px] rounded-[6px]"
              >
                Send
              </Button>
              {status && <p className="text-white mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
