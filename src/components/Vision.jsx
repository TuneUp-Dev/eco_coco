import Img1 from "../assets/94.svg";
import Img2 from "../assets/95.svg";
import Img3 from "../assets/96.svg";

import Icon1 from "../assets/follow_the_signs.svg";
import Icon2 from "../assets/eye_tracking.svg";
import Icon3 from "../assets/balance.svg";

import Symbol1 from "../assets/56.svg";
import Symbol2 from "../assets/57.svg";
import Symbol3 from "../assets/55.svg";

import Shadow from "../assets/bottmo_shadow.svg";

const Vision = () => {
  return (
    <>
      <div className="p-14 max-w-[1440px] mx-auto">
        <div>
          <h1 className="kenia-normal text-[45px] text-center">Vision</h1>
          <p className="josefin-bold text-[20px] text-center">
            Shaping a Sustainable Future with Premium Coir Solutions
          </p>
        </div>

        {/* Containers */}
        <div className="mt-14 grid grid-cols-3 mx-auto gap-x-6">
          {/* First Container */}
          <div className="relative">
            <img src={Img1} className="w-[453px]" alt="" />
            <img
              src={Icon1}
              className="absolute top-16 left-1/2 transform -translate-x-1/2"
              alt=""
            />
            <p className="kenia-normal text-[22px] absolute top-32 left-1/2 transform -translate-x-1/2">
              Mission
            </p>
            <p className="absolute z-10 top-40 left-1/2 transform -translate-x-1/2 text-[10px] w-[270px] text-center">
              Our mission is to provide premium coir-based products that meet
              international quality standards while ensuring sustainability and
              innovation. By partnering with trusted manufacturers and global
              buyers, we aim to deliver eco-friendly solutions that enhance
              agricultural, industrial, and household applications, creating a
              lasting positive impact.
            </p>
            <img
              src={Symbol1}
              className="absolute bottom-9 left-1/2 transform -translate-x-1/2"
              alt=""
            />
            <img
              src={Shadow}
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2"
              alt=""
            />
          </div>

          {/* Second Container */}
          <div className="relative">
            <img src={Img2} className="w-[453px]" alt="" />
            <img
              src={Icon2}
              className="absolute top-16 left-1/2 transform -translate-x-1/2"
              alt=""
            />
            <p className="kenia-normal text-[22px] absolute top-32 left-1/2 transform -translate-x-1/2">
              Vision
            </p>
            <p className="absolute z-10 top-40 left-1/2 transform -translate-x-1/2 text-[10px] w-[270px] text-center">
              Our mission is to provide premium coir-based products that meet
              international quality standards while ensuring sustainability and
              innovation. By partnering with trusted manufacturers and global
              buyers, we aim to deliver eco-friendly solutions that enhance
              agricultural, industrial, and household applications, creating a
              lasting positive impact.
            </p>
            <img
              src={Symbol2}
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
              alt=""
            />
            <img
              src={Shadow}
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2"
              alt=""
            />
          </div>

          {/* Third Container */}
          <div className="relative">
            <img src={Img3} className="w-[453px]" alt="" />
            <img
              src={Icon3}
              className="absolute top-16 left-1/2 transform -translate-x-1/2"
              alt=""
            />
            <p className="kenia-normal text-[22px] absolute top-32 left-1/2 transform -translate-x-1/2">
              Value
            </p>
            <p className="absolute z-10 top-40 left-1/2 transform -translate-x-1/2 text-[10px] w-[270px] text-center">
              Our mission is to provide premium coir-based products that meet
              international quality standards while ensuring sustainability and
              innovation. By partnering with trusted manufacturers and global
              buyers, we aim to deliver eco-friendly solutions that enhance
              agricultural, industrial, and household applications, creating a
              lasting positive impact.
            </p>
            <img
              src={Symbol3}
              className="absolute bottom-14 left-1/2 transform -translate-x-1/2"
              alt=""
            />
            <img
              src={Shadow}
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
