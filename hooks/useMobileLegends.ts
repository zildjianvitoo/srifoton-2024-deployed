// hooks/useMobileLegends.ts

import { useState, useEffect } from "react";
import { fetchMobileLegends } from "../lib/network/competitions/mobileLegendsQueries";
import { MobileLegends } from "../lib/types/competitions/mobileLegendsTypes";

const useMobileLegends = () => {
  const [competitions, setCompetitions] = useState<MobileLegends[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCompetitions = async () => {
      const data = await fetchMobileLegends();
      setCompetitions(data);
      setLoading(false);
    };

    loadCompetitions();
  }, []);

  return { competitions, loading };
};

export default useMobileLegends;
