// components/Admin-Dashbord/AddDummyDataButton.tsx

"use client";

import React, { useState } from "react";
import { addDummyData, deleteAllDummyData } from "../../lib/network/dummy/addDummyData"; // Adjust the import according to your project structure
import { Button } from "../ui/button";

const AddDummyDataButton: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleAddDummyData = async () => {
        setLoading(true);
        try {
            await addDummyData();
            alert("Dummy data added successfully");
        } catch (error) {
            console.error("Error adding dummy data:", error);
            alert("Failed to add dummy data");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteDummyData = async () => {
        setLoading(true);
        try {
            await deleteAllDummyData();
            alert("Dummy data deleted successfully");
        } catch (error) {
            console.error("Error deleting dummy data:", error);
            alert("Failed to delete dummy data");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ul>
            <li className="me-0 pe-0 font-monument">
                <Button size={"sm"} variant={"srifoton"} onClick={handleAddDummyData} disabled={loading}>
                    {loading ? <span className="spinner"></span> : "Add Dummy Data"}
                </Button>
            </li>
            {/* Give Some Space Down Here */}
            <div className="mb-2"></div>

            <li className="me-0 pe-0 font-monument">
                <Button size={"sm"} variant={"srifoton"} onClick={handleDeleteDummyData} disabled={loading}>
                    {loading ? <span className="spinner"></span> : "Delete Dummy Data"}
                </Button>
            </li>
        </ul>
    );
};

export default AddDummyDataButton;
