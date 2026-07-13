export type Education = {
  institution: string;
  degree: string;
  duration: string;
  coursework: string[];
  achievements: string[];
  interests: string[];
};

export const education: Education = {
  institution: "Sukkur IBA University",
  degree: "Bachelor of Science in Computer Science",
  duration: "2023 – 2027 (Expected)",

  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Systems",
    "Operating Systems",
    "Computer Networks",
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineering",
    "Linear Algebra",
    "Probability & Statistics",
    "Calculus",
    "Data Science",
  ],

  achievements: [
    "Actively building AI/ML and full-stack software projects.",
    "Selected participant for AI/ML Hackathon at IBA Karachi.",
    "Continuously expanding expertise through hands-on projects and technical certifications.",
  ],

  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Deep Learning",
    "Computer Vision",
    "Data Science",
    "Backend Development",
    "Cloud Computing",
    "Software Architecture",
  ],
};