import { Briefcase, Heart, Mail, MapPin } from "lucide-react";
import { VacancyBox } from "./VacancyBox";
import { Button } from "@/components/ui/button/button";
import { useGetVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { getFormattedDate } from "@/utils/dateFormatter";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const handleClick = (vac_id: number) => {
    navigate(`${vac_id}`);
  };
  return vacanciesList?.map((announcement) => (
    <VacancyBox key={announcement?.id}>
      <div
        className="flex cursor-pointer flex-row justify-between"
        onClick={() => handleClick(announcement.id)}
      >
        <div className="overflow-hidden rounded-2xl border-2">
          <Briefcase className="h-20 w-28" />
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex flex-row items-center space-x-2">
            <h1 className="font-bold text-primary">{announcement?.title} </h1>
            <Heart className="text-primary hover:fill-primary" size="1.2rem" />
          </div>
          <p>{announcement?.companyName}</p>
          <p className="flex items-center space-x-1 text-sm text-primary">
            <MapPin className="inline-flex" size="1rem" />
            <span> საქართველო, {announcement?.location}</span>
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <div>
            {" "}
            {announcement?.salaryMin}- {announcement?.salaryMax} ₾
          </div>
          <div>{getFormattedDate(announcement?.created_at)}</div>
        </div>
        <div className="flex flex-col justify-between">
          <Button variant="default" className="p-6">
            <Mail />
            გაგზავნა
          </Button>
        </div>
      </div>
    </VacancyBox>
  ));
};

export default VacancyList;
