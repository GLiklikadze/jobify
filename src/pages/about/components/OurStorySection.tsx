import { useTranslation } from "react-i18next";

const OurStorySection = () => {
  const { t } = useTranslation();
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold"> {t("about-page.story-heading")}</h2>
      <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground">
        {t("about-page.story-description")}
      </p>
    </section>
  );
};

export default OurStorySection;
