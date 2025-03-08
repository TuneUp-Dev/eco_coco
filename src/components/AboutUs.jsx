import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "../assets/arrow2.svg";
import ArrowRight from "../assets/arrow2.svg";
import People1 from "../assets/people1.svg";
import People2 from "../assets/people2.svg";
import People3 from "../assets/people3.svg";
import Bg1 from "../assets/left_bg.svg";
import Bg2 from "../assets/center_bg.svg";
import Bg3 from "../assets/right_bg.svg";
import Quotes from "../assets/quotes.svg";
import { Button } from "@heroui/react";

const aboutUs = [
  {
    id: 1,
    image: People1,
    description:
      "Eco Coco Products provides top-quality coir solutions that consistently meet our agricultural and industrial needs. Their coir pith and fiber are of superior quality, well-processed, and delivered on time. The team is highly responsive, ensuring a smooth purchasing experience. I highly recommend them for anyone looking for reliable coir suppliers",
    name: "Suresh Kumar",
    destination: "Procurement Manager",
  },
  {
    id: 2,
    image: People2,
    description:
      "We have been sourcing coir pith blocks from Eco Coco Products for our hydroponic and gardening projects. Their products are eco-friendly, durable, and of premium quality. The attention to detail in packaging ensures that we receive the products in perfect condition. Looking forward to a long-term partnership with them",
    name: "Deepak Raja",
    destination: "CEO",
  },
  {
    id: 3,
    image: People3,
    description:
      "Eco Coco Products’ coir fiber and yarn have been an essential part of our production process. Their consistency in quality and commitment to sustainability make them a trusted supplier for our business. The team ensures every batch meets our requirements, and we truly appreciate their professionalism",
    name: "Prabakaran",
    destination: "Managing Director",
  },
  {
    id: 1,
    image: People1,
    description:
      "Eco Coco Products provides top-quality coir solutions that consistently meet our agricultural and industrial needs. Their coir pith and fiber are of superior quality, well-processed, and delivered on time. The team is highly responsive, ensuring a smooth purchasing experience. I highly recommend them for anyone looking for reliable coir suppliers",
    name: "Suresh Kumar",
    destination: "Procurement Manager",
  },
  {
    id: 2,
    image: People2,
    description:
      "We have been sourcing coir pith blocks from Eco Coco Products for our hydroponic and gardening projects. Their products are eco-friendly, durable, and of premium quality. The attention to detail in packaging ensures that we receive the products in perfect condition. Looking forward to a long-term partnership with them",
    name: "Deepak Raja",
    destination: "CEO",
  },
  {
    id: 3,
    image: People3,
    description:
      "Eco Coco Products’ coir fiber and yarn have been an essential part of our production process. Their consistency in quality and commitment to sustainability make them a trusted supplier for our business. The team ensures every batch meets our requirements, and we truly appreciate their professionalism",
    name: "Prabakaran",
    destination: "Managing Director",
  },
  {
    id: 1,
    image: People1,
    description:
      "Eco Coco Products provides top-quality coir solutions that consistently meet our agricultural and industrial needs. Their coir pith and fiber are of superior quality, well-processed, and delivered on time. The team is highly responsive, ensuring a smooth purchasing experience. I highly recommend them for anyone looking for reliable coir suppliers",
    name: "Suresh Kumar",
    destination: "Procurement Manager",
  },
  {
    id: 2,
    image: People2,
    description:
      "We have been sourcing coir pith blocks from Eco Coco Products for our hydroponic and gardening projects. Their products are eco-friendly, durable, and of premium quality. The attention to detail in packaging ensures that we receive the products in perfect condition. Looking forward to a long-term partnership with them",
    name: "Deepak Raja",
    destination: "CEO",
  },
  {
    id: 3,
    image: People3,
    description:
      "Eco Coco Products’ coir fiber and yarn have been an essential part of our production process. Their consistency in quality and commitment to sustainability make them a trusted supplier for our business. The team ensures every batch meets our requirements, and we truly appreciate their professionalism",
    name: "Prabakaran",
    destination: "Managing Director",
  },
  {
    id: 1,
    image: People1,
    description:
      "Eco Coco Products provides top-quality coir solutions that consistently meet our agricultural and industrial needs. Their coir pith and fiber are of superior quality, well-processed, and delivered on time. The team is highly responsive, ensuring a smooth purchasing experience. I highly recommend them for anyone looking for reliable coir suppliers",
    name: "Suresh Kumar",
    destination: "Procurement Manager",
  },
  {
    id: 2,
    image: People2,
    description:
      "We have been sourcing coir pith blocks from Eco Coco Products for our hydroponic and gardening projects. Their products are eco-friendly, durable, and of premium quality. The attention to detail in packaging ensures that we receive the products in perfect condition. Looking forward to a long-term partnership with them",
    name: "Deepak Raja",
    destination: "CEO",
  },
  {
    id: 3,
    image: People3,
    description:
      "Eco Coco Products’ coir fiber and yarn have been an essential part of our production process. Their consistency in quality and commitment to sustainability make them a trusted supplier for our business. The team ensures every batch meets our requirements, and we truly appreciate their professionalism",
    name: "Prabakaran",
    destination: "Managing Director",
  },
  {
    id: 1,
    image: People1,
    description:
      "Eco Coco Products provides top-quality coir solutions that consistently meet our agricultural and industrial needs. Their coir pith and fiber are of superior quality, well-processed, and delivered on time. The team is highly responsive, ensuring a smooth purchasing experience. I highly recommend them for anyone looking for reliable coir suppliers",
    name: "Suresh Kumar",
    destination: "Procurement Manager",
  },
  {
    id: 2,
    image: People2,
    description:
      "We have been sourcing coir pith blocks from Eco Coco Products for our hydroponic and gardening projects. Their products are eco-friendly, durable, and of premium quality. The attention to detail in packaging ensures that we receive the products in perfect condition. Looking forward to a long-term partnership with them",
    name: "Deepak Raja",
    destination: "CEO",
  },
  {
    id: 3,
    image: People3,
    description:
      "Eco Coco Products’ coir fiber and yarn have been an essential part of our production process. Their consistency in quality and commitment to sustainability make them a trusted supplier for our business. The team ensures every batch meets our requirements, and we truly appreciate their professionalism",
    name: "Prabakaran",
    destination: "Managing Director",
  },
];

