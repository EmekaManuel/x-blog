import NavLinks from "@/components/dashboard-navlinks/navlinks";
import React from "react";

interface dashboardProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<dashboardProps> = ({ children }) => {
  return (
    <div className="space-y-5">
      <NavLinks />
      {children}
    </div>
  );
};

export default DashboardLayout;
