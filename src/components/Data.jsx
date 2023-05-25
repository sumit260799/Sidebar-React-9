import { FaHome, FaFolderOpen, FaCalendarAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { HiDocument } from "react-icons/hi";

import { BsYoutube, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

export const links = [
  {
    id: 1,
    url: "./",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "./team",
    text: "ream",
    icon: <RiTeamFill />,
  },
  {
    id: 3,
    url: "./projects",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "./calender",
    text: "calender",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "./document",
    text: "document",
    icon: <HiDocument />,
  },
];

export const social = [
  {
    id: 1,
    link: "https://instagram.com",
    icon: <BsInstagram />,
  },
  {
    id: 2,
    link: "https://facebook.com",
    icon: <BsFacebook />,
  },
  {
    id: 3,
    link: "https://youtube.com",
    icon: <BsYoutube />,
  },
  {
    id: 4,
    link: "https://www.linkedin.com/in/sumit-das-b06730253/",
    icon: <BsLinkedin />,
  },
];
