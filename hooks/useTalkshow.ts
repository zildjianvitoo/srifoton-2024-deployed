// hooks/useTalkshows.ts

import { useState, useEffect } from "react";
import { fetchTalkshows } from "../lib/network/talkshows/talkshowQueries";
import { Talkshow } from "../lib/types/talkshowTypes";
import { FirebaseError } from "firebase/app";

const useTalkshows = () => {
  const [talkshows, setTalkshows] = useState<Talkshow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTalkshows = async () => {
      try {
        const data = await fetchTalkshows();
        setTalkshows(data);
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
        // console.error("Error fetching talkshow data:", error);
      } finally {
        setLoading(false);
      }
      // console.error("Error fetching talkshow data:", error
    };

    loadTalkshows();
  }, []);

  return { talkshows, loading, error };
};

export default useTalkshows;
