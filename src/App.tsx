import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { SelectedWorks } from "./components/SelectedWorks";
import { ShortAbout } from "./components/ShortAbout";
import { PhotographyPage } from "./components/PhotographyPage";
import { WebDesignPage } from "./components/WebDesignPage";
import { WebDevelopmentPage } from "./components/WebDevelopmentPage";
import { VideoPage } from "./components/VideoPage";
import { EditorialPage } from "./components/EditorialPage";
import { AboutPage } from "./components/AboutPage";
import { ExtraPage } from "./components/ExtraPage";
import img from "./assets/편집본1.png";
import news from "./assets/newspaper.png";
import colhan from "./assets/colhan.png";
import vlog from "./assets/vlog.gif";

import img1 from "./assets/_MG_1903.jpg";
import img2 from "./assets/_MG_1959.jpg";
import img3 from "./assets/_MG_2027.jpg";
import img4 from "./assets/_MG_2039-2.jpg";
import img5 from "./assets/_MG_1903.jpg";
import col from "./assets/colhan.png";
import mm from "./assets/mm.png";
import po from "./assets/po.png";
import wo from "./assets/wo.png";
import dr from "./assets/dr.png";
import ru from "./assets/ru.png";
import ki from "./assets/ki.png";
import dte from "./assets/dte.png";
import mystik from "./assets/mystik.png";
import amore from "./assets/amore.png";
import invest from "./assets/invest.png";
import gc from "./assets/gc.png";
import ex from "./assets/ex.png";
import posture from "./assets/posture.png";
import colorblind from "./assets/colorblind.png";
import paris from "./assets/paris.png";
import gdg from "./assets/gdg.png";
import hangman from "./assets/hangman.png";
import nuvlog from "./assets/nuvlog.png";
import st1 from "./assets/stiss1.png";
import st2 from "./assets/stiss2.png";

import st22 from "./assets/st2.png";

import st11 from "./assets/st1.png";

import nu2 from "./assets/nu2.png";




