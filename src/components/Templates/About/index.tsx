import { useContext } from "react";

import { GlobalContext } from "@/context/globalContext";

import TemplateRoute from "@/components/Templates/TemplateRoute";
import TemplateSlide from "@/components/Templates/TemplateSlideVertical/FreeScroll";
import WhoAmI from "@/components/Other/WhoAmI";
import Passion from "@/components/Other/Passion";
import SkillSet from "@/components/Other/SkillSet";

const About = () => {
  const { isMobile, isTablet } = useContext(GlobalContext);

  return (
    <section className="w-screen h-full bg-gradient2">
      <TemplateRoute
        image={isMobile ? "/about-mobile.webp" : isTablet ? "/-mobile.webp" : "/about.webp"}
        title={"Sobre Mim"}
        details={"Eu amo Design, Tecnologia e Histórias."}
        textButton={"Mais sobre mim"}
        link={"https://www.linkedin.com/in/vagnermengali/"}
        email={"contatovagnermengali@gmail.com"}
        github={"https://github.com/vagnermengali"}
      >
        <TemplateSlide number={1}>
          <WhoAmI />
        </TemplateSlide>
        <TemplateSlide number={2}>
          <Passion />
        </TemplateSlide>
        <TemplateSlide number={3}>
          <SkillSet />
        </TemplateSlide>
      </TemplateRoute>
    </section>
  );
};

export default About;
