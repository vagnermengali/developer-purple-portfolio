import Seo from "@/components/Other/Seo";
import About from "@/components/Templates/About";

const AboutPage = () => {
  return (
    <>
      <Seo
        title="Sobre mim • Portfólio"
        routes="about"
        description="Conheça o desenvolvedor apaixonado por trás do código. Saiba mais sobre minha jornada, habilidades e compromisso com a excelência técnica."
      />
      <About />
    </>
  );
};

export default AboutPage;
