import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  Sun,
  Moon,
  Globe,
  Database,
  Code2,
  ExternalLink,
  ArrowUp,
  Sparkles,
  Layers,
  Zap,
  Award,
  FolderOpen,
  Menu,
  X,
  Download,
  Quote,
  Rocket,
  Handshake,
  CheckCircle2,
  FileCode,
  MessageSquare,
  Send,
  GraduationCap,
  Languages,
  Briefcase,
  Heart,
  Lightbulb,
  Coffee,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import profilePhoto from "@/imports/462622556_2971524512998750_2784159991432789406_n__1_.jpg";
import cvPdf from "@/imports/Mrwan-Mohammed-CV.pdf";

const SKILLS = [
  { name: "C#", level: 90 },
  { name: "ASP.NET Core", level: 88 },
  { name: "SQL Server", level: 85 },
  { name: "Entity Framework Core", level: 82 },
  { name: "JavaScript", level: 80 },
  { name: "HTML / CSS", level: 85 },
  { name: "Git / GitHub", level: 85 },
  { name: "LINQ", level: 80 },
];

const TECH_STACK = [
  "C#", "ASP.NET Core MVC", "Web API", "SQL Server", "Entity Framework Core",
  "LINQ", "JavaScript", "HTML5", "CSS3", "Git", "GitHub", "REST APIs",
  "SOLID Principles", "OOP", "Design Patterns", "Stored Procedures",
  "Windows Forms", "Agile",
];

const SERVICES = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Full-stack web applications with ASP.NET Core MVC and Web API — secure, scalable, and production-ready.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Relational database architecture with SQL Server — stored procedures, triggers, cursors, and performance optimization.",
  },
  {
    icon: Code2,
    title: "API Development",
    desc: "Clean RESTful APIs built with ASP.NET Core Web API — documented, versioned, and designed for integration.",
  },
];

const PROCESS_STEPS = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery",
    desc: "We discuss your goals, requirements, and vision to ensure a clear roadmap before any code is written.",
  },
  {
    icon: FileCode,
    step: "02",
    title: "Development",
    desc: "Iterative builds with clean architecture, regular updates, and transparent progress throughout the cycle.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Delivery",
    desc: "Thorough testing, deployment, and handoff with documentation — plus ongoing support if you need it.",
  },
];

const EXPERIENCE = [
  {
    title: "Personal Projects",
    org: "Self-directed",
    period: "2025 – 2026",
    location: "Cairo, Egypt",
    desc: "Built multiple projects including a Library Management System, an Examination Database System, and a responsive portfolio website — applying OOP, SOLID principles, and database design skills.",
  },
  {
    title: "Fullstack .NET Intern",
    org: "Information Technology Institute (ITI)",
    period: "Mar 2025 – Jul 2025",
    location: "Minya, Egypt",
    desc: "Gained solid foundation in web development using C#, ASP.NET Core, and SQL Server. Built web applications using MVC and Web API, worked on database management and API integration, and contributed to code reviews and bug fixing.",
  },
];

const PROJECT_CATEGORIES = ["All", "Full-Stack", "Database", "Frontend"];

