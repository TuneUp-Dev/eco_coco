import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "../assets/profile.svg";
import Date from "../assets/date.svg";
import Arrow from "../assets/arrow2.svg";
import ArrowLeft from "../assets/arrow2.svg";
import ArrowRight from "../assets/arrow2.svg";
import Blog1 from "../assets/blog1.svg";
import Blog2 from "../assets/blog2.svg";
import Blog3 from "../assets/blog3.svg";
import { Button } from "@nextui-org/react";

const blogs = [
  {
    id: 1,
    image: Blog1,
    title: "The Future of Coir: Sustainable Solutions for a Greener Planet",
    author: "John Doe",
    date: "Feb 23, 2024",
  },
  {
    id: 2,
    image: Blog2,
    title: "Eco-Friendly Farming: The Role of Coir Pith in Agriculture",
    author: "John Doe",
    date: "Feb 23, 2024",
  },
  {
    id: 3,
    image: Blog3,
    title: "Coir-Based Products: A Step Towards Sustainability",
    author: "John Doe",
    date: "Feb 23, 2024",
  },
];

const Blogs = () => {
  const sliderRef = useRef<Slider | null>(null);

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <div>
        <ul className="slick-dots -top-[575px] absolute">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-[10px] h-[10px] bg-[#E2BC7D] bg-opacity-30 rounded-full transition-all duration-300 ease-in-out"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        id="blogs"
        className="mt-24 text-center relative max-w-[1440px] mx-auto"
      >
        {/* Custom Navigation */}
        <div className="flex justify-center items-center gap-x-64">
          <Button
            onClick={handleNext}
            className="w-[50px] h-[50px] flex justify-center items-center rounded-full"
          >
            <img
              src={ArrowLeft}
              className="cursor-pointer rotate-180 w-[15px] mr-1"
              alt="Left"
              onClick={handlePrev}
            />
          </Button>
          <div>
            <h1 className="aladin-normal text-[40px] text-gray-500">Blog</h1>
            <h1 className="playball-normal text-[36px] text-[#282A3A]">
              Read our articles
            </h1>
          </div>
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

        {/* Blog Cards Carousel */}
        <div className="mx-auto w-[1280px] mt-20 relative">
          <Slider ref={sliderRef} {...settings}>
            {blogs.map((blog) => (
              <div key={blog.id} className="px-2">
                <div className="w-[375px] mx-auto">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-[375px] h-[320px] object-cover rounded-tr-[80px] rounded-bl-[80px]"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center gap-3 text-[#282A3A] text-sm">
                      <span className="flex justify-start items-center gap-x-2">
                        <img src={Profile} className="w-[13px]" alt="" />
                        <span className="text-[14px]">{blog.author}</span>
                      </span>
                      <span className="flex justify-end items-center gap-x-2">
                        <img src={Date} className="w-[13px]" />
                        <span className="text-[14px]">{blog.date}</span>
                      </span>
                    </div>
                    <h2 className="mt-4 poltawski-bold text-[24px] text-start leading-[33px] text-[#282A3A]">
                      {blog.title}
                    </h2>
                    <a
                      href="#"
                      className="flex items-center justify-end text-[#282A3A] mt-4"
                    >
                      View details{" "}
                      <img src={Arrow} className="ml-2 w-[6px]" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Blogs;
