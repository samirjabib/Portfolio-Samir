// import images
import Hero_person from "./assets/Hero/person.png";
import Pokemon from "./assets/hero/pokemon.png"

import html from "./assets/Skills/html.png";
import css from "./assets/Skills/css.png";
import javascript from "./assets/Skills/javascript.png"
import reactjs from "./assets/Skills/react.png";
import nodejs from "./assets/Skills/node.png";
import github from "./assets/Skills/github.png";

import services_logo1 from "./assets/Services/logo1.png";
import services_logo2 from "./assets/Services/logo2.png";
import services_logo3 from "./assets/Services/logo3.png";

import project1 from "./assets/projects/img1.png";
import project2 from "./assets/projects/img2.png";
import project3 from "./assets/projects/img3.png";
import person_project from "./assets/projects/person.png";

import avatar1 from "./assets/Testimonials/avatar1.png";
import avatar2 from "./assets/Testimonials/avatar2.png";
import avatar3 from "./assets/Testimonials/avatar3.png";
import avatar4 from "./assets/Testimonials/avatar4.png";

import Hireme_person from "./assets/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
  
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full-Stack Developer",
    firstName: "SAMIR",
    LastName: "JABIB",
    btnText: "Hire Me",
    image: Pokemon,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "8+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "CURRENT STACK",
    skills_content: [
      {
        name: "Javascript",
        para: "Lorem ipsum text  dummy",
        logo: javascript,
      },
   
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },

      {
        name: "Html",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },

      
      {
        name: "Css",
        para: "Css",
        logo: css,
      },

      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },

      {
        name: "Github",
        para: "Lorem ipsum text  dummy",
        logo: github,
      },

   

     



    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
