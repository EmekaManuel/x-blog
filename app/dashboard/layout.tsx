import NavLinks from "@/components/dashboard/navlinks";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

interface dashboardProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<dashboardProps> = ({ children }) => {
  return (
    <div className="space-y-5">
      <NavLinks />
      {children}
      <Toaster />
    </div>
  );
};

export default DashboardLayout;
