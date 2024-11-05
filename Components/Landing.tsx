"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-revvyBlack overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-revvyGreen/20 via-black/10 to-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          className="flex flex-col items-center text-center mb-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Logo />
            <h1 className="text-5xl font-bold text-revvyGreen">
              Welcome to RevvyAI
            </h1>
          </div>
          <p className="text-lg text-white max-w-2xl">
            Revolutionize your business with data-driven insights powered by AI.
            Upload your data and let RevvyAI unlock actionable recommendations
            to fuel your growth!
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Link href="/Signup">
            <button className="px-8 py-4 text-white text-lg font-semibold bg-revvyGreen rounded-lg hover:bg-green-800 transition-all shadow-lg">
              Use Our App
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full max-w-5xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          {[
            {
              title: "AI-Powered Insights",
              desc: "Get actionable insights that fuel growth.",
            },
            {
              title: "Real-time Trends",
              desc: "Stay ahead with up-to-date analytics.",
            },
            {
              title: "Personalized Recommendations",
              desc: "Tailored advice to fit your business.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-revvyBlack mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-white">
        © 2024 RevvyAI. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
