import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { startLoading, loginSuccess, loginFailure } from '../../Redux/features/auth/authSlice';
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(startLoading());
    try {
      // Simulate API call
      const user = await fakeApiLogin(data.username, data.password);

      // If login is successful, dispatch loginSuccess with user data
      dispatch(loginSuccess(user));
      console.log("Login Successful:", user);
      navigate('/')

    } catch (error) {
      // If login fails, dispatch loginFailure
      dispatch(loginFailure());
      console.error("Login Failed:", error.message);
    }
  };

  // Simulated API call function
  const fakeApiLogin = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "testuser" && password === "password") {
          resolve({ username, name: "Test User" });
        } else {
          reject(new Error("Invalid username or password"));
        }
      }, 1000);
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center flex-col"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white mb-32 bg-opacity-45 backdrop-blur-md p-10 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-black mb-6">
          Welcome Back! <br /> 
          Sign in to continue to Skote.
        </h2>

        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
            placeholder="Enter your username"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-700"
          />
          {errors.username && (
            <p className="text-red-500 mt-2">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-700"
          />
          {errors.password && (
            <p className="text-red-500 mt-2">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
        >
          {authState.loading ? "Loading..." : "Login"}
        </button>

        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
