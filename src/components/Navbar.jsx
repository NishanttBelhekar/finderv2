import React, { useState } from "react";
import { NavbarMenu } from "../mockData/data";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { signOut } from "firebase/auth";
import { database } from "../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const history = useNavigate();

  const handleClick = () => {
    signOut(database).then(() => {
      history('/');
    });
  };

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-4">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary font-['Outfit'] font-extrabold">Finderr.</p>
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-primary font-semibold hover:underline underline-offset-2"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icon section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button
              className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block"
              onClick={handleClick}
            >
              Sign Out
            </button>
          </div>
          {/* Mobile hamburger Menu Section */}
          <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
