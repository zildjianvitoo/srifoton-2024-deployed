// hooks/useUiUxDesign.ts

import { useState, useEffect } from "react";
import { fetchUiUxDesign } from "../lib/network/competitions/uiUxDesignQueries";
import { UiUxDesign } from "../lib/types/competitions/uiUxDesignTypes";

const useUiUxDesign = () => {
  const [competitions, setCompetitions] = useState<UiUxDesign[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCompetitions = async () => {
      const data = await fetchUiUxDesign();
      setCompetitions(data);
      setLoading(false);
    };

    loadCompetitions();
  }, []);

  return { competitions, loading };
};

export default useUiUxDesign;
