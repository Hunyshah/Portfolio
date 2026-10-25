import type { Education, Experience } from "@/types/experience";

export const experience: Experience[] = [
  {
    company: "TOPSOL",
    position: "Web and Mobile App Developer",
    start: "Aug 2023",
    end: "Present",
    responsibilities: [
      "Developed and maintained web applications with React and mobile applications with React Native.",
      "Integrated RESTful APIs into React and React Native applications.",
      "Managed application state with Redux and Zustand.",
      "Worked with designers and cross-functional team members to implement features.",
      "Improved application functionality and user experience.",
    ],
    technologies: ["React", "React Native", "TypeScript", "Redux", "Zustand", "REST APIs"],
    reviewNotes: [
      "Dates are taken from the CV, which lists this role as Present. Confirm current employment status before publishing and update `end` if needed.",
    ],
  },
  {
    company: "LUMINOR SOFT",
    position: "Web and Mobile App Developer",
    start: "Jun 2021",
    end: "Jul 2023",
    responsibilities: [
      "Developed and maintained application features with React and React Native libraries.",
      "Integrated RESTful APIs with application frontends.",
      "Collaborated with designers and product managers on features and usability.",
      "Optimised code and worked on reducing application load times.",
    ],
    technologies: ["React", "React Native", "JavaScript", "REST APIs"],
  },
];

export const education: Education = {
  qualification: "DAE Associate Engineering",
  institution: "Alrahman Polytechnic College",
};
