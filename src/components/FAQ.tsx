import { useState } from "react";
import Image from "../assets/45.svg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      title: "What is coir, and how is it sourced?",
      content:
        "Coir is a natural fiber extracted from coconut husks. It is sustainably sourced from coconut farms, ensuring eco-friendly production.",
    },
    {
      title: "What types of coir products do you offer?",
      content:
        "Yes! Our coir products are 100% biodegradable, renewable, and produced with minimal environmental impact.",
    },
    {
      title: "How do you ensure the quality of your products?",
      content:
        "We offer standard, expedited, and international shipping options to meet your needs. Shipping times vary based on location.",
    },
    {
      title: "Do you offer international shipping?",
      content:
        "Coir is a natural fiber extracted from coconut husks. It is sustainably sourced from coconut farms, ensuring eco-friendly production.",
    },
    {
      title: "What packaging methods do you use for exports?",
      content:
        "Yes! Our coir products are 100% biodegradable, renewable, and produced with minimal environmental impact.",
    },
    {
      title: "Are your coir products eco-friendly and sustainable?",
      content:
        "We offer standard, expedited, and international shipping options to meet your needs. Shipping times vary based on location.",
    },
    {
      title: "What is your minimum order quantity (MOQ) for exports?",
      content:
        "We offer standard, expedited, and international shipping options to meet your needs. Shipping times vary based on location.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
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
                className="border-t-[1.5px] border-b-[1.5px] border-[#E2BC7D] mb-[-1px]" // Add top and bottom borders
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
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-gray-700">{faq.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
