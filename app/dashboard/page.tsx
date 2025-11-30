import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard</p>
    </div>
  );
}
