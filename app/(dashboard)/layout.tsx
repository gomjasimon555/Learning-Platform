import React from "react";
import { Sidebar } from "./_components/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-56 flex-col inset-y-0 z-50">
        <Sidebar />
      </div>
      {children}
    </div>
  );
};

export default layout;
