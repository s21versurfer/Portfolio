import { motion } from "motion/react";
import profileImg from "../assets/profile.jpg";
import "./about-patch.css"; // ← CSS 파일 import

// ─── Sub-components ────────────────────────────────────────────────────────────

const Badge = ({
  children,
  highlight = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) => (
  <span className={`badge${highlight ? " highlight" : ""}`}>{children}</span>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="tag">{children}</span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="section-title">{children}</p>
);

const Item = ({
  title,
  badges = [],
  tags = [],
  children,
}: {
  title: string;
  badges?: { label: string; highlight?: boolean }[];
  tags?: string[];
  children?: React.ReactNode;
}) => (
  <div className="item">
    <div className="item-header">
      <span className="item-title">{title}</span>
      {badges.map((b, i) => (
        <Badge key={i} highlight={b.highlight}>
          {b.label}
        </Badge>
      ))}
    </div>
    {children && <p className="item-desc">{children}</p>}
    {tags.length > 0 && (
      <div className="tag-row">
        {tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    )}
  </div>
);

const Section = ({ children }: { children: React.ReactNode }) => (
  <div className="section">{children}</div>
);

// ─── AboutPage ─────────────────────────────────────────────────────────────────

export function AboutPage() {
  return (
    <div className="about-page">

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-8">About</h2>

        <motion.img
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={profileImg}
          alt="profile"
          className="about-photo grayscale hover:grayscale-0 transition-all duration-700"
        />

        <div className="about-bio">
          <a
            href="https://www.linkedin.com/in/eungyeol-kim-83aab4294/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn →
          </a>
          <p>
            I am an undergraduate student majoring in Information Technology
            Management at Seoul National University of Science and Technology
            (SeoulTech). My interests lie at the intersection of technology,
            data, business, and global communication.
          </p>
          <p>
            Through software development, data analytics, international
            leadership, and content creation experiences, I have developed a
            multidisciplinary perspective that helps me understand both products
            and people.
          </p>
          <p>
            I aspire to become a global business professional who bridges
            technology and markets by transforming ideas into meaningful user
            experiences.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >

        <Section>
          <SectionTitle>Global Experience</SectionTitle>
          <Item title="Exchange Student — INSA Toulouse" badges={[{ label: "France · 2024–2025" }]}>
            Studied engineering in a multicultural environment; gained hands-on
            exposure to European consumer culture, communication styles, and
            international collaboration.
          </Item>
          <Item title="Double Degree Program — Northumbria University" badges={[{ label: "UK" }]}>
            Completed coursework and team projects in English, collaborating
            with students from diverse academic and cultural backgrounds.
          </Item>
          <Item title="Volunteer — SeoulTech International Summer School (STISS)">
            Assisted international students, coordinated campus activities, and
            developed cross-cultural communication skills.
          </Item>
        </Section>

        <Section>
          <SectionTitle>Data & AI Experience</SectionTitle>
          <Item title="Big Data Analytics Project" tags={["Hadoop", "Spark", "Python"]}>
            Analyzed relationships between GDP, welfare, cultural indicators,
            and national happiness indexes.
          </Item>
          <Item
            title="Machine Learning Project — Color Recognition for Color-Blind Users"
            badges={[{ label: "2nd Place", highlight: true }]}
          >
            Developed a color-recognition system using machine learning
            techniques; achieved 2nd place in project evaluation.
          </Item>
          <Item title="Data Analysis & Modeling" tags={["Python", "EDA", "Visualization"]}>
            Experience with CSV processing, exploratory data analysis,
            visualization, and predictive modeling.
          </Item>
        </Section>

        <Section>
          <SectionTitle>Content Creation & Marketing</SectionTitle>
          <Item title="Multicultural Content — Instagram & YouTube">
            Produced content featuring Korean culture and daily life with
            international students. One short-form video reached{" "}
            <strong>2.7M+ views</strong> through organic engagement.
          </Item>
          <Item title="Social Media Performance Analysis">
            Analyzed engagement metrics and improved content strategies based
            on audience feedback.
          </Item>
          <Item title="Amorepacific Brand Challenge">
            Researched global beauty trends and consumer behavior to develop
            branding strategies.
          </Item>
        </Section>

        <Section>
          <SectionTitle>Photography & Media</SectionTitle>
          <Item title="Photography Projects">
            Worked for fashion brand <strong>Ceritaunnie</strong> and hip-hop
            label <strong>Maximum Quality</strong>. Planned and executed
            concept-based photo shoots emphasizing storytelling and audience
            engagement.
          </Item>
        </Section>

        <Section>
          <SectionTitle>Awards & Achievements</SectionTitle>
          <Item title="Bronze Prize — SeoulTech IT Service Competition">
            Designed a service concept addressing algorithm-driven confirmation bias.
          </Item>
          <Item
            title="2nd Place — Machine Learning Project Evaluation"
            badges={[{ label: "2nd Place", highlight: true }]}
          >
            Color Recognition System for Color-Blind Users.
          </Item>
          <Item title="2.7M+ Views — Instagram Reel">
            Organic reach introducing Korean culture to international audiences.
          </Item>
        </Section>

        <Section>
          <SectionTitle>Frontend & Technical Experience</SectionTitle>
          <Item
            title="Frontend Developer — Google Developer Group on Campus"
            badges={[{ label: "2025–Present" }]}
            tags={["React", "Tailwind CSS", "Git"]}
          >
            Built a web-based archiving platform; implemented main page and
            profile page frontend. Focused on component-based UI, responsive
            layouts, and code consistency. Collaborated using Git/GitHub workflows.
          </Item>
          <Item title="Academic Projects">
            Coding practice website for beginner programmers; Java-based drawing
            application with shape creation, color control, and group editing.
            Coursework in data structures, algorithms, and software design.
          </Item>
          <div style={{ paddingTop: "0.75rem" }}>
            <p style={{ fontSize: "0.7rem", opacity: 0.4, marginBottom: "0.5rem" }}>
              Programming languages & tools
            </p>
            <div className="tag-row">
              {["Python", "Java", "C", "SQL", "HTML", "CSS", "JavaScript"].map(
                (t) => <Tag key={t}>{t}</Tag>
              )}
            </div>
          </div>
        </Section>

        <Section>
          <SectionTitle>Leadership & Collaboration</SectionTitle>
          <Item title="President — International Students Club">
            Led an organization of 200+ members in a multicultural environment;
            coordinated cross-cultural collaboration.
          </Item>
          <Item title="STEM — SeoulTech Encouraging Mentor">
            Provided university admissions counseling and academic planning
            support to high school students.
          </Item>
          <Item title="Public Relations Officer — IT Management Student Council">
            Planned student-focused events and created online promotional content.
          </Item>
        </Section>

        <Section>
          <SectionTitle>Communication Experience</SectionTitle>
          <Item title="Reporter — SeoulTech English Press" badges={[{ label: "2022–2024" }]}>
            Wrote English articles on campus life, culture, and international
            student issues. Produced card-news content for Instagram.
          </Item>
          <Item title="English Tutor" badges={[{ label: "2023–Present" }]}>
            Conducted one-on-one business English sessions, designed teaching
            materials, and provided structured feedback.
          </Item>
        </Section>

      </motion.div>
    </div>
  );
}
