import { motion } from 'motion/react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const sections = [
    'Home',
    'About',
    'Photography',
    'Web Design',
    'Web Development',
    'Video',
    'Editorial',
    'Extra'
  ];

  return (
    <nav
  className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-sm border-b border-[var(--color-border)]"
>
  <div
    className="max-w-7xl mx-auto flex items-center justify-between"
    style={{ padding: '36px 24px' }} // 전역 padding 무시
  >
    <button
      onClick={() => onNavigate('Home')}
      className="text-base tracking-wider cursor-pointer"
      style={{ fontSize: '16px', letterSpacing: '0.08em' }}
    >
      EUNGYEOL KIM
    </button>

    <div className="flex gap-8" style={{ marginLeft: '32px' }}>
      {sections.map((section) => (
        <button
          key={section}
          type="button"
          onClick={() => onNavigate(section)}
          style={{ fontSize: '16px' }}
          className={`relative transition-opacity ${
            activeSection === section
              ? 'opacity-100'
              : 'opacity-40 hover:opacity-70'
          }`}
        >
          {section}
        </button>
      ))}
    </div>
  </div>
</nav>

  );
}
