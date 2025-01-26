import { useTranslation } from "react-i18next";
import HowWorksBox from "./HowWorksBox";
import { CheckCircle, Search, UserCircle2 } from "lucide-react";

const HowWorksSection = () => {
  const { t } = useTranslation();
  return (
    <section className="mx-auto w-full max-w-6xl rounded-md bg-blue-500 bg-opacity-15 px-4 pb-16 pt-12">
      <h2 className="mb-12 text-center text-2xl font-bold text-primary">
        {t("home-page.homepage-works-section-heading")}
      </h2>
      <div className="flex flex-row flex-wrap justify-around gap-16">
        <HowWorksBox
          boxTitle={t("home-page.homepage-works-section-create-title")}
          boxDescription={t(
            "home-page.homepage-works-section-create-description",
          )}
        >
          <UserCircle2 className="h-8 w-8 text-orange-600" />
        </HowWorksBox>
        <HowWorksBox
          boxTitle={t("home-page.homepage-works-section-find-title")}
          boxDescription={t(
            "home-page.homepage-works-section-find-description",
          )}
        >
          <Search className="h-8 w-8 text-orange-600" />
        </HowWorksBox>
        <HowWorksBox
          boxTitle={t("home-page.homepage-works-section-apply-title")}
          boxDescription={t(
            "home-page.homepage-works-section-apply-description",
          )}
        >
          <CheckCircle className="h-8 w-8 text-orange-600" />
        </HowWorksBox>
      </div>
    </section>
  );
};

export default HowWorksSection;
