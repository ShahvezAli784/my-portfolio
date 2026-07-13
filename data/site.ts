// Central place for identity/content that isn't project data.
// Anything marked PLACEHOLDER was not verifiable from GitHub/LinkedIn at build time
// (LinkedIn sits behind a login wall and no resume/portfolio file was supplied).
// Replace these with real copy whenever you have it — nothing else needs to change.

export const site = {
  name: "Shahvez Memon",
  role: "Aspiring AI/ML Engineer & Software Developer",
  location: "Sindh, Pakistan", // PLACEHOLDER — confirm exact city if you want it public
  email: "shahvezmemon3@gmailcom", // PLACEHOLDER — swap for your real address
  github: "https://github.com/ShahvezAli784",
  linkedin: "https://www.linkedin.com/in/shahvez-memon-528a18405",
  resumeFile: "/documents/Resume.pdf",

  tagline: "I build software that learns.",
  subTagline:
    "I'm an AI/ML engineer and software developer who likes finishing what most people leave as a tutorial — full systems, from a trained model down to the database schema underneath it.",

  // Short narrative used on the About page. Structure follows the brief
  // (why CS, how I discovered AI, how I learn, how I solve problems, what
  // motivates me, current goals) — sentences are left as clearly marked
  // placeholders so you can drop in your real story without restructuring.
  about: {
  whyCS:
    "My journey into Computer Science started with a curiosity about how software powers the technology we use every day. As I learned programming, I realized I enjoyed solving problems through code and building applications from the ground up. What began as learning a programming language gradually became a genuine interest in creating software that is both useful and meaningful.",

  discoveringAI:
    "While exploring different areas of software development, I found myself drawn to Artificial Intelligence because it combines mathematics, programming, and problem solving. I wasn't satisfied with training models inside notebooks—I wanted to build complete applications that people could actually interact with. That mindset led me to develop projects like Credit Card Fraud Detection and the Oscar Award Predictor, where machine learning became part of a full software solution rather than the final destination.",

  howYouLearn:
    "I learn best by building. I usually start by understanding the fundamentals through official documentation, online courses, and technical articles before applying those concepts in real projects. Every project becomes an opportunity to explore new technologies, improve my coding practices, and strengthen my understanding through practical experience. Whenever I encounter something unfamiliar, I enjoy researching, experimenting, and iterating until I fully understand how it works.",

  howYouSolveProblems:
    "I approach problems by first understanding the complete workflow before writing code. Whether I'm building a machine learning system or a web application, I break the problem into smaller components, develop a working solution, and refine it through testing and iteration. I enjoy taking projects from raw data and model development all the way to an interactive application because I believe great software is defined by both intelligent functionality and a good user experience.",

  motivation:
    "What motivates me most is seeing an idea evolve into something real that people can use. Every new project teaches me a different way of thinking, whether it's improving a machine learning model, designing a better interface, or writing cleaner code. The constant opportunity to learn, build, and solve meaningful problems is what keeps me excited about software engineering and artificial intelligence.",

  currentGoals:
    "Right now, I'm focused on strengthening my skills in Machine Learning, Deep Learning, Natural Language Processing, and modern software engineering. Alongside expanding my knowledge of backend development and cloud technologies, I'm building practical projects that demonstrate both technical depth and real-world impact. My immediate goal is to secure an AI/ML internship where I can contribute to meaningful projects while continuing to grow as an engineer."
},

  socialProof: {
    // Filled in once real numbers are available; kept empty rather than invented.
    yearsBuilding: null as number | null,
    projectsShipped: null as number | null,
  },
};

export const nav = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];
