import { useState, useEffect } from "react";

function resetZero(value: any) {
  if (value < 10) {
    return "0" + value;
  }
  return value;
}

type Params = {
  targetTime: string;
};

export default function useCountdown({ targetTime }: Params) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(targetTime);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(resetZero(d));

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      setHours(resetZero(h));

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(resetZero(m));

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(resetZero(s));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { days, hours, minutes, seconds };
}
