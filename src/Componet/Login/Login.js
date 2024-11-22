import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const logInHandler = async (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(password, email);

    try {
      const userinfo = { email, password };
      console.log("User Info:", userinfo);

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userinfo),
      });

      const resData = await res.json(); // Parse the JSON response
      console.log("Response Data:", resData);
      toast.success("Login successful");
      Cookies.set("accessToken", resData.data.accessToken);
      // Set the access token in cookies

      // Login successful

      // Navigate or perform other actions after login
      navigate("/dashboard");
      form.reset();
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Failed to log in. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>

        <form className="space-y-4" onSubmit={logInHandler}>
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />

          {/* Submit Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Log In
          </button>
          <Toaster></Toaster>
        </form>

        {/* OAuth Buttons */}
        <div className="mt-6 space-y-4"></div>
      </div>
    </div>
  );
};

export default Login;