const PROJECTS = [
  {
    id: "01",
    title: "Library Management System",
    category: "Full-Stack · Desktop Application",
    filterCategory: "Full-Stack",
    year: "2025",
    desc: "A comprehensive library management system using C# with Windows Forms and SQL Server. Features include book management, user handling, search, sales tracking, and receipt printing.",
    link: "https://github.com/MrwaN-3bdeeN/Business-Management",
    image: "photo-1521587760476-6c12a4b040da",
    tags: ["C#", "Windows Forms", "SQL Server"],
  },
  {
    id: "02",
    title: "Examination System of ITI",
    category: "Database · SQL Server",
    filterCategory: "Database",
    year: "2025",
    desc: "A full examination database system handling students, instructors, exams, courses, and grades with MCQ and True/False support. Built with stored procedures, triggers, cursors, and temporary tables.",
    link: "https://github.com/MrwaN-3bdeeN/examination-system-db",
    image: "photo-1434030216411-0b793f4b4173",
    tags: ["SQL Server", "Stored Procedures", "Database Design"],
  },
  {
    id: "03",
    title: "Adeem Portfolio Website",
    category: "Frontend · Responsive Design",
    filterCategory: "Frontend",
    year: "2025",
    desc: "A complete responsive website for a Saudi Arabian client built with HTML, CSS, and JavaScript — no frameworks. Optimized for mobile, tablet, and desktop with focus on performance and accessibility.",
    link: "https://github.com/MrwaN-3bdeeN/ADEEM",
    image: "photo-1460925895917-afdab827c52f",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
];

const TESTIMONIALS = [
  {
    name: "ITI Training Program",
    role: "Fullstack .NET Internship",
    text: "Actively contributed to code reviews, bug fixing, and the development of new features during a intensive .NET training program.",
  },
  {
    name: "Academic Team Project",
    role: "Library Management System",
    text: "Collaborated in a team environment, practicing version control, task division, and team communication to deliver a complete solution.",
  },
  {
    name: "Client Project",
    role: "Adeem Portfolio Website",
    text: "Delivered a fully responsive website optimized for all devices with clean, framework-free code and excellent performance.",
  },
];

const STATS = [
  { icon: FolderOpen, value: 7, suffix: "+", label: "Projects Completed" },
  { icon: Award, value: 1, suffix: "+", label: "Years Experience" },
  { icon: Zap, value: 3, suffix: "+", label: "Happy Clients" },
  { icon: Layers, value: 8, suffix: "+", label: "Core Skills" },
];

const EDUCATION = [
  {
    degree: "B.Sc. in Engineering",
    school: "Faculty of Engineering, Minia University",
    department: "Petrochemicals Department",
    period: "2017 – 2022",
    location: "Minya, Egypt",
  },
  {
    degree: "Fullstack .NET Internship",
    school: "Information Technology Institute (ITI)",
    department: "Web Development Using Fullstack .NET",
    period: "Mar 2025 – Jul 2025",
    location: "Minya, Egypt",
  },
];

const LANGUAGES_LIST = [
  { name: "Arabic", level: "Native", proficiency: 100 },
  { name: "English", level: "Professional", proficiency: 75 },
];

const NAV_LINKS = ["About", "Services", "Skills", "Experience", "Work", "Contact"];

const MOTION_CONFIG = { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } as const;

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const total = document.documentElement.scrollHeight - window.innerHeight;
          setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return progress;
}

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.toLowerCase());
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

