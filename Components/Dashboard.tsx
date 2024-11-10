import React, { useState } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import SalesDashboard from "./SalesDashboard";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("charts");

  return (
    <div className="min-h-screen w-full bg-revvyBlack text-revvyBlack p-4 md:p-8">
      {/* Header */}
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

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-start mb-4">
        {["charts", "settings", "ai-recommendations", "trends", "insights"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 rounded-md ${
              activeTab === tab
                ? "bg-revvyBlack text-revvyGreen"
                : "text-revvyGreen border border-revvyGreen"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "charts" && "Data charts"}
            {tab === "settings" && "Settings"}
            {tab === "ai-recommendations" && "AI Recommendations"}
            {tab === "trends" && "Trends"}
            {tab === "insights" && "Insights"}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-revvyBlack text-white rounded-lg p-6 shadow-lg space-y-6">
        {/* Settings Tab */}
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

            <div className="flex flex-wrap gap-4">
              <button className="w-full sm:w-auto py-2 px-4 bg-revvyBlack hover:bg-red-500 text-white rounded-md">
                Delete Account
              </button>
              <button className="w-full sm:w-auto py-2 px-4 bg-revvyBlack text-white rounded-md">
                Invite User
              </button>
            </div>
          </div>
        )}

        {/* AI Recommendations Tab */}
        {activeTab === "ai-recommendations" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
            <p>
              Discover personalized recommendations powered by AI to improve
              your business operations.
            </p>
          </div>
        )}

        {/* Data Charts Tab */}
        {activeTab === "charts" && (
          <div className="">
            <SalesDashboard />
          </div>
        )}

        {/* Trends Tab */}
        {activeTab === "trends" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Trends</h2>
            <p>Graphs and data representations for trend analysis.</p>
            <div className="bg-gray-200 h-40 rounded-md mt-4"></div>
          </div>
        )}

        {/* Insights Tab */}
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
