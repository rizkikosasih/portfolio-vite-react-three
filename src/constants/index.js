/* import {
  api, bootstrap, codeigniter, contact, css, git, github,
  html, javascript, jquery, laravel, linkedin, mysql,
  nodejs, php, react, tailwindcss, vites
} from "./../assets/icons" */
import api from "./../assets/icons/api.svg"
import bootstrap from "./../assets/icons/bootstrap.svg"
import codeigniter from "./../assets/icons/codeigniter.svg"
import contact from "./../assets/icons/contact.svg"
import css from "./../assets/icons/css.svg"
import git from "./../assets/icons/git.svg"
import github from "./../assets/icons/github.svg"
import html from "./../assets/icons/html.svg"
import javascript from "./../assets/icons/javascript.svg"
import jquery from "./../assets/icons/jquery.svg"
import laravel from "./../assets/icons/laravel.svg"
import linkedin from "./../assets/icons/linkedin.svg"
import mysql from "./../assets/icons/mysql.svg"
import nodejs from "./../assets/icons/nodejs.svg"
import php from "./../assets/icons/php.svg"
import react from "./../assets/icons/react.svg"
import tailwindcss from "./../assets/icons/tailwindcss.svg"
import vites from "./../assets/icons/vites.svg"
import ecommerce from "./../assets/icons/ecommerce.svg"
import cashier from "./../assets/icons/cashier.svg"
import sd from "./../assets/icons/sd.svg"
import smp from "./../assets/icons/smp.svg"
import smk from "./../assets/icons/smk.svg"
import sarjana from "./../assets/icons/sarjana.svg"

const catSize = {
  smMax: {
    Walk: {
      position: [0, -1.3, 0],
      rotation: [0, 0, 0],
      scale: [2, 2, 2]
    },
    Sitting: {
      position: [0, -1.5, 0],
      rotation: [0, 0, 0],
      scale: [2, 2, 2]
    },
    Sleeping: {
      position: [.35, -1.15, 0],
      rotation: [0, -1.15, 0],
      scale: [2, 2, 2],
    }
  },
  mdMax: {
    Walk: {
      position: [.25, -1.15, 0],
      rotation: [0, 0, 0],
      scale: [1.85, 1.85, 1.85]
    },
    Sitting: {
      position: [.25, -1.15, 0],
      rotation: [0, 0, 0],
      scale: [1.85, 1.85, 1.85]
    },
    Sleeping: {
      position: [.43, -.45, 0],
      rotation: [0, -1.15, 0],
      scale: [1.85, 1.85, 1.85]
    }
  },
  lgMax: {
    Walk: {
      position: [.02, -1.2, 0],
      rotation: [0, 0, 0],
      scale: [2, 2, 2]
    },
    Sitting: {
      position: [.1, -1.3, 0],
      rotation: [0, 0, 0],
      scale: [2.15, 2.15, 2.15]
    },
    Sleeping: {
      position: [.5, -.75, 0],
      rotation: [0, -1.15, 0],
      scale: [2.25, 2.25, 2.25]
    }
  },
  xlMax: {
    Walk: {
      position: [.1, -1.3, 0],
      rotation: [0, 0, 0],
      scale: [2, 2, 2]
    },
    Sitting: {
      position: [.1, -1.3, 0],
      rotation: [0, 0, 0],
      scale: [2.15, 2.15, 2.15]
    },
    Sleeping: {
      position: [.4, -.75, 0],
      rotation: [0, -1.15, 0],
      scale: [2.15, 2.15, 2.15]
    }
  }
}

const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Other",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Other",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node JS",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React JS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: codeigniter,
    name: "Codeigniter",
    type: "Backend",
  },
  {
    imageUrl: jquery,
    name: "AJAX",
    type: "Frontend",
  },
  {
    imageUrl: laravel,
    name: "Laravel",
    type: "Backend",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Backend",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: vites,
    name: "Vite",
    type: "Frontend",
  },
  {
    imageUrl: api,
    name: "Restful API",
    type: "Backend",
  },
]

const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/rizkikosasih',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/rizki-kosasih-rk97',
  }
]

const listMenu = ['/', '/about', '/skills', '/contact']

const listFooter = ['/about', '/skills', '/contact']

const experiences = [
  {
    title: "Web Developer",
    company_name: "PT. Gogobli Asia Teknologi",
    icon: ecommerce,
    iconBg: "#accbe1",
    date: "June 2021 - Now",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      "Database constructed maintened and managing using MYSQL.",
      "Integrating web applications with Third Parties using APIs.",
      "related within purchase orders, stock-taking, ecommerce and etc."
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Viama",
    icon: cashier,
    iconBg: "#b7e4c7",
    date: "November 2022 - Now",
    points: [
      "Developing and maintaining web applications using PHP, Codeigniter and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Integrating web applications using APIs.",
      "Building cashier and membership system."
    ],
  },
]

const educations = [
  {
    iconUrl: sd,
    theme: 'btn-back-red',
    name: 'Elementary School',
    periode: '2011-2014',
    schoolName: 'SDN 09 Jakarta',
  },
  {
    iconUrl: smp,
    theme: 'btn-back-green',
    name: 'Junior High School',
    periode: '2008-2011',
    schoolName: 'SMPN 72 Jakarta',
  },
  {
    iconUrl: smk,
    theme: 'btn-back-yellow',
    name: 'Vocational High School',
    periode: '2011-2014',
    schoolName: 'SMK YP IPPI',
  },
  {
    iconUrl: sarjana,
    theme: 'btn-back-black',
    name: 'S1 Technology Information',
    periode: '2014-2021',
    schoolName: 'Institut Teknologi dan Bisnis Swadharma',
  },
]

export { catSize, skills, socialLinks, listMenu, listFooter, experiences, educations }
