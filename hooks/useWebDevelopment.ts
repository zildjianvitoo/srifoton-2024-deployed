// hooks/useWebDevelopment.ts

import { useState, useEffect } from "react";
import { fetchWebDevelopment } from "../lib/network/competitions/webDevelopmentQueries";
import { WebDevelopment } from "../lib/types/competitions/webDevelopmentTypes";
import { FirebaseError } from "firebase/app";

const useWebDevelopment = () => {
  const [competitions, setCompetitions] = useState<WebDevelopment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCompetitions = async () => {
      try {
        const data = await fetchWebDevelopment();
        setCompetitions(data);
        setLoading(false);
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
        // console.error("Error fetching web development data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCompetitions();
  }, []);

  return { competitions, loading, error };
};

export default useWebDevelopment;
