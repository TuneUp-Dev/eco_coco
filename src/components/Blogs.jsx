import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "../assets/profile.svg";
import Date from "../assets/date.svg";
import ArrowLeft from "../assets/arrow2.svg";
import ArrowRight from "../assets/arrow2.svg";
import Blog1 from "../assets/blog1.svg";
import Blog2 from "../assets/blog2.svg";
import Blog3 from "../assets/blog3.svg";
import { Button, Link } from "@heroui/react";

const blogs = [
  {
    id: 1,
    image: Blog1,
    title: "The Future of Coir: Sustainable Solutions for a Greener Planet",
    author: "John Doe",
    date: "Feb 23, 2024",
    link: "https://medium.com/@ecococoproduct/the-future-of-coir-sustainable-solutions-for-a-greener-planet-92fb9aa8f6ef",
  },
  {
    id: 2,
    image: Blog2,
    title: "Eco-Friendly Farming: The Role of Coir Pith in Agriculture",
    author: "John Doe",
    date: "Feb 23, 2024",
    link: "https://medium.com/@ecococoproduct/eco-friendly-farming-the-role-of-coir-pith-in-agriculture-ae496a2f3473",
  },
  {
    id: 3,
    image: Blog3,
    title: "Coir-Based Products: A Step Towards Sustainability",
    author: "John Doe",
    date: "Feb 23, 2024",
    link: "https://medium.com/@ecococoproduct/coir-based-products-a-step-towards-sustainability-d32ad32d3f3a",
  },
];

const Blogs = () => {
  const sliderRef = useRef(null);

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
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots h-3 -top-[610px] absolute">{dots}</ul>
      </div>
    ),
    customPaging: () => (
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
    <div
      id="blogs"
      className="mt-24 text-center relative max-w-[1440px] mx-auto"
    >
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
      <div className="mx-auto w-[1280px] py-4 mt-10 z-50 relative">
        <Slider ref={sliderRef} {...settings}>
          {blogs.map((blog) => (
            <div key={blog.id} className="py-5">
              <div className="w-[400px] rounded-[20px] px-4 pt-4 hover:shadow-lg hover:scale-[1.02] mx-auto transform transition-all ease-linear duration-300">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-[375px] h-[320px] object-cover rounded-tr-[80px] rounded-bl-[80px]"
                />
                <div className="py-4">
                  <div className="flex justify-between items-center text-[#282A3A] text-sm">
                    <span className="flex items-center gap-x-2 inter-normal">
                      <img src={Profile} className="w-[13px]" alt="Profile" />
                      {blog.author}
                    </span>
                    <span className="flex items-center gap-x-2">
                      <img src={Date} className="w-[13px]" alt="Date" />
                      {blog.date}
                    </span>
                  </div>
                  <h2 className="mt-4 text-[24px] leading-8 poltawski-bold text-start text-[#282A3A]">
                    {blog.title}
                  </h2>
                  <div className="flex justify-end items-center">
                    <Link
                      href={blog.link}
                      target="_blank"
                      className="rounded-2xl flex justify-center items-center mt-6"
                    >
                      <Button className="text-center rounded-2xl px-4 py-2 inter-normal flex justify-center items-center gap-x-2 text-[#282A3A] text-[16px]">
                        View Details{" "}
                        <img className="w-2" src={ArrowRight} alt="" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
