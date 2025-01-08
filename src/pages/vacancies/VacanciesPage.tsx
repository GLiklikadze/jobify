import VacancyList from "./components/VacancyList";
import illustration from "@/assets/illustration.png";

const VacanciesPage = () => {
  return (
    <div className="space-y-1 mt-4 container">
      <div className="flex flex-row justify-center space-x-44 p-4">
        <div className="space-y-8">
          <h1 className="text-4xl ">
            Find a job that suits <br /> your interest & skills.
          </h1>
          <p>
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam{" "}
            <br />
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </p>
        </div>
        <img src={illustration} className="w-96 h96" />
      </div>
      <VacancyList />
    </div>
  );
};

export default VacanciesPage;
