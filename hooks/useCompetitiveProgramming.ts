// hooks/useCompetitiveProgramming.ts

import { useState, useEffect } from "react";
import { fetchCompetitiveProgramming } from "../lib/network/competitions/competitiveProgrammingQueries";
import { CompetitiveProgramming } from "../lib/types/competitions/competitiveProgrammingTypes";

const useCompetitiveProgramming = () => {
  const [competitions, setCompetitions] = useState<CompetitiveProgramming[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCompetitions = async () => {
      const data = await fetchCompetitiveProgramming();
      setCompetitions(data);
      setLoading(false);
    };

    loadCompetitions();
  }, []);

  return { competitions, loading };
};

export default useCompetitiveProgramming;
