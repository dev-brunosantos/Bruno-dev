"use client"
import { Menu } from "./components/Menu";
import Inicio from "./pages/Inicio"
import Sobre from "./pages/Sobre"
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";

export default function App() {
  return (
    <>
      {/* <Menu /> */}
      <main>
        <Inicio />
        {/* <Sobre /> */}
        <Projetos />
      </main>
      <footer>
        <Contatos />
      </footer>
    </>
  );
}
