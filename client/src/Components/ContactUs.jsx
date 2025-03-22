import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/images/360_F_811445894_k2FFI3gMa1E3pKFCI5tlGZzKcklIgpaw.jpg";

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center text-white px-6 py-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <button onClick={() => navigate(-1)} className="px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition">Go Back</button>
      </div>

      {/* Main Content Box */}
      <div className="relative z-10 w-full max-w-6xl p-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col items-center">
        {/* Title & Description */}
        <div className="text-center mb-12 max-w-3xl">
          <h2 className="pb-5 text-5xl font-extrabold">Contact Us</h2>
          <p className="pb-6 text-lg text-gray-300 mt-4 leading-relaxed">
            Have a question, a project idea, or just want to say hello? Reach out and let's connect! 👋
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row gap-12 w-full">
          {/* Contact Info Section */}
          <div className="bg-black/50 backdrop-blur-md p-10 rounded-xl w-full md:w-1/2 text-center">
            <h3 className="pb-5 text-3xl font-semibold text-blue-400 mb-8">Get in Touch</h3>
            <div className="space-y-6 text-lg text-left">
              {[
                { icon: <FaMapMarkerAlt size={24} />, label: "Address", value: "S.P Mukherjee Road, Near Jagannath Temple, Vill- Nabapally Manish Pota, North 24 Parganas, West Bengal - 700113" },
                { icon: <FaEnvelope size={24} />, label: "Email", value: "paushalidebnath15789@gmail.com" },
                { icon: <FaGithub size={24} />, label: "GitHub", value: "github.com/paushali", link: "https://github.com/Paushalidx8" },
                { icon: <FaLinkedin size={24} />, label: "LinkedIn", value: "linkedin.com/in/paushali", link: "https://www.linkedin.com/in/paushali-debnath-539320280/" },
                { icon: <FaInstagram size={24} />, label: "Instagram", value: "instagram.com/paushali", link: "https://www.instagram.com/city_._gurl/" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-white flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-blue-300 font-semibold">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white-400 hover:underline">{item.value}</a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-black/50 backdrop-blur-md p-10 rounded-xl w-full md:w-1/2 text-center">
            <h3 className="pb-5 text-3xl font-semibold text-blue-400 mb-8">Send a Message</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Full Name" className="w-full p-4 bg-transparent border-b border-gray-300 focus:outline-none text-white text-lg" />
              <input type="email" placeholder="Email" className="w-full p-4 bg-transparent border-b border-gray-300 focus:outline-none text-white text-lg" />
              <textarea placeholder="Type your message..." className="w-full p-4 bg-transparent border-b border-gray-300 focus:outline-none text-white text-lg" />
              <button type="submit" className="w-full bg-blue-500 py-3 rounded-xl hover:bg-blue-600 transition text-xl font-semibold">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
