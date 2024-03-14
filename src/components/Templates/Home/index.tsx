import { useContext } from "react";

import { GlobalContext } from "@/context/globalContext";

import Fullpage from "@/components/Other/Fullpage";
import TemplateSlide from "@/components/Templates/TemplateSlideVertical/PresetScroll";

const Home = () => {
  const { isMobile, isTablet } = useContext(GlobalContext);

  return (
    <section className="bg-gradient2 overflow-hidden">
      <Fullpage
        main={
          <TemplateSlide
            title={"VAGNER MENGALI"}
            details={"Desenvolvedor de software."}
            section={"/main"}
            number={""}
            img={"/vagner-mengali.webp"}
            home
            cursor={false}
          />
        }
        work={
          <TemplateSlide
            title={"Meus Trabalhos"}
            details={"Lista de todos os trabalhos e projetos feitos por mim."}
            textButton={"Mostre-me mais"}
            section={"/work"}
            number={"01"}
            img={isMobile ? "/work-mobile.webp" : isTablet ? "/work-mobile.webp" : "/work.webp"}
            cursor={true}
          />
        }
        about={
          <TemplateSlide
            title={"Sobre Mim"}
            details={"Eu amo Design, Tecnologia e Histórias."}
            textButton={"Mostre-me mais"}
            section={"/about"}
            number={"02"}
            img={isMobile ? "/about-mobile.webp" : isTablet ? "/about-mobile.webp" : "/about.webp"}
            cursor={true}
          />
        }
        contact={
          <TemplateSlide
            title={"Entre em Contato"}
            section={"/contact"}
            number={"03"}
            link
            email={"contatovagnermengali@gmail.com"}
            github={"https://github.com/vagnermengali"}
            linkedin={"https://www.linkedin.com/in/vagnermengali/"}
            instagram={"https://www.instagram.com/vagner.mengali/"}
            img={isMobile ? "/contact-mobile.webp" : isTablet ? "/contact-mobile.webp" : "/contact.webp"}
            cursor={false}
          />
        }
      />
    </section>
  );
};

export default Home;
