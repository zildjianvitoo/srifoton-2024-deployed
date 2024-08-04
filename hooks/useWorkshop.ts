// hooks/useWorkshop.ts

import { useState, useEffect } from "react";
import { fetchWorkshops } from "../lib/network/workshops/workshopQueries";
import { Workshop } from "../lib/types/workshopTypes";

const useWorkshop = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadWorkshops = async () => {
      const data = await fetchWorkshops();
      setWorkshops(data);
      setLoading(false);
    };

    loadWorkshops();
  }, []);

  return { workshops, loading };
};

export default useWorkshop;
