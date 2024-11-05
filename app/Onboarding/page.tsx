import OnboardingPage from "@/Components/Onboarding";
import { AppSidebar } from "@/Components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import React from "react";

const Onboarding = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />

      <OnboardingPage />
    </SidebarProvider>
  );
};

<main></main>;

export default Onboarding;
