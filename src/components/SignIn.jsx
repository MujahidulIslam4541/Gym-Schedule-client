import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="flex justify-center mt-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-xl font-bold text-center">Sign Up</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="mb-4 px-4">Don't Have an Account <Link to='/signUp' className="text-red-500 font-semibold ">SignUp</Link></p>
      </div>
    </div>
  );
}
