export type ExperienceEntry = {
  title: string;
  organization: string;
  duration: string;
  type: "Hackathon" | "Leadership" | "Volunteer" | "Academic" | "Freelance" | "Internship";
  description: string;
};

export const experience: ExperienceEntry[] = [
    {
    title: "Machine Learning Intern",
    organization: "FlyRank AI",
    duration: "June 2026 – Present",
    type : "Internship",
    description:
      "Currently interning at FlyRank AI as a Machine Learning Intern, focusing on machine learning concepts, model development, and AI-powered applications.",
  },
  {
    title: "AI/ML Hackathon Participant",
    organization: "IBA Karachi",
    duration: "2026",
    type: "Hackathon",
    description:
      "Selected to participate in an AI/ML Hackathon where I collaborated with other participants to develop innovative machine learning solutions under time constraints. The experience strengthened my teamwork, rapid prototyping, and practical problem-solving skills.",
  },
  {
    title: "Machine Learning Project Developer",
    organization: "Academic & Personal Projects",
    duration: "2025 – Present",
    type: "Academic",
    description:
      "Designed and developed end-to-end machine learning applications including Credit Card Fraud Detection, Oscar Award Prediction, and other data-driven projects. My focus has been on building complete solutions by combining data preprocessing, model development, and interactive user interfaces.",
  },
  {
    title: "Software Development Projects",
    organization: "University Coursework",
    duration: "2024 – Present",
    type: "Academic",
    description:
      "Built multiple software engineering projects including a Java-based Travel Management System, a Music Player, and several web applications. These projects strengthened my understanding of object-oriented programming, database management, frontend development, and software architecture.",
  },
  {
    title: "Continuous Technical Learning",
    organization: "Self-Directed Learning",
    duration: "2024 – Present",
    type: "Academic",
    description:
      "Actively expanding my knowledge through online courses, official documentation, and hands-on projects in Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, Data Science, and modern software development practices.",
  },
];