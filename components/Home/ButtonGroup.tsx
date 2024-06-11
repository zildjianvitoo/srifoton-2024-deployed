"use client";

import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

type Props = {};

export default function ButtonGroup({}: Props) {
  const { setTheme } = useTheme();

  return (
    <>
      <Button className="" onClick={() => setTheme("light")}>
        Ganti Tema ke Terang
      </Button>
      <Button className="" onClick={() => setTheme("dark")}>
        Ganti Tema ke Gelap
      </Button>
    </>
  );
}