export default function App() {
  const [activeSection, setActiveSection] = useState("Home");

  // Mock Data
  const selectedWorks = [
    {
      id: 1,
      title: "Shelter line no.2",
      category: "Photography",
      year: "2023",
      image: img1
    },
    {
      id: 2,
      title: "Collectif Han",
      category: "Development",
      year: "2024",
     image: colhan
     
    },
    {
      id: 3,
            title: "NU Vlog",
      category: "Video",
      year: "2025",
      image: vlog

    },
    {
      id: 4,
            title: "TheSeoulTech",
      category: "Editorial",
      year: "2024",
      image: news

    },
  ];

  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1552564273-8706ec2f9500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3MDMwNDYyMXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Urban Geometry",
      location: "Seoul, 2025",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1455565719944-febc6ea4435e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBtaW5pbWFsfGVufDF8fHx8MTc3MDMwMzY5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Natural Forms",
      location: "Jeju, 2024",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1689757987125-1e7598afe4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzcwMzYwNjkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Street Moments",
      location: "Tokyo, 2024",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1560509306-281e71177bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbXBvc2l0aW9uJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAzNjA2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Abstract Studies",
      location: "Berlin, 2025",
    },
  ];

 const webDesignProjects = [
  {
    id: 1,
    title: "Down to Earth",
    description:
      "Award-winning social media service concept designed to reduce algorithm-driven confirmation bias and promote healthier digital interaction.",
    tools: ["Figma", "Service Design", "UX Research"],
    image: dte,
    year: "2024",
    link: "https://github.com/s21versurfer/HelloMyWorld/blob/main/IT%20Service%20Competetion/Social%20Media%20Stadistics%20Thesis%20by%20Slidesgo.pdf",
  },
  {
    id: 2,
    title: "Kinside",
    description:
      "Korean culture recommendation and localized community service for global users interested in Korean lifestyle, travel, and cultural experiences.",
    tools: ["Figma", "Product Planning", "Global Marketing"],
    image: ki,
    year: "2025",
    link: "https://docs.google.com/presentation/d/1PfijAtOK3YgJr8VsvnC0wNfbw3mtcMseCEeWYAhyCi0/edit?slide=id.p1#slide=id.p1",
  },
  {
    id: 3,
    title: "MysticK Night",
    description:
      "Korean-French cultural festival proposal for the 140th anniversary of France–Korea diplomatic relations, combining Korean folklore, occult themes, K-culture, and immersive pop-up experiences.",
    tools: ["Event Planning", "Branding", "AI Image Generation", "Cross-Cultural Strategy"],
    image: mystik,
    year: "2025",
    link: "https://drive.google.com/file/d/1twtT6RnISpjTtSSlJrMns0vkb71O1pIN/view?usp=sharing",
  },
  {
    id: 4,
    title: "Amorepacific Brand Challenge",
    description:
      "Global beauty branding strategy for Innisfree, focusing on mindful beauty, healthy self-expression, Gen Z insights, and participatory brand experiences.",
    tools: ["Brand Strategy", "Consumer Research", "Marketing Planning"],
    image: amore,
    year: "2026",
    link: "https://drive.google.com/file/d/1K8YYhClD_70tMoN0wsoMOSInOdqNgSUG/view?usp=sharing",
  },
  {
    id: 5,
    title: "Investment Analysis",
    description:
      "Financial and investment analysis project using market indicators and business data to derive strategic insights.",
    tools: ["Data Analysis", "Business Research", "Financial Analysis"],
    image: invest,
    year: "2025",
    link: "https://docs.google.com/presentation/d/1PqF9FAyYy9veqgqGv-ZlB26_2y90TMQ9xH3DFVxjhdA/edit?usp=sharing",
  },
  {
    id: 6,
    title: "Global Challenger",
    description:
      "Research project on no-code and low-code technology trends, analyzing their business impact and potential for digital transformation.",
    tools: ["Research", "Technology Analysis", "Business Strategy"],
    image: gc,
    year: "2024",
    link: "https://github.com/s21versurfer/HelloMyWorld/blob/main/Global%20Challenger/nocodelowcode%20research.pdf",
  },
  {
    id: 7,
    title: "Ex-Track",
    description:
      "Career experience tracking platform concept designed to help students organize extracurricular activities and career development records.",
    tools: ["Product Planning", "UX Design", "Service Strategy"],
    image: ex,
    year: "2024",
    link: "https://github.com/s21versurfer/HelloMyWorld/blob/main/IT%20Service%20Competetion/%ED%94%84%EB%A0%88%EC%A0%A0%ED%85%8C%EC%9D%B4%EC%85%98%201.pdf",
  },
  {
    id: 8,
    title: "Posture Correction System",
    description:
      "Data mining project analyzing posture-related data and proposing a system for posture improvement and health-oriented feedback.",
    tools: ["Data Mining", "Python", "Analytics"],
    image: posture,
    year: "2024",
    link: "https://github.com/s21versurfer/HelloMyWorld/blob/main/data%20mining/Data%20Mining.pdf",
  },
    {
    id: 9,
    title: "AI for Colorblind",
    purpose:
      "Machine learning-based color recognition system designed to support colorblind users through accessible color classification.",
    tools: ["Python", "Machine Learning", "Data Processing"],
    image: colorblind,
    year: "2024",
    link: "https://docs.google.com/presentation/d/1Z2F4KrCXfWscN00qsamR9KyOEEyG7rUR80bIF8ImzGI/edit?usp=sharing",
  },
];

 const webDevProjects = [
  {
    id: 1,
    title: "Collectif Han",
    purpose:
      "Interactive website for introducing a Korean-French cultural collective and supporting cultural event branding.",
    stack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    image: col,
    year: "2024",
    link: "https://drive.google.com/file/d/1twtT6RnISpjTtSSlJrMns0vkb71O1pIN/view?usp=sharing",
  },
  {
    id: 2,
    title: "Mate Match",
    purpose:
      "Roommate matching app based on lifestyle compatibility, dormitory preferences, and safety-oriented matching features.",
    stack: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
    image: mm,
    year: "2025",
    link: "https://github.com/han3o1/MateMatch",
  },
  {
    id: 3,
    title: "Popcode",
    purpose:
      "Coding education website for beginners, designed to support structured programming practice and user-friendly learning flow.",
    stack: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
    image: po,
    year: "2025",
    link: "https://docs.google.com/presentation/d/1Jalt1F8wE_KSWxxg8olA-jkVDGZRZQDmlEOY6or_67A/edit?usp=sharing",
  },
  {
    id: 4,
    title: "World Web",
    purpose:
      "Website visualizing global economic levels and cultural engagement through interactive information design.",
    stack: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
    image: wo,
    year: "2025",
    link: "https://docs.google.com/presentation/d/1gY_1dGjmc5wVr2jO-Mm8GgsNqptnUtu_/edit?slide=id.g3ae15bca6d2_0_78#slide=id.g3ae15bca6d2_0_78",
  },
  {
    id: 5,
    title: "Rupture",
    purpose:
      "Restaurant reservation website focused on digital booking flow and user-friendly service experience.",
    stack: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
    image: ru,
    year: "2025",
    link: "https://kimsilverwave.github.io/",
  },
  {
    id: 6,
    title: "Drawing App",
    purpose:
      "Java-based drawing editor supporting shape creation, color control, object editing, and GUI interaction.",
    stack: ["Java", "OOP", "GUI"],
    image: dr,
    year: "2024",
    link: "https://github.com/s21versurfer/HelloMyWorld/tree/main/Programming/Darwing%20Editor",
  },

  {
    id: 7,
    title: "C'est Paris",
    purpose:
      "AI-powered cultural adventure game inspired by exchange student experiences in France, featuring personalized gameplay and cultural storytelling.",
    stack: ["Game Development", "AI Personalization", "Unity","VR"],
    image: paris,
    year: "2025",
    link: "https://github.com/TPRPT/Cest-Paris",
  },
  {
    id: 8,
    title: "GDG Homepage",
    purpose:
      "Google Developer Group homepage project for archiving members, activities, and group information.",
    stack: ["React", "TailwindCSS", "Git", "GitHub"],
    image: gdg,
    year: "2025",
    link: "https://github.com/yeongJD/GDG_Homepage_Team2",
  },
  {
    id: 9,
    title: "Hangman",
    purpose:
      "Web-based Hangman word game implemented with basic frontend technologies.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: hangman,
    year: "2024",
    link: "https://github.com/s21versurfer/webprogramming",
  },
];
  const videos = [
    {
      id: 1,
      title: "ITM Northumbria University Vlog",
      role: "Director, Cinematographer",
      achievement:
        "3rd prize on ITM vlog competition",
      thumbnail:nuvlog,
      year: "2024",
    },
    {
      id: 2,
   
      thumbnail:nu2,

    },
    {
      id: 3,
      title: "2022 STISS Mubflat Tour Vlog",
      role: "Creative Director",
      
      thumbnail:st1,
      year: "2022",
    },
    {
      id: 4,

      thumbnail:st11,
    
    },
        {
      id: 5,
      title: "2022 STISS Main Video",
      role: "Creative Director",
   
      thumbnail:st2,
      year: "2022",
    },
    {
      id: 6,

      thumbnail:st22,

    },
  ];

  const editorialProjects = [
    {
      id: 1,
      title: "TherSeoulTech",
      type: "Newspaper",
      description:
        "The SeoulTech is the official English-language newspaper of Seoul National University of Science and Technology (SeoulTech).It delivers a wide range of content covering campus news, university announcements, and student life, as well as major social and global issues. In addition, The SeoulTech introduces Korean culture and contemporary topics to an international audience, serving as a bridge between SeoulTech and the global community. Through accurate reporting and thoughtful analysis, the newspaper aims to foster cross-cultural understanding and provide reliable information to both members of the university and readers beyond campus.",
      image: news,
      year: "2022-2024",
    },
   
  ];

  const handleWorkClick = (category: string) => {
    setActiveSection(category);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Home":
        return (
          <>
            <Hero backgroundImage="https://images.unsplash.com/photo-1616397325279-e7bb752d0e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzAzNjA2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080" />
            <SelectedWorks
              works={selectedWorks}
              onWorkClick={handleWorkClick}
            />
            <ShortAbout />
          </>
        );
      case "About":
        return <AboutPage />;
      case "Photography":
        return <PhotographyPage photos={photos} />;
      case "Projects":
        return <WebDesignPage projects={webDesignProjects} />;
      case "Development":
        return <WebDevelopmentPage projects={webDevProjects} />;
      case "Video":
        return <VideoPage videos={videos} />;
      case "Editorial":
        return <EditorialPage projects={editorialProjects} />;
      case "Extra":
        return <ExtraPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />
      {renderContent()}
    </div>
  );
}