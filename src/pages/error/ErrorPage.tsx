import error_illustration from "@/assets/404-not-found.svg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="container mt-10 flex flex-col items-center gap-14">
        <h1 className="text-4xl">Page Not Found</h1>
        <Link to="/" className="text-primary hover:underline">
          <div className="flex flex-row gap-2">
            <p>Go to HomePage </p>
            <ArrowRight />
          </div>
        </Link>
        <img
          src={error_illustration}
          alt="error-404-illustration"
          className="max-w-xl"
        />
      </div>
    </>
  );
};

export default ErrorPage;
