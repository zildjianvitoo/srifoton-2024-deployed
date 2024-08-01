// hooks/useSeminars.ts

import { useState, useEffect } from "react";
import { fetchSeminars } from "../lib/network/seminars/seminarQueries";
import { Seminar } from "../lib/types/seminarTypes";

const useSeminars = () => {
  const [seminars, setSeminars] = useState<Seminar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadSeminars = async () => {
      const data = await fetchSeminars();
      setSeminars(data);
      setLoading(false);
    };

    loadSeminars();
  }, []);

  return { seminars, loading };
};

export default useSeminars;
