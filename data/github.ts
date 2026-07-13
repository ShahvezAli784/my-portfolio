// Snapshot pulled from api.github.com/users/ShahvezAli784/repos, July 2026.
// Re-run the same fetch whenever you want this refreshed — nothing here is invented.

export type RepoSummary = {
  name: string;
  description: string | null;
  language: string | null;
  url: string;
  pushedAt: string;
};

export const repos: RepoSummary[] = [
  {
    name: "techguide-ai-assistant",
    description: "AI-powered device troubleshooting assistant built with Python.",
    language: "Python",
    url: "https://github.com/ShahvezAli784/techguide-ai-assistant",
    pushedAt: "2026-06-21T17:51:10Z",
  },
  {
    name: "oscar-ai-predictor",
    description: "Predicts Academy Award winners using machine learning and movie metadata.",
    language: "Jupyter Notebook",
    url: "https://github.com/ShahvezAli784/oscar-ai-predictor",
    pushedAt: "2026-06-21T18:04:04Z",
  },
  {
    name: "-flyrank-machine-learning",
    description: null,
    language: "Jupyter Notebook",
    url: "https://github.com/ShahvezAli784/-flyrank-machine-learning",
    pushedAt: "2026-07-10T22:58:23Z",
  },
  {
    name: "calories-prediction-ml",
    description: "Streamlit web app predicting calories burned using an XGBoost model.",
    language: "Jupyter Notebook",
    url: "https://github.com/ShahvezAli784/calories-prediction-ml",
    pushedAt: "2026-07-12T22:11:14Z",
  },
  {
    name: "TourAndTravelManagementSoftware",
    description: "Java Swing desktop app for managing travel bookings and customer details, backed by MySQL.",
    language: "Java",
    url: "https://github.com/ShahvezAli784/TourAndTravelManagementSoftware",
    pushedAt: "2026-07-12T22:13:32Z",
  },
  {
    name: "web-music-player",
    description: "Interactive web-based music player built with HTML, CSS & JavaScript.",
    language: "JavaScript",
    url: "https://github.com/ShahvezAli784/web-music-player",
    pushedAt: "2026-03-13T17:21:05Z",
  },
];

// Simple per-repo primary-language tally (not byte-weighted, but real).
export const languageTally: { language: string; count: number }[] = [
  { language: "Jupyter Notebook", count: 3 },
  { language: "Java", count: 1 },
  { language: "Python", count: 1 },
  { language: "JavaScript", count: 1 },
];

export const githubUsername = "ShahvezAli784";
