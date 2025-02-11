import { useState } from "react";
import Image from "../assets/45.svg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      title: "What is coir, and how is it sourced?",
      content:
        "Coir is a natural fiber extracted from coconut husks. It is sustainably sourced from coconut farms, ensuring eco-friendly production.",
    },
    {
      title: "What types of coir products do you offer?",
      content:
        "We offer a wide range of coir products, including mats, brushes, ropes, and biodegradable gardening supplies.",
    },
    {
      title: "How do you ensure the quality of your products?",
      content:
        "Our coir products undergo strict quality checks, ensuring durability and eco-friendliness before reaching our customers.",
    },
    {
      title: "Do you offer international shipping?",
      content:
        "Yes, we provide international shipping with various options, including standard and expedited delivery.",
    },
    {
      title: "What packaging methods do you use for exports?",
      content:
        "Our export packaging includes eco-friendly materials, ensuring safe transit while reducing environmental impact.",
    },
    {
      title: "Are your coir products eco-friendly and sustainable?",
      content:
        "Yes! Our coir products are 100% biodegradable, renewable, and produced with minimal environmental impact.",
    },
    {
      title: "What is your minimum order quantity (MOQ) for exports?",
      content:
        "Our MOQ varies by product type. Please contact us for specific details regarding bulk orders.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-18 max-w-[1440px] mx-auto">
      <h1 className="agbalumo-normal text-[29px] text-center text-[#525252]">
        Frequently Asked Questions
      </h1>
      <p className="text-center mx-auto mt-5 sorts-normal text-[18px] leading-[25.88px] w-[747px]">
        Find answers to common questions about our coir products, sourcing,
        quality, and shipping. We’re here to help you with all your inquiries.
      </p>

      <div className="flex justify-between items-start gap-x-10 mt-14 px-20">
        <img src={Image} alt="FAQ Illustration" className="w-[488px]" />

        {/* FAQ List */}
        <div className="w-full max-h-[754px] overflow-y-scroll pr-4 scrollbar">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t-[1.5px] border-b-[1.5px] border-[#E2BC7D] mb-[-1px]"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 h-[78px]"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{faq.title}</h3>
                <span
                  className={`text-[24px] transition-transform duration-200 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </div>

              {/* Content */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-[200px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-4 pb-4 text-gray-700">{faq.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
