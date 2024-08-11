// components/Admin-Dashboard/AdminDashboardGraph.tsx

"use client";

import useAuthOrNullRedirect from "@/hooks/useAuthOrNullRedirect";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Label,
    LabelList,
} from "recharts";

interface AdminDashboardGraphProps {
    data: {
        name: string;
        verified: number;
        nonVerified: number;
        total: string;
    }[];
    title: string;
}

const AdminDashboardGraph: React.FC<AdminDashboardGraphProps> = ({ data }) => {
    useAuthOrNullRedirect(true);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="verified" stackId="a" fill="#82ca9d" name="Verified" />
                    <Bar dataKey="nonVerified" stackId="a" fill="#8884d8" name="Not Verified">
                        <LabelList
                            dataKey="total"
                            
                            position="top"
                            fill="white"
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AdminDashboardGraph;
