// hooks/useWebDevelopment.ts

import { useState, useEffect } from "react";
import { fetchWebDevelopment } from "../lib/network/competitions/webDevelopmentQueries";
import { WebDevelopment } from "../lib/types/competitions/webDevelopmentTypes";

const useWebDevelopment = () => {
  const [competitions, setCompetitions] = useState<WebDevelopment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCompetitions = async () => {
      const data = await fetchWebDevelopment();
      setCompetitions(data);
      setLoading(false);
    };

    loadCompetitions();
  }, []);

  return { competitions, loading };
};

export default useWebDevelopment;
