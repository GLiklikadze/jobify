import {
  BriefcaseBusiness,
  RocketIcon,
  SmileIcon,
  UserRound,
  UsersIcon,
} from "lucide-react";
import build_something from "@/assets/build-something-great.jpg";

const AboutPage = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="mx-auto max-w-6xl rounded-lg bg-blue-500 bg-opacity-15 py-12 md:py-24 lg:py-32">
          <div className="mx-20 flex flex-col items-center gap-8 sm:flex-row">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <BriefcaseBusiness className="h-12 w-12 text-orange-700" />
                <h2 className="text-3xl font-bold text-primary">Jobify</h2>
              </div>
              <p className="text-lg text-orange-700">
                Find a job that suits, your interest & skills.
              </p>
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
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground">
                  Founded in 2024, Jobify was the brainchild of a team of
                  passionate individuals who recognized the challenges faced by
                  both job seekers and employers in the traditional recruitment
                  process. We envisioned a platform that would streamline the
                  search for talent, making it easier for companies to find the
                  perfect candidates and for individuals to discover fulfilling
                  career opportunities.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Values</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-4 rounded-lg bg-muted p-6">
                    <RocketIcon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold">
                      Advanced Search Filters
                    </h4>
                    <p className="text-muted-foreground">
                      Our powerful search filters allow job seekers to find the
                      perfect job based on their skills, experience, location,
                      and other preferences. Employers can also use these
                      filters to identify the most qualified candidates for
                      their open positions.
                    </p>
                  </div>
                  <div className="space-y-4 rounded-lg bg-muted p-6">
                    <UsersIcon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold">Collaboration</h4>
                    <p className="text-muted-foreground">
                      We believe in the power of teamwork and strive to foster a
                      collaborative environment.
                    </p>
                  </div>
                  <div className="space-y-4 rounded-lg bg-muted p-6">
                    <SmileIcon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold">Customer Focus</h4>
                    <p className="text-muted-foreground">
                      Our clients success is our top priority, and we strive to
                      exceed their expectations. Our platform is price free for
                      all clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Meet Our Team</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-4 rounded-lg bg-muted p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary">
                      <UserRound className="text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">Michael Kim</h4>
                      <p className="text-muted-foreground">CEO</p>
                    </div>
                  </div>
                  <div className="space-y-4 rounded-lg bg-muted p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary">
                      <UserRound className="text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">Lisa Wang</h4>
                      <p className="text-muted-foreground">Product Manager</p>
                    </div>
                  </div>
                  <div className="space-y-4 rounded-lg bg-muted p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary">
                      <UserRound className="text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">Tom Sato</h4>
                      <p className="text-muted-foreground">QA Lead</p>
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
