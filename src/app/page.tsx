"use client"
import { useState } from "react";
import { Menu } from "./components/Menu";

export default function Home() {

  const [corFundo, setCorFundo] = useState<string>('#239895')

  return (
    <>
      <Menu />
    </>
  );
}
