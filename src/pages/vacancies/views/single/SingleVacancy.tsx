import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Copy, CircleChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";
import { useGetSingleVacancy } from "@/react-query/query/vacancies/vacanciesQuery";
import { getFormattedDate } from "@/utils/dateFormatter";

const SingleVacancy = () => {
  const { vac_id } = useParams();
  console.log(vac_id, "single");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  const { data: singleVacancy } = useGetSingleVacancy(vac_id ?? "");
  const handleEmailClick = () => {
    const subject =
      singleVacancy?.title +
      "/" +
      singleVacancy?.jobType +
      "/" +
      singleVacancy?.location;

    window.location.href = `mailto:${singleVacancy?.contactEmail}?subject=${encodeURIComponent(subject)}`;
  };
  const handleCopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };
  // const list = singleVacancy?.description?.split("\n");
  // const renderedList = list?.map((description) => <li>{description}</li>);

  return (
    <div className="container mx-auto max-w-7xl p-4">
      <Button
        variant="outline"
        className="mb-4 text-primary"
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
            <div className="h-24 w-28 overflow-hidden rounded-lg bg-blue-100">
              <img
                src={`https://gimdvoaobxziodrpnvkh.supabase.co/storage/v1/object/public/${singleVacancy?.profiles?.logo_url}`}
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-3">
                <h1 className="text-2xl font-bold">{singleVacancy?.title}</h1>
                <Badge variant="default">{singleVacancy?.jobType}</Badge>
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
              <h2 className="mb-3 text-lg font-semibold">Job Description</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>xxx</p>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold">Requirements</h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
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
              <h2 className="mb-3 text-lg font-semibold">Benefits</h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
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
            <h2 className="mb-4 font-semibold">Job Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-5 w-5 text-primary" />
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
                <MapPin className="h-5 w-5 text-primary" />
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
                <h2 className="mb-2 font-semibold">Salary (USD)</h2>
                <p className="text-lg text-green-600">
                  {singleVacancy?.salaryMin} - {singleVacancy?.salaryMax} ₾
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-semibold">Share this job:</h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="active:bg-primary"
                    size="icon"
                    name="copy"
                    onClick={handleCopyUrl}
                  >
                    <Copy className="h-4 w-4" />
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
