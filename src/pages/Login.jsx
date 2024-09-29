import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="grid place-items-center h-screen">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          name="identifier"
          type="email"
          label="email"
          defaultValue="test@test.com"
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Submit" />
        </div>
        <button className="btn btn-secondary btn-block">Guest User</button>
        <p className="text-center">
          Not a Member yet?
          <Link
            to="/register"
            className="link link-primary link-hover capitalize ml-2"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
