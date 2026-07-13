export type Certification = {
  name: string;
  organization: string;
  issueDate: string;
  credentialUrl?: string;
  logo?: string;
  featured?: boolean;
};

export const certifications: Certification[] = [
  {
    name: "Google AI Essentials Specialization",
    organization: "Google",
    issueDate: "June 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/JNVH76NPFA9Y?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
  },
  {
    name: "Google Prompting Essentials V1",
    organization: "Google",
    issueDate: "July 2026",
    credentialUrl: "https://www.credly.com/org/coursera/badge/google-prompting-essentials-v1",
  },
  {
    name: "Create Your First Gemini Enterprise Application",
    organization: "Google",
    issueDate: "June 2026",
    credentialUrl: "https://www.credly.com/users/shahvez-memon-mahmood/edit/badges/credly",
  },
  {
    name: "AI Engineer Certification",
    organization: "OneRoadmap",
    issueDate: "June 2026",
    credentialUrl: "https://www.oneroadmap.io/skills/ai/certificate/CERT-5DD785AE",
  },
  {
    name: "Intermediate Machine Learning",
    organization: "Kaggle",
    issueDate: "April 2026",
    credentialUrl: "https://www.kaggle.com/learn/certification/shahvezmemonmahmood/intermediate-machine-learning",
  },
  {
    name: "Introduction to Deep Learning",
    organization: "Kaggle",
    issueDate: "April 2026",
    credentialUrl: "https://www.kaggle.com/learn/certification/shahvezmemonmahmood/intro-to-deep-learning",
  },
];