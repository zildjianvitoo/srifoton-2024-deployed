// hooks/useSegmentData.ts

import { useEffect, useState } from "react";
import { fetchAllSegmentsData } from "@/lib/network/segments/segmentQueries";
import { SegmentData } from "@/lib/types/segmentDataTypes";

const useSegmentData = () => {
  const [data, setData] = useState<SegmentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);  // Ensure loading state is true before fetching
        const segmentData: SegmentData = await fetchAllSegmentsData();
        if (isMounted) {
          setData(segmentData);
        }
      } catch (error) {
        console.error("Error fetching segment data:", error);
        if (isMounted) {
          setError("Failed to load data");
        }
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
