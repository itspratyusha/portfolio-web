export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const personal = {
  name: "Pratyusha Shrestha",
  firstName: "Pratyusha",
  lastName: "Shrestha",
  role: "Frontend Developer",
  phone: "+977 9861798173",
  email: "iampratsa@gmail.com",
  address: "Hadigaun-5, Kathmandu, Nepal",
  github: "https://github.com/itspratyusha",
  githubHandle: "github.com/itspratyusha",
  resumeUrl: "/resume.pdf",
};

export const about = [
  "I'm a frontend developer from Kathmandu, Nepal, passionate about building clean, responsive, and user-friendly web interfaces.",
  "I work with modern JavaScript tooling — React, Next.js, and Bootstrap — and enjoy turning designs into functional products that work well on every screen size.",
];

export const education = {
  degree: "B.Sc. CSIT (Bachelor of Science in Computer Science and Information Technology)",
  school: "Academia International College",
  period: "2022 — Present",
};

export const skillGroups = [
  {
    title: "Languages",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "API & Data",
    skills: ["REST API Integration", "JSON", "Fetch API"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Vercel"],
  },
  {
    title: "Concepts",
    skills: [
      "Responsive Design",
      "Component-Based Architecture",
      "Version Control",
    ],
  },
];

export const projects = [
  {
    title: "E-commerce Site",
    description:
      "A fully responsive e-commerce application with dynamic product listings fetched from a public REST API, category filtering, and product detail pages. Includes a functional shopping cart with add/remove items and quantity management using React state.",
    tech: ["Next.js", "React.js", "Bootstrap", "REST API", "Vercel"],
    link: "https://next-ecom-pro1.vercel.app",
  },
  {
    title: "News Portal Website",
    status: "In Progress",
    description:
      "A news portal that uses a Next.js API Route to securely fetch news from the GNews API. Uses server-side API handling to protect API keys and support Vercel deployment.",
    tech: ["Next.js", "React.js", "Bootstrap", "GNews API", "Vercel"],
    link: "https://next-news-pro2.vercel.app",
  },
  {
    title: "Responsive Website UI Collection",
    description:
      "A collection of responsive website interfaces built as UI practice projects, including Foodmandu, Savora Restaurant, Nepal Wanders, and Broadway Infosys.",
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    link: "https://github.com/itspratyusha",
  },
  {
    title: "Burger Ordering App",
    subtitle: "Figma Design",
    description:
      "A complete mobile burger ordering application design with Home, Menu, Burger Details, Cart, and Checkout screens. Focused on modern UI principles, typography, reusable components, and interactive prototypes.",
    tech: ["Figma", "UI Design", "Prototyping"],
    isExternal: true,
  },
];