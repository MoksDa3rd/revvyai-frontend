"use client"
import DashboardPage from "@/Components/Dashboard";
import { AppSidebar } from "@/Components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import React from "react";

const Onboarding = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />

      <DashboardPage />
    </SidebarProvider>
  );
};

<main></main>;

export default Onboarding;
