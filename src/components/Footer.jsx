import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-stone-900 text-white grid grid-cols-1 md:grid-cols-2 gap-4 p-6 text-center">
      {/* Branding Section */}
      <div className="flex flex-col items-center">
        <p className="text-white font-['Outfit'] font-extrabold text-2xl uppercase mb-2">
          Finderr.
        </p>
        <p className="text-xs text-stone-400 text-justify w-full md:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          aperiam consectetur, voluptatem ratione, vitae sapiente laudantium
          libero voluptate dolor suscipit cum quidem provident aspernatur
          placeat inventore nobis. Ea, accusantium magni cumque nesciunt nostrum
          neque.
        </p>
      </div>

      {/* Social Links Section */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-white transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-white transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-white transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
