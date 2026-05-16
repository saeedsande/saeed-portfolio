import {
  FaReact,
  FaMobileAlt,
  FaPython,
  FaFirebase,
} from "react-icons/fa";

export const projects = [
  {
    title: "VETMEDS",

    subtitle: "AI-Powered Veterinary Care Platform",

    description:
      "An intelligent veterinary healthcare platform designed to help pet owners through AI-based symptom analysis, doctor discovery, emergency assistance, and healthcare management.",

    problem:
      "Pet owners often struggle to get immediate healthcare support and guidance for their pets during emergencies.",

    features: [
      "AI symptom analysis",
      "Emergency SOS",
      "Doctor locator",
      "Pet health records",
      "Responsive UI",
      "Real-time support",
    ],

    technologies: [
      {
        name: "React.js",
        icon: <FaReact />,
      },

      {
        name: "Python",
        icon: <FaPython />,
      },

      {
        name: "Firebase",
        icon: <FaFirebase />,
      },

      {
        name: "REST APIs",
        icon: "⚡",
      },
    ],

    contribution:
      "Led frontend development, implemented responsive UI components, integrated APIs, and coordinated development activities.",

    gradient: "from-cyan-400 to-blue-500",

    pdf: "/reports/vetmeds-report.pdf",

    github: "https://github.com/yourgithub/vetmeds",

    demo: "https://your-demo-link.com",
  },

  {
    title: "MeterRide",

    subtitle: "Ride-Hailing Mobile Application",

    description:
      "A cross-platform ride-hailing mobile application with live GPS tracking and real-time meter-based pricing.",

    problem:
      "Traditional ride-booking systems lack transparent pricing and optimized live ride tracking.",

    features: [
      "Real-time pricing",
      "GPS live tracking",
      "Interactive maps",
      "Cross-platform support",
      "Modern mobile UI",
    ],

    technologies: [
      {
        name: "React Native",
        icon: <FaMobileAlt />,
      },

      {
        name: "Firebase",
        icon: <FaFirebase />,
      },

      {
        name: "Google Maps API",
        icon: "🗺️",
      },

      {
        name: "JavaScript",
        icon: "⚡",
      },
    ],

    contribution:
      "Developed mobile UI screens, integrated live maps functionality, and optimized application performance.",

    gradient: "from-purple-400 to-pink-500",

    pdf: "/reports/meterride-report.pdf",

    github: "https://github.com/yourgithub/meterride",

    demo: "https://your-demo-link.com",
  },
];