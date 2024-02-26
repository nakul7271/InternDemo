import React from "react";
import PageContent from "../components/error/PageContent";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong!";

    console.log(error);

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resources or page.";
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
      {error.status === 404 && (
        <Link to="/">
          <button className="mt-6 text-slate-800 py-3 px-8 text-center hover:bg-blue-500 hover:text-white bg-slate-200 font-semibold rounded-md transition-all duration-300">
            Go To HomePage
          </button>
        </Link>
      )}
    </PageContent>
  );
};

export default ErrorPage;
