import { useState } from "react";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "./index";
import {Link} from 'react-router-dom';
import {Button} from './index';
import Logo from './Logo';
import { login as createData } from "../../store/authSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [register, handleSubmit] = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createAccountData = async (data) => {
    setError("");
    try {
      const createdUser = await authService.createAccount(data);
      if (createdUser) {
        const user = await authService.getCurrentUser();
        if(user){
            dispatch(createData(user));
            navigate("/");
        }
        
      }
    } catch (error) {
      setError(error.message);
      throw new Error("Failed to register user");
    }
  };

  return (
    <>
      <>
        <div className="flex items-center justify-center w-full">
          <div
            className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
          >
            <div className="mb-2 flex justify-center">
              <span className="inline-block w-full max-w-[100px]">
                <Logo width="100%" />
              </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">
              Sign Up
            </h2>
            <p className="mt-2 text-center text-base text-black/60">
              Already have Account?&nbsp;
              <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline"
              >
                Login
              </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(createAccountData)} className="mt-8">
              <div className="space-y-5">
                <Input
                  label="Email: "
                  placeholder="Enter your email"
                  type="email"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address must be a valid address",
                    },
                  })}
                />
                <Input
                  label="Password: "
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: true,
                  })}
                />
                <Input
                label = "Name"
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: true,
                })}
                ></Input>
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default Signup;
