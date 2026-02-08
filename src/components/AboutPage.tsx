import { motion } from 'motion/react';
import profileImg from "../assets/profile.jpg";

interface ProfileImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string; // 너비만 조절하도록 변경 (높이는 자동으로 비율 유지)
  offsetLeft?: number | string;
  offsetBottom?: number | string; 
}

// ProfileImage 컴포넌트 수정
export function ProfileImage({
  src,
  alt = "profile",
  className = "",
  width = 80,
  offsetLeft = 60,
  offsetBottom = 30,
}: ProfileImageProps) {
  const widthStyle =
    typeof width === "number" ? { width: `${width}px` } : { width };

const offsetStyle = {
  marginLeft:
    typeof offsetLeft === "number" ? `${offsetLeft}px` : offsetLeft,
  marginBottom:
    typeof offsetBottom === "number" ? `${offsetBottom}px` : offsetBottom,
};

  return (
    <div style={offsetStyle}>
      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        src={src}
        alt={alt}
        style={{ ...widthStyle, height: "auto" }}
        className={className}

              />
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="mt-4 text-xl font-medium">About</h2>

        
        {/* 수정된 ProfileImage 사용 (여기서 width 조절 가능) */}
        {/* width를 픽셀 단위 숫자로 주면 됩니다. */}
        <ProfileImage 
          src={profileImg} 
          width={300} // 여기서 숫자를 바꾸면 너비가 변하고 높이는 비율에 맞춰 자동 조절됩니다.
          className="grayscale hover:grayscale-0 transition-all duration-300 ml-100" 
        />
        {/* 또는 Tailwind CSS 클래스로도 지정할 수 있습니다. */}
        {/* <ProfileImage 
          src={profileImg} 
          width="w-40" // w-40 클래스로 너비를 지정하면 height는 자동으로 맞춰집니다.
          className="grayscale hover:grayscale-0 transition-all duration-300" 
        /> */}

      <p>
        I am an undergraduate student majoring in Information Technology Management
        at Seoul National University of Science and Technology (SeoulTech), with a
        strong focus on frontend engineering and user-centered software development.
        My background combines computer science fundamentals with business and
        communication skills, enabling me to contribute effectively in collaborative,
        product-oriented teams.
      </p>

      <div className="pt-6 flex flex-col gap-4 m-22">
        <h3 className="text-base font-medium opacity-80">
          Frontend & Technical Experience
        </h3>

      </div>

      <p>
        <strong>Frontend Developer, Google Developer Group on Campus (2025–Present)</strong>
      </p>
      
      <ul className="list-disc pl-5 space-y-2">
        <li>Learned and applied React and Tailwind CSS in team-based projects</li>
        <li>Contributed to a web-based archiving platform for group members and activities</li>
        <li>Implemented the main page and profile page frontend</li>
        <li>Focused on component-based UI design, responsive layouts, and code consistency</li>
        <li>Collaborated with teammates using Git/GitHub workflows</li>
      </ul>

      <p className="text-sm font-mono bg-gray-100 p-2 rounded">
        Programming: Python, Java, C, SQL, HTML, CSS, JavaScript
      </p>


  <p>
    Academic projects include a coding practice website for beginner programmers,
    a Java-based drawing application supporting shape creation, color control,
    and group editing, and coursework grounded in data structures, algorithms,
    and software design fundamentals.
  </p>

  <h3 className="text-base font-medium opacity-80 pt-6">
    Leadership & Collaboration
  </h3>

  <ul className="list-disc pl-5 space-y-2">
    <li>
      <strong>President, International Students Club</strong> — Led an organization
      of 200+ members in a multicultural environment and coordinated cross-cultural
      collaboration.
    </li>
    <li>
      <strong>STEM (SeoulTech Encouraging Mentor)</strong> — Provided university
      admissions counseling and academic planning support to high school students.
    </li>
    <li>
      <strong>Public Relations Officer, IT Management Student Council</strong> —
      Planned student-focused events and created online promotional content.
    </li>
  </ul>

  <h3 className="text-base font-medium opacity-80 pt-6">
    Communication Experience
  </h3>

  <ul className="list-disc pl-5 space-y-2">
    <li>
      <strong>Reporter, SeoulTech English Press (2022–2024)</strong> — Wrote English
      articles on campus life, culture, and international student issues, and
      produced card-news content for Instagram.
    </li>
    <li>
      <strong>English Tutor (2023–Present)</strong> — Conducted one-on-one business
      English sessions, designed teaching materials, and provided structured feedback.
    </li>
  </ul>


      {/* 이하 생략 (Leadership, Communication 섹션) */}
    </div>
  );
}
