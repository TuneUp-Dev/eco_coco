import Img1 from "../assets/1.svg";
import Img2 from "../assets/2.svg";
import Img3 from "../assets/3.svg";
import Img4 from "../assets/4.svg";
import Img5 from "../assets/5.svg";
import Img6 from "../assets/6.svg";
import Img7 from "../assets/7.svg";
import Img8 from "../assets/8.svg";
import Img9 from "../assets/9.svg";
import Img10 from "../assets/10.svg";
import Img11 from "../assets/11.svg";
import Img12 from "../assets/12.svg";
import Img13 from "../assets/13.svg";

import Shadow from "../assets/dashed_shadow.svg";
import Arrow from "../assets/arrow.svg";
import { Button } from "@nextui-org/react";

const Products = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col gap-6 p-6 mt-3">
          {/* First Row - 4 images */}
          <div className="flex justify-center items-center gap-x-24">
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img1}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 -left-1.5 -top-1.5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img2}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 -left-0.5 -top-1.5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img3}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 left-6 top-5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img4}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 left-6 top-5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
          </div>

          {/* Second Row - 5 images */}
          <div className="flex justify-center items-center gap-x-24">
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img5}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 -left-0.5 -top-1.5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img6}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 -left-0.5 -top-1.5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img7}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 -left-0.5 -top-1.5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
              <div className="absolute -z-10 inset-0 left-6 top-5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img8}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 left-6 top-5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img9}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 left-6 top-5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
          </div>

          {/* Third Row - 4 images */}
          <div className="flex justify-center items-center gap-x-24">
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img10}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 -left-0.5 -top-1.5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img11}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 -left-0.5 -top-1.5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img12}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 left-6 top-5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
            <div className="overflow-visible relative group transition-all transform duration-300 ease-linear">
              <img
                src={Img13}
                alt=""
                className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
              />
              <div className="absolute -z-10 inset-0 left-6 top-5 hidden group-hover:block transition-all transform duration-300 ease-linear">
                <img
                  src={Shadow}
                  alt=""
                  className="min-w-[157px] min-h-[157px] object-cover rounded-[24px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Know More Button */}
        <Button className="alata-normal w-[166px] h-[57px] mt-3 mx-auto bg-transparent border-[1px] border-[#E2BC7D] text-[15px] flex justify-between gap-x-4 items-center p-1 pl-4 rounded-[143px]">
          Know More
          <span className="rounded-full w-[48px] h-[48px] flex justify-center items-center bg-[#E2BC7D]">
            <img src={Arrow} className="w-[35px]" alt="" />
          </span>
        </Button>
      </div>
    </>
  );
};

export default Products;
