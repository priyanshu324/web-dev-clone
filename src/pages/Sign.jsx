import React, { useState } from "react";
import SocialList from "../components/SocialList";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { LinkedInCallback, useLinkedIn } from "react-linkedin-login-oauth2"; // Removed unused import

// Sign Component
const Sign = () => {
    // State to track the active form (login or signup)
    const [isLogin, setIsLogin] = useState(true);

    // Toggle function to switch between login and signup forms
    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    // Environment variables for Google, Facebook and LinkedIn Client IDs
    const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    // const facebookClientId = import.meta.env.VITE_Facebook_CLIENT_ID; // Removed unused variable
    // const linkedinClientId = import.meta.env.VITE_Linkedin_CLIENT_ID; // Removed unused variable

    return (
        // Main container for the entire page
        <div className="min-h-screen flex items-center justify-center bg-gray-100 w-[420px] px-4 sm:px-6 lg:px-8 mt-28 sm:w-auto">
            {/* Container for the form */}
            <div className="container mx-auto max-w-lg bg-white shadow-md rounded-lg overflow-hidden">
                {/* Container for flex layout */}
                <div className="flex flex-col md:flex-row">
                    {/* Conditional Rendering for Forms */}
                    {/* Render login form */}
                    {isLogin ? (
                        // Container for the login form
                        <div className="w-full p-6 bg-blue-50">
                            {/* Heading */}
                            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center 2xl:text-2xl">
                                Login
                            </h2>
                            {/* Login Form */}
                            <form className="space-y-4">
                                {/* Input Field for Email */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <i className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 uil uil-envelope"></i>
                                </div>
                                {/* Input Field for Password */}
                                <div className="relative">
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <i className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 uil uil-lock"></i>
                                </div>
                                {/* Remember me and forgot password section */}
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center text-sm text-gray-600">
                                        <input type="checkbox" className="mr-2" />
                                        Remember me
                                    </label>
                                    <a href="#" className="text-sm text-blue-500 hover:underline">
                                        Forgot password?
                                    </a>
                                </div>
                                {/* Login button */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                                >
                                    Login
                                </button>
                            </form>
                            {/* Button to swtich to the registration form */}
                            <p className="mt-4 text-sm text-center text-gray-600">
                                Not a member?{" "}
                                <button
                                    onClick={toggleForm}
                                    className="text-blue-500 hover:underline"
                                >
                                    Signup Now
                                </button>
                            </p>
                            {/* Google OAuth Provider */}
                            <>
                                <GoogleOAuthProvider clientId={googleClientId}>
                                    {/* Social Login List component */}
                                    <SocialList />
                                </GoogleOAuthProvider>
                            </>
                        </div>
                        // Render registration form
                    ) : (
                        // Container for the signup form
                        <div className="w-full p-6 bg-green-50">
                            {/* Heading */}
                            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center 2xl:text-2xl">
                                Registration
                            </h2>
                            {/* Registration Form */}
                            <form className="space-y-4">
                                {/* Input Field for Name */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        placeholder="Enter your name"
                                        required
                                    />
                                    <i className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 uil uil-user"></i>
                                </div>
                                {/* Input Field for Email */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <i className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 uil uil-envelope"></i>
                                </div>
                                {/* Input Field for Create Password */}
                                <div className="relative">
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        placeholder="Create a password"
                                        required
                                    />
                                    <i className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 uil uil-lock"></i>
                                </div>
                                {/* Input Field for Confirm Password */}
                                <div className="relative">
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        placeholder="Confirm a password"
                                        required
                                    />
                                    <i className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 uil uil-lock"></i>
                                </div>
                                {/* Terms and condition section */}
                                <label className="flex items-center text-sm text-gray-600">
                                    <input type="checkbox" className="mr-2" />
                                    I accept all terms and conditions
                                </label>
                                {/* Signup Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
                                >
                                    Signup
                                </button>
                            </form>
                            {/* Button to switch to the login form */}
                            <p className="mt-4 text-sm text-center text-gray-600">
                                Already a member?{" "}
                                <button
                                    onClick={toggleForm}
                                    className="text-green-500 hover:underline"
                                >
                                    Login Now
                                </button>
                            </p>
                            {/* Google OAuth Provider */}
                            <>
                                <GoogleOAuthProvider clientId={googleClientId}>
                                    {/* Social login list component */}
                                    <SocialList />
                                </GoogleOAuthProvider>
                            </>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sign;