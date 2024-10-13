import react from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
const Register = () => {
  return (
    <section className="grid place-items-center h-screen">
      <Form
        method="post"
        className="card p-8 w-96 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="font-bold text-3xl text-center">Register</h4>
        <FormInput name="username" label="username" type="text" />
        <FormInput name="email" label="email" type="email" />
        <FormInput name="password" label="password" type="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="link link-hover link-primary capitalize ml-2"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
