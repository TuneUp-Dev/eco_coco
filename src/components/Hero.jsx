import { Button } from "@heroui/react";
import Tree from "../assets/Tree.svg";
import Arrow from "../assets/arrow.svg";
import Arrow_Point from "../assets/t_arrow.svg";
import T1 from "../assets/t1.svg";
import T2 from "../assets/t2.svg";
import T3 from "../assets/t3.svg";
import T4 from "../assets/t4.svg";
import T5 from "../assets/t5.svg";
import T6 from "../assets/t6.svg";
import T7 from "../assets/t7.svg";
import T8 from "../assets/t8.svg";
import T9 from "../assets/t9.svg";
import T10 from "../assets/t10.svg";
import T11 from "../assets/t11.svg";
import T12 from "../assets/t12.svg";
import T13 from "../assets/t13.svg";
import T14 from "../assets/t14.svg";
import T15 from "../assets/t15.svg";
import T16 from "../assets/t16.svg";

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="flex justify-between items-start gap-x-8 p-16 pt-10 max-w-[1440px] mx-auto"
      >
        <div className="mt-5">
          <h1 className="satisfy-normal text-[57px]">
            Experience the Power Of Nature <br />
            <span className="flex justify-start items-center gap-x-3 leading-[82px]">
              <p className="text-[#9CC200]">Pure,</p>{" "}
              <p className="text-[#FF9E00]">Sustainable,</p>
              <p className="text-[#FF7300]">Reliable !</p>
            </span>
          </h1>
          <p className="text-[17px] w-[560px] almendra-normal mt-4">
            Discover the Natural Strength of Coir! Sustainably sourced and
            expertly crafted. Our premium coir products offer durability,
            eco-friendliness, and versatility. Enhance your farming, gardening,
            and industrial needs with the power of nature.
          </p>

          {/* Explore Button */}
          <Button className="alata-normal w-[226px] h-[57px] mt-8 bg-transparent border-[1px] border-[#E2BC7D] text-[15px] flex justify-between gap-x-4 items-center p-1 pl-4 rounded-[143px]">
            Explore Our Products
            <span className="rounded-full w-[48px] h-[48px] flex justify-center items-center bg-[#E2BC7D]">
              <img src={Arrow} className="w-[35px]" alt="" />
            </span>
          </Button>
        </div>

        <div className="overflow-visible w-[350px]">
          <div
            className={`overflow-visible w-[350px] ${
              window.innerWidth >= 1440
                ? "scale-100 mt-0 -ml-48"
                : window.innerWidth >= 1280
                ? "scale-[85%] -mt-10 -ml-28"
                : "scale-100 mt-0 ml-0"
            }`}
          >
            <div className={`relative min-w-[550px]`}>
              <img src={Tree} className="-ml-32" alt="" />

              <span className="absolute -top-3 left-0 w-full h-full">
                <img
                  src={T1}
                  className="absolute top-0 left-0 w-[125px]"
                  alt=""
                />
                <img
                  src={Arrow_Point}
                  className="absolute top-0 left-32 w-[150px]"
                  alt=""
                />
                <img
                  src={T2}
                  className="absolute top-5 left-72 w-[60px]"
                  alt=""
                />
                <img
                  src={T3}
                  className="absolute top-0 right-0 w-[60px]"
                  alt=""
                />
                <img
                  src={T4}
                  className="absolute top-32 right-20 w-[60px]"
                  alt=""
                />
                <img
                  src={T5}
                  className="absolute top-72 right-10 w-[143px]"
                  alt=""
                />
                <img
                  src={Arrow_Point}
                  className="absolute top-80 right-16 rotate-[120deg] w-[150px]"
                  alt=""
                />
                <img
                  src={T6}
                  className="absolute top-[480px] right-28 w-[60px]"
                  alt=""
                />
                <img
                  src={T7}
                  className="absolute top-[550px] right-64 w-[60px]"
                  alt=""
                />
                <img
                  src={T8}
                  className="absolute top-[620px] right-24 w-[60px]"
                  alt=""
                />
                <img
                  src={T9}
                  className="absolute top-[720px] right-64 w-[115px]"
                  alt=""
                />
                <img
                  src={Arrow_Point}
                  className="absolute top-[780px] right-44 rotate-[120deg] w-[150px]"
                  alt=""
                />
                <img
                  src={T10}
                  className="absolute top-[880px] right-48 w-[60px]"
                  alt=""
                />
                <img
                  src={T11}
                  className="absolute top-[930px] right-[380px] w-[60px]"
                  alt=""
                />
                <img
                  src={T12}
                  className="absolute top-[780px] left-10 w-[60px]"
                  alt=""
                />
                <img
                  src={T13}
                  className="absolute top-[630px] -left-32 w-[60px]"
                  alt=""
                />
                <img
                  src={T14}
                  className="absolute top-[510px] -left-24 w-[60px]"
                  alt=""
                />
                <img
                  src={T15}
                  className="absolute top-[560px] -left-56 w-[60px]"
                  alt=""
                />
                <img
                  src={Arrow_Point}
                  className="absolute top-[360px] -left-64 rotate-[65deg] w-[150px] scale-y-[-1]"
                  alt=""
                />
                <img
                  src={T16}
                  className="absolute top-[320px] -left-72 w-[143px]"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
