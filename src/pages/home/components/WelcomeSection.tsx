import { BriefcaseBusiness } from "lucide-react";
import illustration from "@/assets/illustration.png";
import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const { t } = useTranslation();
  return (
    <section className="mx-auto max-w-6xl rounded-lg bg-blue-500 bg-opacity-15 py-12 md:py-24 lg:py-32">
      <div className="mx-8 flex flex-col items-center gap-8 sm:mx-20 sm:flex-row">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <BriefcaseBusiness className="text-orange-700 sm:h-12 sm:w-12" />
            <h2 className="text-xl font-bold text-primary sm:text-3xl">
              Jobify
            </h2>
          </div>
          <p className="max-w-96 text-xs font-medium text-orange-700 sm:text-lg">
            {t("home-page.homepage-heading")}
          </p>
          <p className="text-foregraund max-w-96 text-justify text-[0.5rem] font-medium text-primary sm:text-xs">
            {t("home-page.homepage-description")}
          </p>
        </div>
        <img
          src={illustration}
          width="400"
          height="300"
          alt="Acme Software"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover opacity-85"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
