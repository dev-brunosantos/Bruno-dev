"use client"
import { MenuComponent } from "@/components/MenuComponent";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";

export default function App() {
  return (
    <>
      {/* CABEÇALHO E MENU DO PROJETO */}
      <MenuComponent />
      {/* CORPO DO PROJETO */}
      <main>
        <Home />
        <Sobre />
        <Projetos />
      </main>
      {/* RODAPÉ DO PROJETO */}
      <footer>
        <Contatos />
      </footer>
    </>
  );
}
