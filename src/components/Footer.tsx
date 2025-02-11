import Logo from "../assets/Logo2.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Facebook from "../assets/fb.svg";
import X from "../assets/x.svg";
import Instagram from "../assets/instagram.svg";
import Youtube from "../assets/youtube.svg";
import { Button } from "@nextui-org/react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-10 px-6 md:px-20">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-5 max-w-[1440px]">
          {/* Logo & Copyright */}
          <div className="w-[260px] flex flex-col justify-start items-start gap-y-3">
            <img src={Logo} alt="Eco Coco Products" className="w-[56px] mb-4" />
            <p className="text-[14px]">
              Copyright © 2025 Eco Coco Products. <br />
              All Rights Reserved
            </p>
            <div className="flex gap-3 mt-4">
              <span className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[3C474C]">
                <img
                  src={Whatsapp}
                  alt="Whatsapp"
                  className="w-[15px] h-[15px] cursor-pointer hover:opacity-80"
                />
              </span>
              <span className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[3C474C]">
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="w-[15px] h-[15px] cursor-pointer hover:opacity-80"
                />
              </span>
              <span className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[3C474C]">
                <img
                  src={X}
                  alt="X"
                  className="w-[14px] h-[14px] ml-[1.5px] cursor-pointer hover:opacity-80"
                />
              </span>
              <span className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[3C474C]">
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="w-[15px] h-[15px] cursor-pointer hover:opacity-80"
                />
              </span>
              <span className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[3C474C]">
                <img
                  src={Youtube}
                  alt="Youtube"
                  className="w-[15px] h-[15px] cursor-pointer hover:opacity-80"
                />
              </span>
            </div>
          </div>

          {/* Explore */}
          <div className="ml-20">
            <h3 className="font-semibold text-lg">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  Products
                </a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-neutral-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
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
            <div className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                className="w-[290px] h-[43px] bg-black border border-[E2BC7D] text-[9E9E9E] px-3 py-2 rounded-[6px] outline-none"
              />
              <Button className="w-[84px] h-[30px] bg-[E2BC7D] text-white font-semibold rounded-[6px]">
                Send
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
