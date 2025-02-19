import { Button } from "@heroui/react";
import Logo from "../assets/Logo.svg";
import Search from "../assets/search.svg";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center px-20 py-5 max-w-[1440px] mx-auto">
        <span>
          <img src={Logo} alt="Logo" className="w-[56px]" />
        </span>

        <span>
          <ul className="flex justify-center items-center gap-x-12 list-none font-songti">
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("products")}
            >
              Products
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("blogs")}
            >
              Blogs
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </li>
          </ul>
        </span>

        <span className="flex justify-end items-center gap-x-4">
          <Button className="border border-black text-[#AD5C22] text-[11px] w-[100px] h-[30px] rounded-[4px]">
            Contact Us
          </Button>
          <Button className="w-[40px] h-[40px] rounded-full overflow-hidden flex justify-center items-center">
            <img src={Search} className="min-w-[15px]" alt="Search Icon" />
          </Button>
        </span>
      </div>
    </>
  );
};

export default Navbar;
