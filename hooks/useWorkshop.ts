// hooks/useWorkshop.ts

import { useState, useEffect } from "react";
import { fetchWorkshops } from "../lib/network/workshops/workshopQueries";
import { Workshop } from "../lib/types/workshopTypes";
import { FirebaseError } from "firebase/app";

const useWorkshop = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWorkshops = async () => {
      try {
        const data = await fetchWorkshops();
        setWorkshops(data);
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
      } finally {
        setLoading(false);
      }
      // console.error("Error fetching workshop data:", error);
    };

    loadWorkshops();
  }, []);

  return { workshops, loading, error };
};

export default useWorkshop;
