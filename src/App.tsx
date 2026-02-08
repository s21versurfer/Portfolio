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
import col from "./assets/colhan.png"
import mm from "./assets/mm.png"


export default function App() {
  const [activeSection, setActiveSection] = useState("Home");

  // Mock Data
  const selectedWorks = [
    {
      id: 1,
      title: "Urban Perspectives",
      category: "Photography",
      year: "2025",
      image: img1
    },
    {
      id: 2,
      title: "Commerce Platform Redesign",
      category: "Web Design",
      year: "2024",
     image: colhan
     
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      category: "Web Development",
      year: "2024",
      image: news
    },
    {
      id: 4,
      title: "Quarterly Magazine",
      category: "Editorial",
      year: "2025",
      image: vlog
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
      title: "E-Commerce Platform",
      description:
        "Complete redesign of a fashion retail platform focusing on visual storytelling and seamless checkout experience.",
      tools: ["Figma", "Prototyping", "Design Systems"],
      image:
        "https://images.unsplash.com/photo-1758598303946-385680e4eabd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2UlMjBtb2NrdXB8ZW58MXx8fHwxNzcwMzMyODgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2024",
    },
    {
      id: 2,
      title: "Portfolio System",
      description:
        "Modular portfolio template system for creative professionals with emphasis on typography and white space.",
      tools: ["Sketch", "Adobe XD", "User Research"],
      image:
        "https://images.unsplash.com/photo-1576057122708-9608db46b2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwbGFwdG9wfGVufDF8fHx8MTc3MDM0Njk0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2025",
    },
  ];

  const webDevProjects = [
    {
      id: 1,
      title: "Real-Time Analytics Dashboard",
      purpose:
        "Built a comprehensive analytics platform with real-time data visualization and custom reporting tools.",
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
      title: "Content Management System",
      purpose:
        "Custom CMS built for editorial teams with focus on collaboration and version control.",
      stack: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
      image: mm,
  
      year: "2025",
      link: "#",
    },
        {
      id: 2,
      title: "Content Management System",
      purpose:
        "Custom CMS built for editorial teams with focus on collaboration and version control.",
      stack: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
      image: mm,
  
      year: "2025",
      link: "#",
    },
        {
      id: 2,
      title: "Content Management System",
      purpose:
        "Custom CMS built for editorial teams with focus on collaboration and version control.",
      stack: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
      image: mm,
  
      year: "2025",
      link: "#",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Seoul After Dark",
      role: "Director, Cinematographer",
      achievement:
        "Official Selection - Seoul Film Festival 2024",
      thumbnail:
        "https://images.unsplash.com/photo-1767164035513-1f4e8f19e491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB2aWRlb2dyYXBoeXxlbnwxfHx8fDE3NzAzNjA3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2024",
    },
    {
      id: 2,
      title: "Design Process Documentary",
      role: "Producer, Editor",
      thumbnail:
        "https://images.unsplash.com/photo-1768885513772-2963bd07ec93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG18ZW58MXx8fHwxNzcwMjkzNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2025",
    },
    {
      id: 3,
      title: "Brand Identity Film",
      role: "Creative Director",
      achievement: "Vimeo Staff Pick",
      thumbnail:
        "https://images.unsplash.com/photo-1691180273080-aacef51379d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNhbWVyYXxlbnwxfHx8fDE3NzAyNzMwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2024",
    },
    {
      id: 4,
      title: "Motion Typography Reel",
      role: "Motion Designer",
      thumbnail:
        "https://images.unsplash.com/photo-1616397325279-e7bb752d0e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzAzNjA2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2025",
    },
  ];

  const editorialProjects = [
    {
      id: 1,
      title: "Quarterly Design Magazine",
      type: "Magazine",
      description:
        "A 120-page publication exploring the intersection of design, technology, and culture. Art directed and designed all editorial layouts with focus on typographic hierarchy.",
      image: news,
      year: "2025",
    },
    {
      id: 2,
      title: "Photography Annual",
      type: "Book",
      description:
        "Annual photography collection featuring works from emerging Asian photographers. Designed with generous margins and careful attention to image sequencing.",
      image:
        "https://images.unsplash.com/photo-1660251406411-589fa0b05604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwcGhvdG9ncmFwaHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAzNjA2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2024",
    },
    {
      id: 3,
      title: "Architecture Newspaper",
      type: "Newspaper",
      description:
        "Monthly newspaper documenting contemporary architecture in Seoul. Tabloid format with modular grid system allowing for flexible content layouts.",
      image:
        "https://images.unsplash.com/photo-1616397325279-e7bb752d0e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzAzNjA2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2024",
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