function Reveal({ children, className = "", delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    let t0: number | null = null;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return count;
}

function StatCard({ icon: Icon, value, suffix, label }: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(value, 1800, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center p-6 md:p-8 group hover:bg-secondary/50 transition-colors duration-300"
    >
      <div
        className="w-9 h-9 mx-auto flex items-center justify-center border border-border mb-3 group-hover:border-accent transition-colors"
        style={{ color: "var(--accent)" }}
      >
        <Icon size={16} />
      </div>
      <div className="text-3xl md:text-4xl font-medium mb-1" style={{ fontFamily: "'DM Serif Display', serif" }}>
        {count}{suffix}
      </div>
      <div className="text-[10px] md:text-xs text-muted-foreground tracking-wide uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
        {label}
      </div>
    </motion.div>
  );
}

function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-secondary/40 py-4" aria-hidden="true">
      <div className="marquee-track">
        {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 text-xs text-muted-foreground whitespace-nowrap select-none"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <span className="w-1 h-1 rounded-full bg-accent/50" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>{name}</span>
        <span className="text-[10px] text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
          {level}%
        </span>
      </div>
      <div className="h-1 bg-border/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full will-change-transform"
          style={{ background: "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))" }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose, onNav }: {
  open: boolean;
  onClose: () => void;
  onNav: (id: string) => void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                onClick={() => onNav(link)}
                className="text-2xl tracking-tight hover:text-accent transition-colors"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {link}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.25 }}
              className="flex gap-4 mt-4"
            >
              <a
                href="https://wa.me/+201010919594"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-6 py-2.5 border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                Hire me
              </a>
              <a
                href={cvPdf}
                download
                className="text-sm px-6 py-2.5 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors inline-flex items-center gap-2"
              >
                <Download size={12} />
                CV
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let ticking = false;
    const h = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowTop(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    });
  }, []);

  const scrollUp = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={dark ? "dark" : ""} style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">

        {/* Loading Screen */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background gap-4"
            >
              <span className="text-2xl gradient-text" style={{ fontFamily: "'DM Serif Display', serif" }}>
                MA
              </span>
              <div className="w-32 h-[2px] bg-border/40 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Progress */}
        <div
          className="fixed top-0 left-0 h-[2px] z-[100] will-change-transform"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))",
          }}
        />

        {/* NAV */}
        <motion.header
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
            <button
              onClick={scrollUp}
              className="text-sm font-medium tracking-tight cursor-pointer hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Mrwan <span className="gradient-text">Abdeen</span>
            </button>

            <nav className="hidden lg:flex items-center gap-6 relative">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className={`text-xs transition-colors relative pb-1 ${
                    activeSection === link.toLowerCase()
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link}
                  {activeSection === link.toLowerCase() && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.25 }}
                onClick={() => setDark(!dark)}
                className="p-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={14} /> : <Moon size={14} />}
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/+201010919594"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs px-4 py-1.5 border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                <Sparkles size={11} />
                Hire me
              </motion.a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={14} /> : <Menu size={14} />}
              </button>
            </div>
          </div>
        </motion.header>

        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} onNav={scrollTo} />

        {/* ═══════════ HERO ═══════════ */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 max-w-6xl mx-auto px-6 md:px-12 overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-16 right-0 w-64 h-64 rounded-full opacity-[0.035] pointer-events-none" style={{ background: "radial-gradient(circle, var(--accent), transparent)" }} />
          <div className="absolute bottom-0 left-8 w-40 h-40 rounded-full opacity-[0.025] pointer-events-none" style={{ background: "radial-gradient(circle, var(--gradient-end), transparent)" }} />
          <div className="absolute top-28 right-10 opacity-[0.06] pointer-events-none hidden md:block">
            <svg width="64" height="64" viewBox="0 0 64 64">
              {[...Array(16)].map((_, i) => (
                <circle key={i} cx={(i % 4) * 20 + 2} cy={Math.floor(i / 4) * 20 + 2} r="1" fill="var(--foreground)" />
              ))}
            </svg>
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-6 items-center">
            {/* Profile */}
            <motion.div
              className="md:col-span-3 flex md:justify-start"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-1.5 rounded-full opacity-40 pointer-events-none"
                  style={{ background: "conic-gradient(from 0deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end), var(--gradient-start))" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <div
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-muted"
                  style={{ boxShadow: "0 0 0 3px var(--background), 0 0 50px rgba(200,68,42,0.06)" }}
                >
                  <ImageWithFallback src={profilePhoto} alt="Mrwan Abdeen" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full float-anim bg-accent" />
                <div className="absolute -bottom-1 -left-2 w-2 h-2 rounded-full float-anim-delayed opacity-50" style={{ backgroundColor: "var(--gradient-end)" }} />
              </div>
            </motion.div>

            {/* Text */}
            <div className="md:col-span-9">
              <motion.p
                className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3"
                style={{ fontFamily: "'DM Mono', monospace" }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                Full-Stack .NET Developer — Cairo, Egypt
              </motion.p>
              <motion.h1
                className="text-[2.75rem] md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-5"
                style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.1 }}
              >
                Mrwan
                <br />
                <span className="italic gradient-text">Abdeen.</span>
              </motion.h1>
              <motion.p
                className="text-sm md:text-[15px] text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                ITI graduate with hands-on experience in C#, ASP.NET Core, and SQL Server.
                I build full-stack web applications and backend systems — from database
                architecture to polished user interfaces.
              </motion.p>

              <motion.div
                className="mt-7 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="mailto:mrwanabdeen.me@gmail.com" className="inline-flex items-center gap-2 text-xs px-5 py-2.5 bg-foreground text-primary-foreground hover:opacity-80 transition-opacity">
                  <Mail size={12} /> Get in touch
                </motion.a>
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="https://github.com/MrwaN-3bdeeN" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs px-5 py-2.5 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                  <Github size={12} /> GitHub
                </motion.a>
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href={cvPdf} download className="inline-flex items-center gap-2 text-xs px-5 py-2.5 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                  <Download size={11} /> Download CV
                </motion.a>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-14 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <motion.div className="w-6 h-px bg-accent" animate={{ width: [24, 40, 24] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
            <span className="text-[11px] text-muted-foreground tracking-wide" style={{ fontFamily: "'DM Mono', monospace" }}>
              Scroll to explore
            </span>
          </motion.div>
        </section>

        {/* ═══════════ ABOUT ═══════════ */}
        <div className="section-divider" />
        <section id="about" className="border-t border-border bg-secondary relative">
          <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-28">
            <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
              <Reveal className="md:col-span-6">
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-5" style={{ fontFamily: "'DM Mono', monospace" }}>
                  About
                </p>
                <h2 className="text-3xl md:text-4xl leading-tight mb-7" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                  Code is craft, <span className="italic gradient-text">not just output.</span>
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    I'm Mrwan — a .NET developer based in Cairo, and an ITI graduate with practical experience in C#, ASP.NET Core MVC, Web API, Entity Framework Core, and SQL Server.
                  </p>
                  <p>
                    Strong knowledge of OOP, SOLID, and Design Patterns with hands-on experience in RESTful APIs, authentication &amp; authorization, and database design. I believe good software starts with a clean architecture and well-thought-out data model.
                  </p>
                  <p>
                    I write code that's readable, maintainable, and built to last beyond the next deadline.
                  </p>
                </div>
                <div className="mt-7">
                  <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href={cvPdf} download className="inline-flex items-center gap-2 text-xs px-5 py-2.5 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                    <Download size={11} /> Download CV
                  </motion.a>
                </div>
              </Reveal>
              <Reveal className="md:col-span-6 overflow-hidden bg-muted card-glow gradient-border" delay={0.12}>
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&auto=format"
                  alt="Developer workspace"
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════ STATS ═══════════ */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-18">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-l border-t border-border">
              {STATS.map((stat) => (
                <div key={stat.label} className="border-r border-b border-border">
                  <StatCard {...stat} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ SERVICES ═══════════ */}
        <section id="services" className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
            <Reveal>
              <h2 className="text-2xl md:text-4xl mb-10 md:mb-14" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                What I Do
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-0 border-l border-t border-border">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={i * 0.08}>
                    <motion.div
                      className="border-r border-border p-7 md:p-9 group hover:bg-secondary transition-all duration-300 cursor-default h-full"
                      whileHover={{ y: -3 }}
                    >
                      <div className="w-9 h-9 flex items-center justify-center border border-border mb-5 group-hover:border-accent transition-colors" style={{ color: "var(--accent)" }}>
                        <Icon size={16} />
                      </div>
                      <h3 className="text-base mb-2.5" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                        {s.title}
                      </h3>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ PROCESS ═══════════ */}
        <section className="border-t border-border bg-secondary">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-28">
            <Reveal>
              <h2 className="text-2xl md:text-4xl mb-10 md:mb-14" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                How I Work
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.step} delay={i * 0.1}>
                    <div className="group">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-medium px-2 py-0.5 border border-border text-muted-foreground group-hover:border-accent group-hover:text-accent transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
                          {step.step}
                        </span>
                        {i < PROCESS_STEPS.length - 1 && <div className="hidden md:block flex-1 h-px bg-border" />}
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center mb-3" style={{ color: "var(--accent)" }}>
                        <Icon size={18} />
                      </div>
                      <h3 className="text-base mb-2" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                        {step.title}
                      </h3>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ TECH MARQUEE ═══════════ */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12 pt-10">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Technologies I Work With
                </span>
              </div>
            </Reveal>
          </div>
          <Marquee />
        </section>

        {/* ═══════════ FUN FACTS ═══════════ */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                  A bit about me
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl mb-10" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                Fun Facts
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                { icon: Coffee, text: "I debug best with a cup of coffee and a quiet room." },
                { icon: Lightbulb, text: "I believe every good app starts with a well-designed database schema." },
                { icon: Heart, text: "I'm passionate about building tools that make people's daily work easier." },
              ].map((fact, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <motion.div className="flex items-start gap-3 p-5 border border-border hover:bg-secondary/50 transition-colors" whileHover={{ y: -2 }}>
                    <fact.icon size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{fact.text}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ SKILLS ═══════════ */}
        <section id="skills" className="border-t border-border bg-secondary">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-28">
            <Reveal>
              <h2 className="text-2xl md:text-4xl mb-10 md:mb-12" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                Skills
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-x-14 gap-y-5 max-w-3xl">
              {SKILLS.map((skill, i) => (
                <Reveal key={skill.name} delay={i * 0.04}>
                  <SkillBar name={skill.name} level={skill.level} delay={i * 0.08} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ EXPERIENCE ═══════════ */}
        <section id="experience" className="border-t border-border relative">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.025] pointer-events-none" style={{ background: "radial-gradient(circle, var(--accent), transparent)" }} />
          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-28">
            <Reveal>
              <h2 className="text-2xl md:text-4xl mb-10 md:mb-14" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                Experience
              </h2>
            </Reveal>
            <div className="max-w-2xl">
              <div className="relative pl-10">
                <div className="absolute left-[0.4rem] top-2 bottom-2 w-px bg-accent/20" />
                <div className="space-y-10">
                  {EXPERIENCE.map((exp, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                      <div className="relative group">
                        <div className="absolute left-[-2rem] top-1 w-3 h-3 rounded-full border-2 bg-accent" style={{ borderColor: "var(--background)", boxShadow: "0 0 0 2px rgba(200,68,42,0.12)" }} />
                        <div className="flex flex-wrap items-baseline gap-2 mb-1">
                          <h3 className="text-sm font-medium">{exp.title}</h3>
                          <span className="text-xs text-muted-foreground">· {exp.org}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[11px] text-accent" style={{ fontFamily: "'DM Mono', monospace" }}>
                            {exp.period}
                          </span>
                          {exp.location && (
                            <span className="text-[11px] text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                              · {exp.location}
                            </span>
                          )}
                        </div>
                        <p className="text-[13px] text-muted-foreground leading-relaxed">{exp.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ EDUCATION ═══════════ */}
        <div className="section-divider" />
        <section className="border-t border-border bg-secondary">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-28">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Education
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl mb-10 md:mb-12" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                Background
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {EDUCATION.map((edu, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <motion.div className="p-6 border border-border bg-card group hover:bg-secondary/70 transition-all duration-300" whileHover={{ y: -3 }}>
                    <GraduationCap size={18} className="mb-3 text-accent" />
                    <h3 className="text-sm font-medium mb-1">{edu.degree}</h3>
                    <p className="text-[13px] text-muted-foreground mb-1">{edu.school}</p>
                    <p className="text-[12px] text-muted-foreground/70 mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {edu.department}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-accent" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {edu.period}
                      </span>
                      <span className="text-[11px] text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                        · {edu.location}
                      </span>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ LANGUAGES ═══════════ */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-28">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Languages
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl mb-10 md:mb-12" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                Communication
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8 max-w-xl">
              {LANGUAGES_LIST.map((lang, i) => (
                <Reveal key={lang.name} delay={i * 0.1}>
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <Languages size={14} className="text-accent" />
                        <span className="text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>{lang.name}</span>
                      </div>
                      <span className="text-[11px] text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-1 bg-border/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full will-change-transform"
                        style={{ background: "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ TESTIMONIALS ═══════════ */}
        <section className="border-t border-border bg-secondary">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-28">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Feedback
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl mb-10 md:mb-12" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                What People Say
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <motion.div className="p-7 border border-border bg-card group hover:bg-secondary/70 transition-all duration-300 h-full flex flex-col" whileHover={{ y: -3 }}>
                    <Quote size={18} className="mb-3 text-accent/30" />
                    <p className="text-[13px] text-muted-foreground leading-relaxed flex-1 mb-5">
                      "{t.text}"
                    </p>
                    <div className="border-t border-border pt-3">
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-[11px] text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {t.role}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PROJECTS ═══════════ */}
        <section id="work" className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-8">
                <h2 className="text-2xl md:text-4xl" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                  Selected Projects
                </h2>
                <a href="https://github.com/MrwaN-3bdeeN" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
                  <Github size={11} /> View all <ExternalLink size={9} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
                {PROJECT_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setProjectFilter(cat)}
                    className={`text-[11px] px-3 py-1.5 border whitespace-nowrap transition-all duration-200 ${
                      projectFilter === cat
                        ? "border-accent text-accent bg-accent/5"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                    }`}
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="space-y-0">
              <AnimatePresence mode="wait">
                {PROJECTS.filter((p) => projectFilter === "All" || p.filterCategory === projectFilter).map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border-t border-border last:border-b block"
                    >
                      <div className="py-6 md:py-8 grid md:grid-cols-12 gap-4 md:gap-5 items-start">
                        <div className="md:col-span-1">
                          <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="md:col-span-3 overflow-hidden bg-muted relative gradient-border">
                          <img
                            src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop&auto=format`}
                            alt={project.title}
                            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                            width="600"
                            height="400"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="md:col-span-6">
                          <p className="text-[11px] text-muted-foreground mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                            {project.category}
                          </p>
                          <h3 className="text-lg md:text-xl mb-2 group-hover:text-accent transition-colors duration-300" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                            {project.title}
                          </h3>
                          <p className="text-[13px] text-muted-foreground leading-relaxed mb-3 max-w-md">
                            {project.desc}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span key={tag} className="text-[10px] px-1.5 py-0.5 border border-border text-muted-foreground group-hover:border-accent/30 transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="md:col-span-2 flex md:flex-col md:items-end md:justify-between h-full">
                          <span className="text-[11px] text-muted-foreground hidden md:block" style={{ fontFamily: "'DM Mono', monospace" }}>
                            {project.year}
                          </span>
                          <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors mt-auto" />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA BANNER ═══════════ */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-18">
            <Reveal>
              <div className="relative p-8 md:p-12 border border-border overflow-hidden text-center">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, var(--accent), transparent 70%)" }} />
                <Rocket size={20} className="mx-auto mb-3 text-accent" />
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                  Ready to start your project?
                </h3>
                <p className="text-[13px] text-muted-foreground max-w-md mx-auto mb-7 leading-relaxed">
                  Let's turn your idea into a real product. I'm available for freelance work and open to exciting opportunities.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="https://wa.me/+201010919594" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs px-5 py-2.5 bg-foreground text-primary-foreground hover:opacity-80 transition-opacity">
                    <Handshake size={12} /> Let's Talk
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="mailto:mrwanabdeen.me@gmail.com" className="inline-flex items-center gap-2 text-xs px-5 py-2.5 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                    <Mail size={12} /> Email Me
                  </motion.a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ CONTACT ═══════════ */}
        <div className="section-divider" />
        <section id="contact" className="border-t border-border relative overflow-hidden" style={{ backgroundColor: "#111110" }}>
          <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full opacity-[0.05] pointer-events-none" style={{ background: "radial-gradient(circle, var(--accent), transparent)" }} />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full opacity-[0.03] pointer-events-none" style={{ background: "radial-gradient(circle, var(--gradient-end), transparent)" }} />

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-8">
                <Reveal>
                  <p className="text-[11px] tracking-[0.2em] uppercase mb-5 text-accent" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Let's work together
                  </p>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[0.95] text-white mb-7" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                    Have a project
                    <br />
                    <span className="italic gradient-text">in mind?</span>
                  </h2>
                  <p className="text-[13px] text-gray-400 max-w-md leading-relaxed mb-8">
                    I'm available for freelance work and open to full-time opportunities.
                    If you have something worth building, reach out — I'd love to hear about it.
                  </p>
                  <motion.a href="https://wa.me/+201010919594" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium text-white border border-white/20 hover:border-white hover:bg-white hover:text-foreground transition-all duration-300" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <MessageCircle size={14} /> Chat on WhatsApp
                  </motion.a>
                </Reveal>
              </div>

              <div className="md:col-span-4 flex flex-wrap md:flex-col md:justify-end md:items-end gap-x-6 gap-y-3">
                {[
                  { icon: Github, href: "https://github.com/MrwaN-3bdeeN", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/marwan-3bdeen/", label: "LinkedIn" },
                  { icon: Briefcase, href: "https://www.upwork.com/freelancers/~01a440e42558899a57", label: "Upwork" },
                  { icon: MessageCircle, href: "https://wa.me/+201010919594", label: "WhatsApp" },
                  { icon: Send, href: "https://t.me/+201010919594", label: "Telegram" },
                ].map((s, i) => (
                  <Reveal key={s.label} delay={0.15 + i * 0.08}>
                    <motion.a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors whitespace-nowrap" whileHover={{ x: -3 }}>
                      <s.icon size={13} /> <span>{s.label}</span> <ExternalLink size={9} />
                    </motion.a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-7 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-gray-600" style={{ fontFamily: "'DM Mono', monospace" }}>
              © 2025 Mrwan Abdeen
            </span>
            <span className="text-[11px] text-gray-600" style={{ fontFamily: "'DM Mono', monospace" }}>
              Cairo, Egypt
            </span>
          </div>
        </section>

        {/* Back to Top */}
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollUp}
              className="fixed bottom-7 right-7 z-50 w-10 h-10 flex items-center justify-center bg-foreground text-primary-foreground hover:opacity-80 transition-opacity shadow-lg"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
