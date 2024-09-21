import NodeIcon from "../assets/Node.js.png";
import PostgresSQLIcon from "../assets/PostgresSQL.png";
import MongoDBIcon from "../assets/MongoDB.png";
import ReactIcon from "../assets/React.png";
import ExpressIcon from "../assets/Express.png";
import FirebaseIcon from "../assets/Firebase.png";
import SupabaseIcon from "../assets/Supabase.png";
export const projectsData = [
  {
    title: "Taskify",
    description:
      "Taskify simplifies task organization through a Kanban board and powerful dashboards. It includes task automation and secure access.",
    keywords: [
      "Kanban Boards",
      "Cron Jobs",
      "Responsive UI",
      "Charts and Graphs",
      "Redux",
      "Email Notifications",
    ],
    techStack: [MongoDBIcon, ExpressIcon, ReactIcon, NodeIcon],
    frontendLink: "https://github.com/dev-sathya17/taskify-frontend",
    backendLink: "https://github.com/dev-sathya17/taskify-backend",
    liveLink: "https://main--taskifysmart.netlify.app/",
  },

  {
    title: "Wealth Wise",
    description:
      "Wealth Wise is a personalized finance management tool that helps users manage their income and expenses effectively. It offers automated notifications for recurring expenses and an analytics dashboard for financial insights.",
    keywords: [
      "Analytics",
      "Sequelize",
      "Email Notifications",
      "Paginated Reports",
      "Redux",
      "Charts and Graphs",
    ],
    techStack: [
      PostgresSQLIcon,
      ExpressIcon,
      ReactIcon,
      NodeIcon,
      SupabaseIcon,
    ],
    frontendLink: "https://github.com/dev-sathya17/wealthwise-frontend",
    backendLink: "https://github.com/dev-sathya17/WealthWise-backend",
    liveLink: "https://wealth-wise-finance.netlify.app/",
  },
  {
    title: "Quick Fix",
    description:
      "Quick Fix is a ticket management system that enables efficient support ticket handling. It includes real-time chat and an admin dashboard for category and user management.",
    keywords: [
      "Web Sockets",
      "Real-time chat",
      "Google OAuth",
      "Ticket Management",
      "Charts and Graphs",
      "Redux",
      "Email Notifications",
    ],
    techStack: [MongoDBIcon, ExpressIcon, ReactIcon, NodeIcon, FirebaseIcon],
    frontendLink: "https://github.com/dev-sathya17/QuickFix-frontend",
    backendLink: "https://github.com/dev-sathya17/QuickFix-backend",
    liveLink: "https://quick-fix-tickets.netlify.app/",
  },
  {
    title: "Pro-Manager",
    description:
      "Pro-Manager is a comprehensive project management tool designed for Admins, Team Leaders, and Employees. It features Kanban boards, real-time dashboards, and automated email notifications, enhancing team collaboration and productivity.",
    keywords: [
      "Kanban Boards",
      "Context API",
      "Custom Hook",
      "Dashboard Analytics",
      "Email Notifications",
      "Charts and Graphs",
    ],
    techStack: [MongoDBIcon, ExpressIcon, ReactIcon, NodeIcon],
    frontendLink:
      "https://github.com/dev-sathya17/Project-management-tool-frontend",
    backendLink:
      "https://github.com/dev-sathya17/Project-management-tool-backend",
    liveLink: "https://pro-manager-tool.netlify.app/",
  },
];
