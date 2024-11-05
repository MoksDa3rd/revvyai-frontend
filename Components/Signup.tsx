"use client";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa"; // Import icons

export default function SignupUI() {
  return (
    <div className="flex py-4 h-full items-center justify-center bg-revvyBlack">
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-br from-revvyGreen/20 via-black/10 to-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      /> */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <div className="flex flex-row items-center justify-center gap-2">
            <Logo />
            <h1 className="text-3xl font-bold text-revvyBlack">RevvyAI</h1>
          </div>
          <p className="text-gray-600">Create your account</p>
        </div>

        {/* Social Login Buttons */}

        {/* Signup Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-revvyGreen cursor-pointer">
              <option>Nigeria</option>
              <option>Other countries</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Name
            </label>
            <input
              type="text"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-revvyGreen"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-revvyGreen"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-revvyGreen"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-revvyGreen"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="flex">
              <select className="p-2 border border-gray-300 rounded-l focus:outline-none focus:border-revvyGreen">
                <option>+234</option>
                {/* Add more country codes if needed */}
              </select>
              <input
                type="tel"
                placeholder="802 123 4567"
                required
                className="w-full p-2 border-t border-b border-r border-gray-300 rounded-r focus:outline-none focus:border-revvyGreen"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-revvyGreen"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              What type of business do you own?
            </label>
            <div className="mt-2 space-y-1 items-center">
              <div className="flex items-start">
                <input
                  type="radio"
                  name="businessType"
                  className="h-4 w-4 text-revvyGreen border-gray-300 focus:ring-revvyGreen"
                />
                <div className="ml-2 text-gray-700">
                  <span className="font-medium">Starter Business</span>
                  <p className="text-sm">
                    I'm testing my ideas with real customers and preparing to
                    register my company.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <input
                  type="radio"
                  name="businessType"
                  className="h-4 w-4 text-revvyGreen border-gray-300 focus:ring-revvyGreen"
                />
                <div className="ml-2 text-gray-700">
                  <span className="font-medium">Registered Business</span>
                  <p className="text-sm">
                    My business has the approval, documentation, and licenses
                    required to operate legally.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Are you a software developer?
            </label>
            <div className="flex flex-row items-center gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="developer"
                  value="yes"
                  className="h-4 w-4 text-revvyGreen border-gray-300 focus:ring-revvyGreen"
                />
                <label className="ml-2 text-gray-700">Yes, I am</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="developer"
                  value="no"
                  className="h-4 w-4 text-revvyGreen border-gray-300 focus:ring-revvyGreen"
                />
                <label className="ml-2 text-gray-700">No, I'm not</label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-revvyGreen rounded hover:bg-green-600"
          >
            Create My Account
          </button>
          <div className="flex flex-col space-y-4">
            <button className="flex items-center justify-center w-full py-2 text-white bg-red-600 rounded hover:bg-red-700">
              <FaGoogle className="mr-2" /> Sign up with Google
            </button>
            <button className="flex items-center justify-center w-full py-2 text-white bg-gray-800 rounded hover:bg-gray-900">
              <FaGithub className="mr-2" /> Sign up with GitHub
            </button>
            <button className="flex items-center justify-center w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              <FaTwitter className="mr-2" /> Sign up with Twitter
            </button>
          </div>
          <p className="text-sm text-gray-600">
            By clicking the “Create your account” button, you agree to RevvyAI's
            <Link href="#" className="text-revvyGreen hover:underline">
              {" "}
              terms of acceptable use
            </Link>{" "}
            and
            <Link href="#" className="text-revvyGreen hover:underline">
              {" "}
              Data Processing Agreement
            </Link>
            .
          </p>
          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <Link
              href="/Login"
              className="text-revvyGreen font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
