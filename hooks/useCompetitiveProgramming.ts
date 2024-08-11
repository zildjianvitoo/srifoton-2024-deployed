// hooks/useCompetitiveProgramming.ts

import { useState, useEffect } from "react";
import { fetchCompetitiveProgramming } from "../lib/network/competitions/competitiveProgrammingQueries";
import { CompetitiveProgramming } from "../lib/types/competitions/competitiveProgrammingTypes";
import { FirebaseError } from "firebase/app";

const useCompetitiveProgramming = () => {
  const [competitions, setCompetitions] = useState<CompetitiveProgramming[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCompetitions = async () => {
      try {
        const data = await fetchCompetitiveProgramming();
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
        // console.error("Error fetching competitive programming data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCompetitions();
  }, []);

  return { competitions, loading, error };
};

export default useCompetitiveProgramming;
