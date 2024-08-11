// hooks/useMobileLegends.ts

import { useState, useEffect } from "react";
import { fetchMobileLegends } from "../lib/network/competitions/mobileLegendsQueries";
import { MobileLegends } from "../lib/types/competitions/mobileLegendsTypes";
import { FirebaseError } from "firebase/app";

const useMobileLegends = () => {
  const [competitions, setCompetitions] = useState<MobileLegends[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCompetitions = async () => {
      try {
        const data = await fetchMobileLegends();
        setCompetitions(data);
      } catch (error) {
        if (error instanceof FirebaseError) {
          if (error.code === "permission-denied") {
            setError("permission-denied");
          } else {
            setError("Failed to load data");
          }
        } else {
          setError("An unexpected error occurred.");
        }
        // console.error("Error fetching mobile legends data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCompetitions();
  }, []);

  return { competitions, loading, error };
};

export default useMobileLegends;
