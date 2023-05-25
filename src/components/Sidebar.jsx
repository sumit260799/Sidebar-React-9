import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./Data";

function Sidebar() {
  const user = useContext(AppContext);
  const { isSidebarOpen, closesidebar } = user;
  return (
    <div className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <div className="">
          <div className="linklist flex m-5 mb-10 justify-between">
            <p className="text-[2rem] tracking-widest text-[#60a5fa] capitalize font-serif ">
              {" "}
              Sumit
            </p>
            <button
              className="close-btn text-2xl text-[#8b0c0ce1] "
              onClick={closesidebar}
            >
              <FaTimes />
            </button>
          </div>
          <div>
            <ul className=" ">
              {links.map((link) => {
                const { id, url, text, icon } = link;
                return (
                  <li className="" key={id}>
                    <a
                      className="flex gap-x-3 items-center capitalize text-[#64748b] ml-3 mb-6 text-[1.5rem]"
                      href={url}
                    >
                      {icon}
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="social relative ">
            <ul className="flex px-16 mx-auto   ">
              {social.map((socials) => {
                const { id, link, icon } = socials;
                return (
                  <li className=" mx-auto  mt-52 sm:mt-40" key={id}>
                    <a className="text-[1.5rem]  text-[#60a5fa]" href={link}>
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
