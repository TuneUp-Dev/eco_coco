import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import Call from "../assets/call.svg";
import Mail from "../assets/mail.svg";
import Office from "../assets/office.svg";
import Factory from "../assets/factory.svg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://eco-coco-backend.vercel.app/send-mail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setStatus({ success: true, message: "Email sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          success: false,
          message: data.error || "Something went wrong",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Network error. Please try again later.",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <div
        id="contact"
        className="px-6 md:px-20 lg:px-32 py-16 bg-white max-w-[1440px] mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-left">
          Find us
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-x-20 gap-y-10">
          {/* Contact divs */}
          <div className="mt-6 grid grid-cols-1 gap-y-7">
            {/* Call Us */}
            <div className="p-4 bg-[#FBFBFB] rounded-[12px] border border-[#F3F3F3] flex items-center gap-x-6 shadow-sm">
              <span className="bg-[#E2BC7D] rounded-full flex justify-center items-center w-[54px] h-[54px]">
                <img src={Call} className="w-[24px]" alt="Call Icon" />
              </span>
              <div>
                <p className="text-[#111D15] text-[20px] font-semibold">
                  Call Us
                </p>
                <p className="text-[#666666] text-[16px]">+91 6379248545</p>
              </div>
            </div>

            {/* Email Now */}
            <div className="p-4 bg-[#FBFBFB] rounded-[12px] border border-[#F3F3F3] flex items-center gap-x-6 shadow-sm">
              <span className="bg-[#E2BC7D] rounded-full flex justify-center items-center w-[54px] h-[54px]">
                <img src={Mail} className="w-[24px]" alt="Mail Icon" />
              </span>
              <div>
                <p className="text-[#111D15] text-[20px] font-semibold">
                  Email Now
                </p>
                <p className="text-[#666666] text-[16px]">
                  info@ecococoproduct.com
                </p>
              </div>
            </div>

            {/* Office Address */}
            <div className="p-4 bg-[#FBFBFB] rounded-[12px] border border-[#F3F3F3] flex items-center gap-x-6 shadow-sm">
              <span className="bg-[#E2BC7D] rounded-full flex justify-center items-center min-w-[54px] h-[54px]">
                <img src={Office} className="w-[24px]" alt="Office Icon" />
              </span>
              <div>
                <p className="text-[#111D15] text-[20px] font-semibold">
                  Office Address
                </p>
                <p className="text-[#666666] text-[16px]">
                  33/7, Thomas Nagar, Little Mount, Saidapet, Tamil Nadu,
                  600015, India
                </p>
              </div>
            </div>

            {/* Unit Address */}
            <div className="p-4 bg-[#FBFBFB] rounded-[12px] border border-[#F3F3F3] flex items-center gap-x-6 shadow-sm">
              <span className="bg-[#E2BC7D] rounded-full flex justify-center items-center min-w-[54px] h-[54px]">
                <img src={Factory} className="w-[24px]" alt="Factory Icon" />
              </span>
              <div>
                <p className="text-[#111D15] text-[20px] font-semibold">
                  Unit Address
                </p>
                <p className="text-[#666666] text-[16px]">
                  6/7, Pananthoppu, Pamban, Ramanathapuram District, Tamil Nadu,
                  623521, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="-mt-2 w-full max-w-lg">
            <h3 className="text-[16px] font-medium text-[#111D15]">
              Contact info
            </h3>
            <h3 className="text-[30px] font-bold text-[#111D15]">
              Keep In Touch
            </h3>
            <p className="text-[16px] text-[#666666] mt-1">
              We prioritize responding to your inquiries promptly to ensure you
              receive assistance in a timely manner.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full h-[56px] rounded-[4px] py-[18px] px-[20px] border border-[#F3F3F3] text-[#666666] outline-none focus:ring-2 focus:ring-[#E2BC7D]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full h-[56px] rounded-[4px] py-[18px] px-[20px] border border-[#F3F3F3] text-[#666666] outline-none focus:ring-2 focus:ring-[#E2BC7D]"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-[88px] rounded-[4px] resize-none py-[18px] px-[20px] border border-[#F3F3F3] text-[#666666] outline-none focus:ring-2 focus:ring-[#E2BC7D]"
                rows={4}
              />

              <div className="flex justify-start items-center gap-x-10">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-[155px] h-[42px] rounded-[6px] bg-[#E2BC7D] text-white font-medium transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {status && (
                  <p
                    className={`${
                      status.success ? "text-lime-500" : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
