// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import php from "./assets/images/Skills/php.png";
import symfony from "./assets/images/Skills/symfony.png";
import javascript from "./assets/images/Skills/javascript.png"


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaLinkedin } from 'react-icons/fa';

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
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Engineer",
    firstName: "AMIN",
    LastName: "OUSSOUL",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "PHP",
        para: "A backend Programming Language",
        logo: php,
      },
      {
        name: "Node js",
        para: "a JavaScript runtime",
        logo: nodejs,
      },
      {
        name: "Symfony",
        para: "A PHP web application framework",
        logo: symfony,
      },
      {
        name: "React js",
        para: "front-end JavaScript library",
        logo: reactjs,
      },
      {
        name: "Javascript",
        para: "A programming language",
        logo: javascript,
      },
      {
        name: "Python",
        para: "a Programming Language",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Front end Development",
        para: "Development of the graphical user interface of a website, through the use of HTML, CSS, JavaScript, and Réact",
        logo: services_logo1,
      },
      {
        title: "Database Administration",
        para: "creating and organize systems to store and secure a variety of data using postgresql Mysql Sql end supabase",
        logo: services_logo2,
      },
      {
        title: "Backend Développement",
        para: "involvement in data storage, security, and other server-side functions using Php,Nodesjs, with Symfony Express ,Nextjs and Typescript ",
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
    image2: Hireme_person2,
    para: " My passion for coding and problem-solving drives me to continuously learn and adapt to new technologies. Let's collaborate and turn your ideas into stunning digital experiences!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "aminoussoul@gmail.com",
        icon: GrMail,
        link: "mailto:aminoussoul@gmail.com",
      },
      {
        text: "+0758516076",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "My Linkedin",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/oussoul/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
