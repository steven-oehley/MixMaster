import { useRouteError } from "react-router-dom";
import pageError from "../assets/pageError.svg";

const PageError = () => {
  const error = useRouteError();

  return (
    <>
      <div className="max-w-7xl px-4 py-12 mx-auto">
        <h2 className="text-4xl text-center text-secondary">
          Error {error?.status}
        </h2>
        <p className="text-4xl text-center text-secondary">
          {error.error?.message}
        </p>
        <img
          src={pageError}
          alt="page not found"
          className="w-1/2 mx-auto mt-12"
        />
      </div>
    </>
  );
};
export default PageError;
