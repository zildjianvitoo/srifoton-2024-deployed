// hooks/useSegmentData.ts

import { useEffect, useState } from "react";
import { fetchAllSegmentsData } from "@/lib/network/segments/segmentQueries";
import { SegmentData } from "@/lib/types/segmentDataTypes";
import { FirebaseError } from "firebase/app";

const useSegmentData = () => {
  const [data, setData] = useState<SegmentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);  
        const segmentData: SegmentData = await fetchAllSegmentsData();
        if (isMounted) {
          setData(segmentData);
        }
      } catch (error) {
        if (isMounted) {
          if (error instanceof FirebaseError) {
            if (error.code === 'permission-denied') {
              setError("permission-denied");
            } else {
              setError("Failed to load data");
            }
          } else {
            setError("An unexpected error occurred.");
          }
        }
        console.error("Error fetching segment data:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []); 

  return { data, loading, error };
};

export default useSegmentData;