const groupedAboutUs = [];
for (let i = 0; i < aboutUs.length; i += 3) {
  groupedAboutUs.push(aboutUs.slice(i, i + 3));
}

const AboutUs = () => {
  const sliderRef = useRef(null);

  const handleNext = () => sliderRef.current?.slickNext();
  const handlePrev = () => sliderRef.current?.slickPrev();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <ul className="slick-dots -top-[605px] absolute">{dots}</ul>
    ),
    customPaging: () => (
      <div className="w-[10px] h-[10px] -mt-[590px] bg-[#E2BC7D] bg-opacity-30 rounded-full transition-all duration-300 ease-in-out"></div>
    ),
  };

  return (
    <div id="testimonials" className="pt-24 text-center relative">
      {/* Custom Navigation */}
      <div className="flex justify-center items-center gap-x-64">
        <Button
          onClick={handlePrev}
          className="w-[50px] h-[50px] flex justify-center items-center rounded-full"
        >
          <img
            src={ArrowLeft}
            className="cursor-pointer w-[15px] rotate-180 mr-1"
            alt="Left"
          />
        </Button>
        <h1 className="akaya-normal text-[36px] text-[#282A3A]">
          What Our Clients Say About Us
        </h1>
        <Button
          onClick={handleNext}
          className="w-[50px] h-[50px] flex justify-center items-center rounded-full"
        >
          <img
            src={ArrowRight}
            className="cursor-pointer w-[15px] ml-1"
            alt="Right"
          />
        </Button>
      </div>

      {/* About Cards Carousel */}
      <div className="mx-auto w-[1280px] mt-16 relative">
        <Slider ref={sliderRef} {...settings}>
          {groupedAboutUs.map((group, groupIndex) => (
            <div key={groupIndex} className="px-2">
              <div className="w-[1200px] mx-auto">
                <div className="flex justify-between items-center h-[550px] pt-8 gap-x-6">
                  {group.map((about) => (
                    <div
                      key={about.id}
                      className={`p-4 overflow-visible ${
                        about.image === People1 || about.image === People3
                          ? "min-w-[350px] max-w-[350px] h-[400px] bg-contain bg-no-repeat bg-center"
                          : "min-w-[440px] max-w-[440px] h-[450px] bg-contain bg-no-repeat bg-center"
                      }`}
                      style={{
                        backgroundImage: `url(${
                          about.image === People1
                            ? Bg1
                            : about.image === People2
                            ? Bg2
                            : about.image === People3
                            ? Bg3
                            : about.image === People1
                        })`,
                      }}
                    >
                      <img
                        src={about.image}
                        alt={about.description}
                        className={`object-cover rounded-full mx-auto ${
                          about.image === People1 || about.image === People3
                            ? "w-[76px] h-[76px] -mt-5"
                            : "w-[105px] h-[105px] -mt-16"
                        }`}
                      />
                      <div className="mx-auto">
                        <div className="flex flex-col justify-start items-center gap-y-1 text-[#282A3A] text-sm">
                          <span
                            className={`text-[#525252] lato-bold ${
                              about.image === People1 || about.image === People3
                                ? "text-[18px] mt-3"
                                : "text-[24px] mt-5"
                            }`}
                          >
                            {about.name}
                          </span>
                          <span
                            className={`text-[#525252] lato-normal ${
                              about.image === People1 || about.image === People3
                                ? "text-[12px] -mt-0.5"
                                : "text-[18px] mt-1.5"
                            }`}
                          >
                            {about.destination}
                          </span>
                          <img
                            src={Quotes}
                            className={`w-[20px] ${
                              about.image === People1 || about.image === People3
                                ? "-mt-1"
                                : "w-[36px]"
                            }`}
                            alt="Quote"
                          />
                        </div>
                        <h2
                          className={`mt-0 libre-normal text-justify text-[#525252] ${
                            about.image === People1
                              ? "pl-14 pr-10 text-[12px] leading-[16px]"
                              : about.image === People3
                              ? "pl-10 pr-14 text-[12px] leading-[16px]"
                              : "px-8 text-[16px]"
                          }`}
                        >
                          {about.description}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
