"use client"
import { Menu } from "./components/Menu";
import Inicio from "./pages/Inicio"
import Sobre from "./pages/Sobre"
import Projetos from "./pages/Projetos";

export default function App() {
  return (
    <>
      <Menu />
      <main>
        <Inicio />
        {/* <Projetos /> */}
      </main>
    </>
  );
}
