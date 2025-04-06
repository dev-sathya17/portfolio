import { projectsData } from "./projects";
import { professionalSummary } from "./professionalSummary";

const parseDate = (str) => {
  const [monthStr, year] = str.split(" ");
  const month = new Date(`${monthStr} 1, ${year}`).getMonth();
  return new Date(Number(year), month);
};

const calculateActualExperience = (summary) => {
  let totalMonths = 0;

  summary.forEach((item) => {
    const [startStr, endStr] = item.duration
      .split("–")
      .map((str) => str.trim());
    const startDate = parseDate(startStr);
    const endDate =
      endStr.toLowerCase() === "present" ? new Date() : parseDate(endStr);

    const yearDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthDiff = endDate.getMonth() - startDate.getMonth();

    totalMonths += yearDiff * 12 + monthDiff + 1; // +1 to include current month
  });

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  if (remainingMonths === 0) return `${years}`;
  else if (remainingMonths > 0 && remainingMonths < 6) return `${years}+`;
  else if (remainingMonths === 6) return `${years}.5`;
  else return `${years}.5+`;
};

export const aboutData = {
  name: "Sathyanarayanan.V",
  role: [
    "Full Stack Developer.",
    "Web dev Enthusiast.",
    "React-Native App Developer.",
  ],
  about:
    "◈ I'm Sathyanarayanan. V — a full-stack developer passionate about building fast, scalable, and intuitive web applications. With hands-on experience across the full development lifecycle, I specialize in modern JavaScript frameworks (React, Node.js, TypeScript) and cloud platforms like AWS.\n◈ Whether it's crafting real-time chat systems with WebSockets, implementing secure authentication with Firebase OAuth, or optimizing backend performance with Flask and PostgreSQL — I thrive on solving problems that matter.\n◈ I love collaborating in Agile teams, turning ideas into impact, and continuously evolving as a developer. Currently, I’m focused on building production-grade, user-first products and open to opportunities that challenge me to grow and contribute at scale.",
  stats: [
    {
      title: "Total Projects",
      value: projectsData.length,
    },
    {
      title: "Hands-On Experience",
      value: `${
        parseInt(calculateActualExperience(professionalSummary).split("")[0]) +
        1 +
        "+"
      } years`,
    },
    {
      title: "Work Experience",
      value: `${calculateActualExperience(professionalSummary)} years`,
    },
  ],
};
