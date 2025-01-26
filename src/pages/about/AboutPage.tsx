import {
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
  RocketIcon,
  SmileIcon,
  UserRound,
  UsersIcon,
} from "lucide-react";
import build_something from "@/assets/build-something-great.jpg";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  const phoneNumber = "+995595573375";
  const email = "jobifycontact@jobmail.com";
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1 px-5">
        <section className="mx-auto max-w-6xl rounded-lg bg-blue-500 bg-opacity-15 py-12 md:py-24 lg:py-32">
          <div className="mx-20 flex flex-col items-center gap-8 md:flex-row">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <BriefcaseBusiness className="h-12 w-12 text-orange-700" />
                <h2 className="text-3xl font-bold text-primary">Jobify</h2>
              </div>
              <p className="text-md text-orange-700">
                {t("about-page.card-description")}
              </p>
              <p className="flex flex-row items-center gap-2 text-orange-700">
                <Phone size="1.1rem" />
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  + (995) 598 573 375
                </a>
              </p>
              <p className="flex flex-row items-center gap-2 text-orange-700">
                <Mail size="1.1rem" />
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent("Question")}`}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {email}
                </a>
              </p>
              <p className="flex flex-row items-center gap-2 text-orange-700">
                <MapPin size="1.1rem" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Tbilisi, Pekini str N1")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {t("about-page.card-address")}
                </a>
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.0149163477968!2d44.773408675567865!3d41.720196971259504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472d7c0b69653%3A0xa3dd4d3281c42abf!2zNyDhg57hg5Thg5nhg5jhg5zhg5jhg6Eg4YOS4YOQ4YOb4YOW4YOY4YOg4YOYLCDhg5fhg5Hhg5jhg5rhg5jhg6Hhg5g!5e0!3m2!1ska!2sge!4v1737845733166!5m2!1ska!2sge"
                width="250"
                height="120"
                style={{ border: 0, borderRadius: "5px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
            <img
              src={build_something}
              width="600"
              height="400"
              alt="Acme Software"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover opacity-90"
            />
          </div>
        </section>
        <section className="mx-auto max-w-7xl py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold">
                  {" "}
                  {t("about-page.story-heading")}
                </h2>
                <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground">
                  {t("about-page.story-description")}
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  {t("about-page.values-section")}
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-4 rounded-lg bg-muted p-6">
                    <RocketIcon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold">
                      {t("about-page.values-search-heading")}
                    </h4>
                    <p className="text-muted-foreground">
                      {t("about-page.values-search-description")}
                    </p>
                  </div>
                  <div className="space-y-4 rounded-lg bg-muted p-6">
                    <UsersIcon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold">
                      {t("about-page.values-collaboration-heading")}
                    </h4>
                    <p className="text-muted-foreground">
                      {t("about-page.values-collaboration-description")}
                    </p>
                  </div>
                  <div className="space-y-4 rounded-lg bg-muted p-6">
                    <SmileIcon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold">
                      {t("about-page.values-customer-focus-heading")}
                    </h4>
                    <p className="text-muted-foreground">
                      {t("about-page.values-customer-focus-description")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  {" "}
                  {t("about-page.team-section")}
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-4 rounded-lg bg-muted p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary">
                      <UserRound className="text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">
                        {" "}
                        {t("about-page.team-member-1-name")}
                      </h4>
                      <p className="text-muted-foreground">
                        {t("about-page.team-member-1-position")}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 rounded-lg bg-muted p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary">
                      <UserRound className="text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">
                        {t("about-page.team-member-2-name")}
                      </h4>
                      <p className="text-muted-foreground">
                        {t("about-page.team-member-2-position")}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 rounded-lg bg-muted p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary">
                      <UserRound className="text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">
                        {t("about-page.team-member-3-name")}
                      </h4>
                      <p className="text-muted-foreground">
                        {t("about-page.team-member-3-position")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
