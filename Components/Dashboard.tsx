import React, { useState } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("settings");

  return (
    <div className="min-h-screen w-full bg-revvyBlack text-revvyBlack p-4">

      <div className="flex items-center justify-between bg-revvyBlack text-white p-4 rounded-md mb-6">
        <h1 className="text-2xl font-light">Dashboard</h1>
        <div className="flex items-center gap-4">
          <FaUserCircle className="text-3xl cursor-pointer" />
          <button className="flex items-center text-white">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-start mb-4">
        <button
          className={`py-2 px-4 rounded-md ${
            activeTab === "settings"
              ? "bg-revvyBlack text-revvyGreen"
              : "text-revvyGreen border border-revvyGreen"
          }`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
        <button
          className={`py-2 px-4 rounded-md ${
            activeTab === "ai-recommendations"
              ? "bg-revvyBlack text-white"
              : "text-revvyGreen border border-revvyGreen"
          }`}
          onClick={() => setActiveTab("ai-recommendations")}
        >
          AI Recommendations
        </button>
        <button
          className={`py-2 px-4 rounded-md ${
            activeTab === "trends"
              ? "bg-revvyBlack text-white"
              : "text-revvyGreen border border-revvyGreen"
          }`}
          onClick={() => setActiveTab("trends")}
        >
          Trends
        </button>
        <button
          className={`py-2 px-4 rounded-md ${
            activeTab === "insights"
              ? "bg-revvyBlack text-white"
              : "text-revvyGreen border border-revvyGreen"
          }`}
          onClick={() => setActiveTab("insights")}
        >
          Insights
        </button>
      </div>

      <div className="bg-revvyBlack text-white rounded-lg p-6 shadow-lg">
        {activeTab === "settings" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Settings</h2>

            <form className="mb-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  New Password
                </label>
                <input
                  type="password"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-revvyGreen"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-revvyBlack">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-revvyGreen"
                  placeholder="Confirm new password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-black text-revvyGreen border rounded-md"
              >
                Update Password
              </button>
            </form>

            <form className="mb-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  Organization Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-revvyGreen"
                  placeholder="Enter organization name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-revvyGreen"
                  placeholder="Enter email address"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-black text-revvyGreen border rounded-md"
              >
                Update Details
              </button>
            </form>

            <div className="flex gap-4">
              <button className="w-full py-2 px-4 bg-revvyBlack hover:bg-red-500 text-white rounded-md">
                Delete Account
              </button>
              <button className="w-full py-2 px-4 bg-revvyBlack text-white rounded-md">
                Invite User
              </button>
            </div>
          </div>
        )}

        {activeTab === "ai-recommendations" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
            <p>
              Discover personalized recommendations powered by AI to improve
              your business operations.
            </p>
          </div>
        )}

        {activeTab === "trends" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Trends</h2>
            <p>Graphs and data representations for trend analysis.</p>
            <div className="bg-gray-200 h-40 rounded-md mt-4"></div>
          </div>
        )}

        {activeTab === "insights" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Insights</h2>
            <p>Get key insights and actionable metrics to drive your growth.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
