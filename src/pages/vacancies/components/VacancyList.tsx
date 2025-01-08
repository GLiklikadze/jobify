import { Heart, Mail, MapPin } from "lucide-react";
import { VacancyBox } from "./VacancyBox";
import { Button } from "@/components/ui/button/button";
import jobifyLogo from "@/assets/jobify-logo.png";
import { useGetVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { getFormattedDate } from "@/utils/dateFormatter";

// const announcements = [
//   {
//     id: 1, // Unique identifier for the announcement
//     employerName: "ტექ ინდუსტრიის ჰაბი", // Name of the employer or company
//     title: "ადმინისტარციის მენეჯერი", // Title of the announcement
//     description:
//       "Tech Innovators Ltd. is seeking a talented software developer to join our team. The ideal candidate will have experience in modern web development technologies.", // Detailed description of the announcement
//     location: "საქართველო, თბილისი", // Location details
//     jobType: "Full-time", // Job type (e.g., Full-time, Part-time, Internship)
//     postedDate: "2025-01-05", // Date when the announcement was posted
//     applicationDeadline: "2025-01-20", // Deadline for applications
//     contactEmail: "careers@techinnovators.com", // Contact email for inquiries or applications
//     responsibilities: [
//       "Develop and maintain web applications using React and Node.js.",
//       "Collaborate with cross-functional teams to define project requirements.",
//       "Write clean, maintainable, and efficient code.",
//     ], // List of key responsibilities
//     qualifications: [
//       "Bachelor's degree in Computer Science or related field.",
//       "2+ years of experience in web development.",
//       "Proficiency in JavaScript, React, and Node.js.",
//     ], // List of qualifications
//     benefits: [
//       "Competitive salary",
//       "Health insurance",
//       "Flexible working hours",
//       "Professional development opportunities",
//     ], // List of benefits
//     companyLogoURL: "https://example.com/logo.png", // URL for the company's logo
//     tags: ["Software Development", "React", "Node.js", "Remote"], // Tags or keywords for the announcement
//   },
//   {
//     id: 1, // Unique identifier for the announcement
//     employerName: "Tech Innovators Ltd.", // Name of the employer or company
//     title: "We're Hiring: Software Developer", // Title of the announcement
//     description:
//       "Tech Innovators Ltd. is seeking a talented software developer to join our team. The ideal candidate will have experience in modern web development technologies.", // Detailed description of the announcement
//     location: "Remote / New York, NY", // Location details
//     jobType: "Full-time", // Job type (e.g., Full-time, Part-time, Internship)
//     postedDate: "2025-01-05", // Date when the announcement was posted
//     applicationDeadline: "2025-01-20", // Deadline for applications
//     contactEmail: "careers@techinnovators.com", // Contact email for inquiries or applications
//     responsibilities: [
//       "Develop and maintain web applications using React and Node.js.",
//       "Collaborate with cross-functional teams to define project requirements.",
//       "Write clean, maintainable, and efficient code.",
//     ], // List of key responsibilities
//     qualifications: [
//       "Bachelor's degree in Computer Science or related field.",
//       "2+ years of experience in web development.",
//       "Proficiency in JavaScript, React, and Node.js.",
//     ], // List of qualifications
//     benefits: [
//       "Competitive salary",
//       "Health insurance",
//       "Flexible working hours",
//       "Professional development opportunities",
//     ], // List of benefits
//     companyLogoURL: "https://example.com/logo.png", // URL for the company's logo
//     tags: ["Software Development", "React", "Node.js", "Remote"], // Tags or keywords for the announcement
//   },
// ];

const VacancyList = () => {
  const { data: vacanciesList } = useGetVacanciesList();
  return vacanciesList?.map((announcement, index) => (
    <div key={index}>
      <VacancyBox>
        <div className="flex flex-row justify-between cursor-pointer">
          <div className="rounded-2xl border-2 overflow-hidden">
            <img src={jobifyLogo} className="w-28 h-20" />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex flex-row space-x-2 items-center">
              <h1 className="text-primary font-bold">{announcement?.title} </h1>
              <Heart
                className="text-primary hover:fill-primary"
                size="1.2rem"
              />
            </div>
            <p>{announcement?.description}</p>
            <p className="flex items-center space-x-1 text-primary text-sm">
              <MapPin className="inline-flex" size="1rem" />
              <span> საქართველო, თბილისი</span>
            </p>
          </div>
          <div className="flex flex-col space-y-8">
            <div>ანაზღაურება - {announcement?.salary} ₾</div>
            <div>{getFormattedDate(announcement?.created_at)}</div>
          </div>
          <div className="flex flex-col justify-between">
            <Button variant="default" className="p-6">
              <Mail />
              რეზიუმეს გაგზავნა
            </Button>
          </div>
        </div>
      </VacancyBox>
    </div>
  ));
};

export default VacancyList;
