import { Menu } from "@/components/Menu";
import Home from "./pages/Home";
import Sobre from "./pages/sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";

export default function App() {
  return (
    <>
      <Menu />
      <main>
        <Home />
        <Sobre />
        <Projetos />
      </main>
      <footer>
        <Contatos />
      </footer>
    </>
  );
}
