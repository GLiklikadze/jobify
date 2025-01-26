import WelcomeSection from "./components/WelcomeSection";
import JobifyStatisticsSection from "./components/JobifyStatisticsSection";
import HowWorksSection from "./components/HowWorksSection";

const HomePage = () => {
  return (
    <div className="mx-10 mt-4 space-y-10 xl:mx-60">
      <WelcomeSection />
      <JobifyStatisticsSection />
      <HowWorksSection />
    </div>
  );
};

export default HomePage;
