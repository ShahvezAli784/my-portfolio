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
  metrics?: ProjectMetrics;
};

export type ProjectMetrics = {
  overview?: {
    model?: string;
    architecture?: string;
    deployment?: string;
    readiness?: string;
  };
  performance?: {
    mae?: string;
    rmse?: string;
    r2?: string;
    accuracy?: string;
    precision?: string;
    recall?: string;
    f1?: string;
    rocAuc?: string;
    prAuc?: string;
  };
  engineering?: string[];
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
    "A production-ready machine learning regression system with modular pipelines, FastAPI deployment, and an interactive Streamlit interface.",

  problem:
    "Most beginner ML projects end after training a model in a notebook. This project demonstrates how to build, package, and serve a complete regression system that users and applications can interact with.",

  why:
    "Built to practice the complete ML engineering workflow—from data preprocessing and feature engineering through model deployment—using production-oriented software architecture rather than notebook-centric code.",

  approach: [
    "Built a modular machine learning pipeline that separates data preprocessing, feature engineering, model training, evaluation, and inference into reusable components.",
    "Merged exercise and calorie datasets, engineered model-ready features, and trained an XGBoost regressor achieving MAE 1.22, RMSE 1.75, and R² 0.999 on held-out data.",
    "Packaged the trained model behind a FastAPI REST API with health-check and OpenAPI (Swagger/ReDoc) documentation while also providing a Streamlit interface for interactive predictions.",
    "Implemented structured logging, centralized configuration, model serialization, and a scalable project layout to mirror production ML application design.",
  ],

  stack: [
    "Python",
    "XGBoost",
    "Scikit-learn",
    "FastAPI",
    "Streamlit",
    "Pandas",
    "NumPy",
    "Pydantic",
    "Uvicorn",
    "Matplotlib",
    "Seaborn",
  ],

  challenges: null,

  lessons: null,

  future: [
    "Containerize the application with Docker.",
    "Add MLflow experiment tracking and model versioning.",
    "Implement CI/CD with GitHub Actions.",
    "Deploy to a cloud platform with automated monitoring.",
  ],

  github: "https://github.com/ShahvezAli784/calories-prediction-ml",

  demo: null,

  featured: true,

  year: "2026",

  metrics: {
    overview: {
      model: "XGBoost Regressor",
      architecture: "Modular Machine Learning Pipeline",
      deployment: "FastAPI + Streamlit",
      readiness: "Production Ready",
    },
    performance: {
      mae: "1.22",
      rmse: "1.75",
      r2: "0.9992",
    },
    engineering: [
      "Feature Engineering Pipeline",
      "FastAPI REST API",
      "Interactive Streamlit Interface",
      "Structured Logging",
      "Model Serialization",
      "Modular Project Architecture",
    ],
  },
},
  {
  slug: "oscar-ai-predictor",

  name: "Oscar AI Predictor",

  oneLiner:
    "A production-oriented machine learning classification system that predicts Oscar winners using engineered movie metadata, experiment tracking, and containerized deployment.",

  problem:
    "Award outcomes are influenced by many interacting factors—including ratings, reviews, financial performance, genre, and historical trends—which makes manual prediction inconsistent and difficult to quantify.",

  why:
    "Built to explore an end-to-end classification workflow on a real-world, imbalanced dataset while emphasizing reproducible ML engineering practices such as modular pipelines, experiment tracking, deployment, and containerization.",

  approach: [
    "Integrated IMDb movie metadata with historical Academy Award records before applying preprocessing, feature engineering, numerical transformations, and categorical encoding.",
    "Engineered numerical and categorical features including ROI, logarithmic transformations, review statistics, genre, language, country, and content-rating encodings.",
    "Trained a Random Forest classifier with MLflow experiment tracking, achieving 69.5% accuracy, 72.6% ROC-AUC, and 49.0% PR-AUC while handling an imbalanced target.",
    "Deployed the trained model through both a FastAPI inference service and a Streamlit application, packaged inside a Docker container with centralized configuration, logging, and custom exception handling.",
  ],

  stack: [
    "Python",
    "Scikit-learn",
    "Random Forest",
    "MLflow",
    "FastAPI",
    "Docker",
    "Streamlit",
    "Pandas",
    "NumPy",
    "Pydantic",
    "Uvicorn",
  ],

  challenges: null,

  lessons: null,

  future: [
    "Integrate SHAP explainability.",
    "Add MLflow Model Registry.",
    "Automate CI/CD and cloud deployment.",
    "Implement model monitoring and automated retraining.",
  ],

  github: "https://github.com/ShahvezAli784/oscar-ai-predictor",

  demo: null,

  featured: true,

  year: "2026",

  metrics: {
    overview: {
      model: "Random Forest Classifier",
      architecture: "End-to-End Machine Learning Pipeline",
      deployment: "FastAPI + Docker + Streamlit",
      readiness: "Production Ready",
    },
    performance: {
      accuracy: "69.49%",
      precision: "53.52%",
      recall: "54.13%",
      f1: "53.82%",
      rocAuc: "72.56%",
      prAuc: "49.01%",
    },
    engineering: [
      "Feature Engineering Pipeline",
      "MLflow Experiment Tracking",
      "FastAPI REST API",
      "Docker Containerization",
      "Model Serialization",
      "Structured Logging",
      "Configuration Management",
      "Interactive Streamlit Interface",
    ],
  },
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
