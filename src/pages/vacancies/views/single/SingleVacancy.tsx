import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Copy, CircleChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";
import { useGetSingleVacancy } from "@/react-query/query/vacancies/vacanciesQuery";
import { getFormattedDate } from "@/utils/dateFormatter";

const SingleVacancy = () => {
  const { lang, vac_id } = useParams();
  console.log(vac_id, "single");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${lang}/vacancies`);
  };
  const { data: singleVacancy } = useGetSingleVacancy(vac_id ?? "");
  const handleEmailClick = () => {
    const email = "example@example.com";
    const subject =
      singleVacancy?.title +
      "/" +
      singleVacancy?.jobType +
      "/" +
      singleVacancy?.location;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <Button
        variant="outline"
        className="text-primary mb-4"
        onClick={handleClick}
      >
        {" "}
        <CircleChevronLeft />
        Go Back
      </Button>
      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        {/* Main Content */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <img
                src="/placeholder.svg?height=64&width=64"
                alt="logo"
                className="w-16 h-16"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold">{singleVacancy?.title}</h1>
                <Badge variant="secondary">{singleVacancy?.jobType}</Badge>
              </div>
              <p className="text-muted-foreground">
                at {singleVacancy?.companyName}
              </p>
            </div>
            <Button className="bg-primary" onClick={handleEmailClick}>
              Apply Now <span className="ml-2">→</span>
            </Button>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-semibold mb-3">Job Description</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{singleVacancy?.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {singleVacancy?.requirements}
                {/* <li>
                  Good troubleshooting and analytical skills combined with the
                  desire to tackle challenges head-on
                </li>
                <li>
                  3+ years of experience in back-end development working either
                  with medium smaller projects
                </li>
                <li>
                  Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
                  Laravel
                </li>
                <li>
                  Working regularly with APIs and Web Services (REST, GraphQL,
                  SOAP, etc)
                </li> */}
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-3">Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Early finish on Fridays for our end of week catch up (4:30
                  finish, and drink of your choice from the bar!)
                </li>
                <li>
                  28 days holiday (including bank holidays) rising by 1 day per
                  year to 33 plus an additional day off on your birthday
                </li>
                <li>Generous annual bonus</li>
                <li>Healthcare package</li>
                <li>Free breakfast on Mondays and free snacks in the office</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-4">
            <h2 className="font-semibold mb-4">Job Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Job Posted</p>
                  <p>{getFormattedDate(singleVacancy?.created_at ?? "")}</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-3 text-sm">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Due Date</p>
                  <p>14 Apr, 2025</p>
                </div>
              </div> */}
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Georgia</p>
                  <p>{singleVacancy?.location}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="space-y-4">
              <div>
                <h2 className="font-semibold mb-2">Salary (USD)</h2>
                <p className="text-lg text-green-600">
                  <p>
                    {singleVacancy?.salaryMin} - {singleVacancy?.salaryMax} ₾
                  </p>
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-2">Share this job:</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" name="copu">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SingleVacancy;
