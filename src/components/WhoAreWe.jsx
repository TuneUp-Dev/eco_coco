import Icon1 from "../assets/81.svg";
import Icon2 from "../assets/83.svg";
import Infinite from "../assets/infinite.svg";

const WhoAreWe = () => {
  return (
    <>
      <div
        id="about"
        className={`py-5 px-16 max-w-[1440px] mx-auto ${
          window.innerWidth >= 1440
            ? "mt-0"
            : window.innerWidth >= 1280
            ? "-mt-20"
            : "mt-0"
        }`}
      >
        <h1 className="alegreya-bold text-[28px] text-center">Who Are We</h1>
        <div className="mx-auto flex justify-between items-start">
          <span className="flex flex-col justify-center items-center space-y-10 w-[42vw]">
            <img
              src={Icon1}
              className="w-[80px] hover:scale-[1.02]"
              alt="Eco Coco Products"
            />
            <p className="text-center sorts-normal text-[18px] leading-[25.88px]">
              Eco Coco Products partners with trusted manufacturers to produce
              high-quality coir pith and yarn from coconut husk. We export
              premium eco-friendly coir products globally, ensuring quality,
              sustainability, and reliability.
            </p>
          </span>

          <span className="px-10 py-6">
            <img
              src={Infinite}
              className="min-w-[30px]"
              alt="Infinite Symbol"
            />
          </span>

          <span className="flex flex-col justify-center items-center space-y-10 w-[42vw]">
            <img
              src={Icon2}
              className="w-[80px] hover:scale-[1.02]"
              alt="Trading & Exporting"
            />
            <p className="text-center sorts-normal text-[18px] leading-[25.88px]">
              Eco Coco Products specializes in trading and exporting a wide
              range of high-quality coir products to global markets. Committed
              to sustainability, we deliver eco-friendly solutions worldwide.
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default WhoAreWe;
