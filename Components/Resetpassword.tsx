"use client"
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";


export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-revvyBlack">
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
          <p className="text-gray-600">Reset your password</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-revvyGreen"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-revvyGreen rounded hover:bg-green-600"
          >
            Send Reset Link
          </button>
          <p className="text-sm text-gray-600 text-center">
            Remembered your password?{" "}
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
