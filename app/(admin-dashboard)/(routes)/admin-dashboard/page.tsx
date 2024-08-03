import AdminDashboardGraph from "@/components/Admin-Dashboard/AdminDashboardGraph";
import CategorizedGraph from "@/components/Admin-Dashboard/CategorizedGraph";
import React from "react";

type Props = {};

export default function AdminDashboard({}: Props) {
  return <div>
    <CategorizedGraph />
  </div>;
}
