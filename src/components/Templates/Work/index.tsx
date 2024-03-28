import { useContext } from "react";

import { GlobalContext } from "@/context/globalContext";

import TemplateRoute from "@/components/Templates/TemplateRoute";
import Works from "@/components/Other/Work";

const Work = () => {
  const { isMobile, isTablet } = useContext(GlobalContext);

  return (
    <section className="w-screen h-full bg-gradient2">
      <TemplateRoute
        image={"/work.webp"}
        title={"Meus Trabalhos"}
        details={"Lista de todos os trabalhos e projetos feitos por mim."}
        textButton={"Todos os trabalhos"}
        link={"https://github.com/vagnermengali?tab=repositories"}
        email={"contatovagnermengali@gmail.com"}
        github={"https://github.com/vagnermengali"}
      >
        <Works />
      </TemplateRoute>
    </section>
  );
};

export default Work;
