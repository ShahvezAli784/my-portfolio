// Sourced directly from github.com/ShahvezAli784 (repo descriptions + READMEs, July 2026).
// "challenges" and "lessons" are left as placeholders — those are personal reflections
// that don't live in a README and shouldn't be invented. Everything else here is
// traceable to real repo content.

export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  problem: string;
  why: string;
  approach: string[];
  stack: string[];
  challenges: string | null;
  lessons: string | null;
  future: string[];
  github: string;
  demo: string | null;
  featured: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "techguide-ai-assistant",
    name: "TechGuide AI Assistant",
    oneLiner:
      "A troubleshooting agent that runs its own decision engine before it ever calls an LLM.",
    problem:
      "Generic device troubleshooting is either a rigid FAQ tree or an LLM call with no guardrails — the first is brittle, the second burns tokens on questions it could answer with plain logic.",
    why:
      "Built as a Python agent that separates 'understanding what the user needs' from 'writing the answer' — the two are handled by completely different layers on purpose.",
    approach: [
      "A pure-Python intent engine scans 9 device keyword groups (Android, iPhone, Mac, Windows...) and 14 task keyword groups (password, Wi-Fi, screenshots...) with zero AI calls.",
      "That engine computes a 0–100% confidence score and routes the request: generate immediately, ask which device, or ask what task — never guessing silently.",
      "Only once intent is resolved does the agent call Claude, and it does so with structured fields (not raw user text) so the prompt stays tight and the output is enforced to 4–10 numbered steps.",
      "Prompt templates live in their own module, separate from the logic engine and the thin Anthropic SDK wrapper — three concerns, three files.",
    ],
    stack: ["Python", "Anthropic SDK", "Rule-based intent engine", "CLI"],
    challenges: null,
    lessons: null,
    future: [
      "Expand the keyword/device coverage beyond the current 9 device and 14 task groups.",
      "Persist conversation state across sessions instead of a single run.",
    ],
    github: "https://github.com/ShahvezAli784/techguide-ai-assistant",
    demo: null,
    featured: true,
    year: "2026",
  },
  {
    slug: "calories-prediction-ml",
    name: "Calories Burnt Prediction",
    oneLiner:
      "An XGBoost regressor, shipped as a Streamlit app instead of left in a notebook.",
    problem:
      "Estimating calories burned during exercise is useful for fitness tracking and health monitoring, but most course projects stop at a model's R² score — not something a person could actually use.",
    why:
      "Wanted to take a regression problem all the way through the pipeline: raw data to a saved model to an interface someone could actually type numbers into.",
    approach: [
      "Merged two source datasets (exercise.csv and calories.csv) on user ID to build the training set — features include gender, age, height, weight, duration, heart rate, and body temperature.",
      "Ran the standard ML pipeline explicitly: cleaning, EDA, feature engineering, train/test split, training, evaluation, serialization.",
      "Trained an XGBoost Regressor — chosen for its accuracy on tabular data, ability to model non-linear relationships, and fast inference.",
      "Serialized the trained model and wrapped it in a Streamlit app for real-time, interactive predictions.",
    ],
    stack: ["Python", "XGBoost", "Pandas", "Streamlit", "Jupyter Notebook"],
    challenges: null,
    lessons: null,
    future: [
      "Add prediction intervals instead of a single point estimate.",
      "Let users log sessions over time rather than one-off predictions.",
    ],
    github: "https://github.com/ShahvezAli784/calories-prediction-ml",
    demo: null,
    featured: true,
    year: "2026",
  },
  {
    slug: "oscar-ai-predictor",
    name: "Oscar Award Predictor",
    oneLiner:
      "Predicting Oscar outcomes from movie metadata — because the manual version is just guessing.",
    problem:
      "Predicting award-winning movies is influenced by ratings, popularity, genre, and historical trends — factors that are easy to gesture at qualitatively and hard to weigh consistently by hand.",
    why:
      "Wanted to see how far movie metadata alone could get toward explaining historical Oscar patterns, and to practice the full applied-ML loop on a dataset with real, messy signal.",
    approach: [
      "Combined movie metadata with a historical Oscar-award dataset (the_oscar_award.csv) rather than relying on a single source.",
      "Ran preprocessing and feature engineering on both datasets before model training.",
      "Trained a classification model with Scikit-learn and serialized both the model and its engineered features separately (oscar_model.pkl, model_features.pkl).",
      "Deployed the result as an interactive Streamlit app rather than a static notebook output.",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    challenges: null,
    lessons: null,
    future: [
      "Bring in review-text sentiment as an additional feature source.",
      "Track prediction accuracy against each new award season as ground truth arrives.",
    ],
    github: "https://github.com/ShahvezAli784/oscar-ai-predictor",
    demo: null,
    featured: true,
    year: "2026",
  },
  {
    slug: "tour-travel-management",
    name: "Tour & Travel Management System",
    oneLiner:
      "A full desktop booking system — GUI, business logic, and database, no shortcuts.",
    problem:
      "Travel agencies juggling packages, hotel bookings, customer records, and payments by hand is slow and error-prone, especially without a shared system of record.",
    why:
      "The largest software-engineering project in the portfolio by scope — a chance to build a complete, multi-module desktop application backed by a real relational database rather than a script.",
    approach: [
      "Built a layered architecture: Java Swing GUI → business logic in Java → JDBC → MySQL database.",
      "Implemented full account lifecycle (registration, secure login, forgot password, profile updates, account deletion) alongside the booking features.",
      "Modeled tour packages, hotel bookings, destinations, and payments as separate modules (BookPkg, BookHotels, Payments, Destinations, etc.) coordinated through a shared dashboard.",
      "Used a dedicated JDBC connection class (Conn.java) to centralize database access across every module.",
    ],
    stack: ["Java", "Java Swing", "JDBC", "MySQL", "NetBeans IDE"],
    challenges: null,
    lessons: null,
    future: [
      "Migrate the persistence layer to an ORM to reduce hand-written JDBC boilerplate.",
      "Add role-based access for agency staff versus customers.",
    ],
    github: "https://github.com/ShahvezAli784/TourAndTravelManagementSoftware",
    demo: null,
    featured: true,
    year: "2026",
  },
  {
    slug: "web-music-player",
    name: "Web Music Player",
    oneLiner: "An interactive browser-based music player built on plain HTML, CSS, and JavaScript.",
    problem:
      "Wanted a focused front-end project that goes deep on interaction and media APIs without a framework doing the work.",
    why:
      "A deliberately small, focused build to sharpen core front-end fundamentals — DOM manipulation, event handling, and audio playback state — without any framework overhead.",
    approach: [
      "Built entirely with vanilla HTML, CSS, and JavaScript — no framework dependency.",
      "Handles playback state, track switching, and UI feedback directly through DOM APIs.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    challenges: null,
    lessons: null,
    future: ["Add a persisted playlist and shuffle/repeat modes."],
    github: "https://github.com/ShahvezAli784/web-music-player",
    demo: null,
    featured: false,
    year: "2026",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
