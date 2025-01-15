import error_illustration from "@/assets/404-not-found.svg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="container mt-10 flex flex-col items-center gap-14">
        <h1 className="md:text-xl lg:text-4xl">Sorry, Page Not Found </h1>
        <Link to="/" className="text-primary hover:underline">
          <div className="flex flex-row gap-2">
            <p>HomePage </p>

            <ArrowRight />
          </div>
        </Link>
        <div
          onClick={goBack}
          className="cursor-pointer text-primary hover:underline"
        >
          <div className="flex flex-row gap-2">
            <p>Previews Page</p>
            <ArrowLeft />
          </div>
        </div>
        <img
          src={error_illustration}
          alt="error-404-illustration"
          className="max-w-sm sm:max-w-xl"
        />
      </div>
    </>
  );
};

export default ErrorPage;
