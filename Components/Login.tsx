"use client";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa"; // Import icons

export default function LoginUI() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-revvyBlack">
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-br from-revvyGreen/20 via-black/10 to-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      /> */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg font-pop">
        <div className="text-center">
          <div className="flex flex-row items-center justify-center gap-2">
            <Logo />
            <h1 className="text-3xl font-bold text-revvyBlack">RevvyAI</h1>
          </div>
          <p className="text-gray-600">Log in to your account</p>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col space-y-4">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-revvyGreen"
            />
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
          <button
            type="submit"
            className="w-full py-2 text-white bg-revvyGreen rounded hover:bg-green-600"
          >
            Log in
          </button>
        </form>
          <button className="flex items-center justify-center w-full py-2 text-white bg-red-600 rounded hover:bg-red-700">
            <FaGoogle className="mr-2" /> Log in with Google
          </button>
          <button className="flex items-center justify-center w-full py-2 text-white bg-gray-800 rounded hover:bg-gray-900">
            <FaGithub className="mr-2" /> Log in with GitHub
          </button>
          <button className="flex items-center justify-center w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            <FaTwitter className="mr-2" /> Log in with Twitter
          </button>
        </div>



        <div className="text-center text-sm text-gray-600">
          <Link href="#" className="hover:underline">
            Log in with passkey
          </Link>
        </div>
        <div className="text-center text-sm text-gray-600">
          New to RevvyAI?{" "}
          <Link
            href="/Signup"
            className="font-medium text-revvyGreen hover:underline"
          >
            Sign up
          </Link>
        </div>
        <div className="text-center text-sm text-gray-600">
          <Link href="/Resetpassword" className="hover:underline">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
