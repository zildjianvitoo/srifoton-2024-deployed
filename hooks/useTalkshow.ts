// hooks/useTalkshows.ts

import { useState, useEffect } from "react";
import { fetchTalkshows } from "../lib/network/talkshows/talkshowQueries";
import { Talkshow } from "../lib/types/talkshowTypes";

const useTalkshows = () => {
  const [talkshows, setTalkshows] = useState<Talkshow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTalkshows = async () => {
      const data = await fetchTalkshows();
      setTalkshows(data);
      setLoading(false);
    };

    loadTalkshows();
  }, []);

  return { talkshows, loading };
};

export default useTalkshows;
