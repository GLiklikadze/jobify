import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Copy,
  CircleChevronLeft,
  Component,
} from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";
import { useGetSingleVacancy } from "@/react-query/query/vacancies/vacanciesQuery";
import { getFormattedDate } from "@/utils/dateFormatter";
import listMaker from "./utils/listMaker";

const SingleVacancy = () => {
  const { lang, vac_id } = useParams();
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

  return (
    <div className="container mx-auto max-w-6xl space-y-6 p-8 text-xs">
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
          <div className="flex flex-col items-start justify-between gap-4 rounded-md border-2 p-6 sm:flex-row">
            <div className="flex flex-row gap-4">
              <div className="h-24 w-28 overflow-hidden rounded-lg bg-blue-100">
                <img
                  src={`https://gimdvoaobxziodrpnvkh.supabase.co/storage/v1/object/public/${singleVacancy?.profiles?.logo_url}`}
                  alt="logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="mb-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <h1 className="font-bold md:text-2xl">
                    {singleVacancy?.title}
                  </h1>
                  <Badge variant="default" className="whitespace-nowrap">
                    {singleVacancy?.jobType}
                  </Badge>
                </div>
                <p className="flex flex-row items-center gap-2">
                  <Component size="1rem" className="text-primary" />{" "}
                  {singleVacancy?.category}
                </p>
                <p className="text-muted-foreground">
                  at{" "}
                  <Link
                    to={`/${lang}/companies/${singleVacancy?.user_id}`}
                    className="text-primary"
                  >
                    {singleVacancy?.companyName}
                  </Link>
                </p>
              </div>
            </div>
            <Button
              className="mx-auto w-40 bg-primary text-xs sm:mx-0 sm:w-36"
              onClick={handleEmailClick}
            >
              Apply Now <span className="ml-2">→</span>
            </Button>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="mb-3 text-lg font-semibold">Job Description</h2>
              <div className="space-y-4 text-muted-foreground">
                {singleVacancy?.description ?? ""}
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold">Requirements</h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                {listMaker(singleVacancy?.requirements ?? "")}
              </ul>
            </section>
            <section>
              <h2 className="mb-3 text-lg font-semibold">Benefits</h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                {listMaker(singleVacancy?.benefits ?? "")}
              </ul>
            </section>
            <section>
              <h2 className="mb-3 text-lg font-semibold">Qualifications</h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                {listMaker(singleVacancy?.qualifications ?? "")}
              </ul>
            </section>
            <section>
              <h2 className="mb-3 text-lg font-semibold">Responsibilities</h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                {listMaker(singleVacancy?.responsibilities ?? "")}
              </ul>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="mx-auto flex flex-col gap-8 sm:flex-row md:flex-col">
          <Card className="h-48 w-56 p-4">
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
          <Card className="h-48 w-56 p-4">
            <div className="space-y-4">
              <div>
                <h2 className="mb-2 font-semibold">Salary (USD)</h2>
                <p className="text-base text-green-600 sm:text-lg">
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
