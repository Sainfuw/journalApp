import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h4 className="auth__title">Register</h4>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
        />
        <button type="submit" className="btn btn-primary btn-block">
          Register
        </button>
        <Link to="/auth/login" className="link link-block mt-5">
          Already registered?
        </Link>
      </form>
    </>
  );
};
