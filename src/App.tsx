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
      category: "Web Development",
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
        "Future oriented social media with healthy sustainable concept.",
      tools: ["Figma"],
      image:dte,
      year: "2024",
    },
    {
      id: 2,
      title: "Kinside",
      description:
        "Localized global community/language exchange app.",
      tools: ["Figma"],
      image:ki,
      year: "2025",
    },
  ];

  const webDevProjects = [
    {
      id: 1,
      title: "Collectif Han",
      purpose:
        "Interactive website for group introduction.",
      stack: [
        "React",
        "TypeScript",
        "D3.js",
        "Node.js",
        "PostgreSQL",
      ],
      image: col,

      year: "2024",
      link: "#",
    },
    {
      id: 2,
      title: "Mate Match",
      purpose:
        "Roomate matching app with safety features.",
      stack: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
      image: mm,
  
      year: "2025",
      link: "#",
    },
        {
      id: 3,
      title: "Popcode",
      purpose:
        "Coding education website for beginners.",
      stack: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
      image: po,
  
      year: "2025",
      link: "#",
    },
        {
      id: 4,
      title: "World Web",
      purpose:
        "Website visualizing global economy level and cultural engagement.",
      stack: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
      image: wo,
  
      year: "2025",
      link: "#",
    },
            {
      id: 5,
      title: "Rupture",
      purpose:
        "Resturant reservation website.",
      stack: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
      image: ru,
  
      year: "2025",
      link: "#",
    },
            {
      id: 4,
      title: "Drawing App",
      purpose:
        "Drawing editor with diverse functions.",
      stack: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
      image: dr,
  
      year: "2025",
      link: "#",
    }
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
      id: 3,
      title: "2022 STISS Main Video",
      role: "Creative Director",
   
      thumbnail:st2,
      year: "2022",
    },
    {
      id: 4,

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
      case "Web Design":
        return <WebDesignPage projects={webDesignProjects} />;
      case "Web Development":
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