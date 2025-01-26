import ContactSection from "./components/ContactSection";
import OurStorySection from "./components/OurStorySection";
import ValuesSection from "./components/ValuesSection";
import TeamSection from "./components/TeamSection";

const AboutPage = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="flex-1 px-5">
        <ContactSection />
        <div className="mx-auto max-w-7xl py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <OurStorySection />
              <ValuesSection />
              <TeamSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
