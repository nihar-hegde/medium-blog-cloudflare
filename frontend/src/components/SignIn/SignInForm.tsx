import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";
import { SignInInput } from "@nihar_hegde/medium-common";

export const SignInForm = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignInInput>({
    email: "",
    password: "",
  });
  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/user/signin`,
        postInputs,
      );
      const token = response.data;
      localStorage.setItem("token", token.jwt);
      alert("Sign in success");
      navigate("/blogs");
    } catch (error) {
      alert("Error While Signing in");
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-2 mb-6 px-10">
          <h1 className="text-3xl font-extrabold">Welcom Back! Sign In</h1>
          <p className="text-slate-400 text-center">
            Don't Have an account?{" "}
            <Link
              to={"/sign-up"}
              className="text-slate-600 hover:underline pl-2"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            lable={"Email"}
            placeholder={"johndoe@example.com"}
            type="text"
            onchange={(e) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
          />

          <Input
            lable={"Password"}
            placeholder={"******"}
            type="password"
            onchange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <button
            type="button"
            onClick={sendRequest}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
