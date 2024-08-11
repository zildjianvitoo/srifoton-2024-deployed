// hooks/useUiUxDesign.ts

import { useState, useEffect } from "react";
import { fetchUiUxDesign } from "../lib/network/competitions/uiUxDesignQueries";
import { UiUxDesign } from "../lib/types/competitions/uiUxDesignTypes";
import { FirebaseError } from "firebase/app";

const useUiUxDesign = () => {
  const [competitions, setCompetitions] = useState<UiUxDesign[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCompetitions = async () => {
      try {
        const data = await fetchUiUxDesign();
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
        // console.error("Error fetching ui/ux design data:", error);
      }
    };

    loadCompetitions();
  }, []);

  return { competitions, loading, error };
};

export default useUiUxDesign;
