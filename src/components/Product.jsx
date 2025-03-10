import Circle from "../assets/bg_circle.svg";
import Coir from "../assets/47.svg";
import Pith from "../assets/48.svg";
import Compost from "../assets/46.svg";
import Fiber from "../assets/50.svg";
import Yarn from "../assets/51.svg";
import Arrow from "../assets/arrow.svg";
import { Button } from "@heroui/react";

const Product = () => {
  return (
    <>
      <div id="products" className="max-w-[1440px] mt-5 mx-auto">
        <h1 className="alegreya-bold text-[28px] text-center">
          Our Premium Coir Products
        </h1>
        <p className="text-center mx-auto mt-5 sorts-normal text-[18px] leading-[25.88px] w-[747px]">
          Eco Coco Products is dedicated to providing the highest quality
          coir-based solutions, sustainably sourced and processed with the
          utmost care to ensure eco-friendliness and superior performance.
        </p>

        <div
          className={`flex justify-center items-center gap-x-12 mx-auto ${
            window.innerWidth >= 1440
              ? "scale-100"
              : window.innerWidth >= 1280
              ? "scale-[90%]"
              : "scale-100"
          }`}
        >
          <div className="w-[222.64px] h-[319px] p-4 rounded-[34px] shadow-[0px_0px_10px_-7px_#000000] rotate-[5.59deg] hover:shadow-[0px_0px_10px_-2px_#E2BC7D] hover:rotate-[-4.59deg] ease-linear duration-200">
            <h1 className="text-[22px] agbalumo-normal">Coir Pith</h1>
            <img src={Circle} className="relative" alt="" />
            <img src={Coir} className="absolute -mt-44 ml-1" alt="" />
            <p className="w-[200px] text-[9px] sofia-regular text-start">
              Experience the superior quality of our high-grade coir pith.
              Carefully processed to ensure excellent water retention and
              aeration, making it ideal for plant growth. Enhance your gardening
              with our eco-friendly and sustainable coir solutions.
            </p>
          </div>
          <div className="w-[222.64px] h-[319px] p-4 rounded-[34px] shadow-[0px_0px_10px_-7px_#000000] rotate-[-7.21deg] hover:shadow-[0px_0px_10px_-2px_#E2BC7D] hover:rotate-[0deg] ease-linear duration-200 mt-24">
            <h1 className="text-[22px] agbalumo-normal">Pith Block</h1>
            <img src={Circle} className="relative" alt="" />
            <img src={Pith} className="absolute -mt-48 -ml-3" alt="" />
            <p className="w-[200px] text-[9px] sofia-regular text-start">
              Enjoy the superior quality of our premium coir pith blocks.
              Expertly processed to retain maximum water retention and aeration,
              ensuring optimal plant growth. Enhance your gardening and farming
              with our eco-friendly coir solutions.
            </p>
          </div>
          <div className="w-[222.64px] h-[319px] p-4 rounded-[34px] shadow-[0px_0px_10px_-7px_#000000] rotate-[0deg] hover:shadow-[0px_0px_10px_-2px_#E2BC7D] hover:rotate-[7.59deg] ease-linear duration-200">
            <h1 className="text-[22px] agbalumo-normal">Compost</h1>
            <img src={Circle} className="relative" alt="" />
            <img src={Compost} className="absolute -mt-48" alt="" />
            <p className="w-[200px] text-[9px] sofia-regular text-start">
              Rich and organic, our premium coir pith compost is packed with
              essential nutrients for healthy plant growth. Perfect for
              enriching soil and boosting crop yield. Experience the power of
              sustainable farming in every use.
            </p>
          </div>
          <div className="w-[222.64px] h-[319px] p-4 rounded-[34px] shadow-[0px_0px_10px_-7px_#000000] rotate-[7.97deg] hover:shadow-[0px_0px_10px_-2px_#E2BC7D] hover:rotate-[0deg] ease-linear duration-200 mt-24">
            <h1 className="text-[22px] agbalumo-normal">Fiber</h1>
            <img src={Circle} className="relative" alt="" />
            <img src={Fiber} className="absolute -mt-40 -ml-4" alt="" />
            <p className="w-[200px] text-[9px] sofia-regular text-start">
              Discover the strength and versatility of our premium coir fiber.
              Expertly extracted to ensure the highest quality, making it
              perfect for various applications. Bring sustainability and
              durability to your products with our natural coir fiber.
            </p>
          </div>
          <div className="w-[222.64px] h-[319px] p-4 rounded-[34px] shadow-[0px_0px_10px_-7px_#000000] rotate-[-6.81deg] hover:shadow-[0px_0px_10px_-2px_#E2BC7D] hover:rotate-[4.59deg] ease-linear duration-200">
            <h1 className="text-[22px] agbalumo-normal">Yarn</h1>
            <img src={Circle} className="relative" alt="" />
            <img src={Yarn} className="absolute -mt-48 -ml-1" alt="" />
            <p className="w-[200px] text-[9px] sofia-regular text-start">
              Experience the strength and flexibility of our premium coir yarn.
              Expertly spun to ensure durability and versatility. A perfect
              choice for crafting, weaving, and sustainable applications.
            </p>
          </div>
        </div>

        {/* Explore Button */}
        <a target="_blank" href="https://medium.com/@ecococoproduct/eco-coco-products-sustainable-coir-solutions-for-a-greener-future-5ff431a7957f">
        <Button className="alata-normal w-[226px] h-[57px] mt-20 mx-auto bg-transparent border-[1px] border-[#E2BC7D] text-[15px] flex justify-between gap-x-4 items-center p-1 pl-4 rounded-[143px]">
          Explore Our Products
          <span className="rounded-full w-[48px] h-[48px] flex justify-center items-center bg-[#E2BC7D]">
            <img src={Arrow} className="w-[35px]" alt="" />
          </span>
        </Button>
          </a>
      </div>
    </>
  );
};

export default Product;
