"use client"
import React, { useState } from "react";
import { Componentsrc } from "./component/componentsrc";
import Logo from "./Logo";
import Link from "next/link";
import { FaRightLong } from "react-icons/fa6";
import { Button } from "./ui/button";

const OnboardingPage = () => {
  const [uploadedData, setUploadedData] = useState(null);

  const handleDataUploaded = (data: React.SetStateAction<null>) => {
    setUploadedData(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-revvyBlack p-4 text-white">
      <div className="flex flex-row items-center gap-2">
        <Logo />
        <h1 className="text-3xl font-bold mb-2 text-revvyGreen">
          Welcome to RevyAI
        </h1>
      </div>

      <p className="mb-8 text-center text-lg">
        Get started by uploading your data
      </p>

      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg text-center">
        <Componentsrc onDataUploaded={handleDataUploaded} />
      </div>

      {uploadedData && (
        <div className="mt-8 w-full max-w-lg bg-white text-black p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Uploaded Data Preview</h3>
          <ul className="list-disc pl-5">
            {Object.entries(uploadedData).slice(0, 5).map(([key, value]) => (
              <li key={key} className="text-sm">
                <strong>{key}:</strong> {JSON.stringify(value)}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 w-full max-w-lg">
        <p className="text-center text-lg font-medium">Your Progress</p>
        <div className="h-2 bg-gray-300 rounded-full mt-2">
          <div className="h-2 bg-revvyGreen rounded-full w-1/2"></div>
        </div>
        <p className="text-center mt-2 text-white">50% Complete</p>
      </div>

      <div className="mt-8 w-full max-w-lg bg-revvyGreen text-white p-4 rounded-lg">
        <h3 className="text-lg font-bold">Did you know?</h3>
        <p className="text-sm">
          AI-powered analytics can help uncover insights that drive business
          growth. Upload your data to get started!
        </p>
      </div>

      <Link href="/Dashboard">
        <div className="mt-8 flex flex-row items-center gap-2 hover:text-revvyGreen">
          <FaRightLong /> Go to your Dashboard
        </div>
      </Link>
    </div>
  );
};

export default OnboardingPage;
