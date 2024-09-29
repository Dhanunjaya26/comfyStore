import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error, "error");
  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 font-bold text-3xl tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="text-lg leading-7 mt-6">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Link className="btn btn-secondary">Go to Home</Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-4xl font-bold text-center">there was an error...</h4>
    </main>
  );
};

export default Error;
