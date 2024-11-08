import Nav from "../components/Nav";
import notHere from "../assets/notHere.svg";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <>
        <Nav />
        <div className="max-w-7xl px-4 py-12 mx-auto">
          <h2 className="text-4xl text-center text-secondary">Error - 404</h2>
          <p className="text-4xl text-center text-secondary">
            We can&apos;t find the page you are looking for!
          </p>
          <img
            src={notHere}
            alt="page not found"
            className="w-1/2 mx-auto mt-12"
          />
        </div>
      </>
    );
  }
};
export default Error;
