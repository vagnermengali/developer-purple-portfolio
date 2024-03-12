import Seo from "@/components/Other/Seo";
import Work from "@/components/Templates/Work";

const WorkPage = () => {
  return (
    <>
      <Seo
        title="Meus Trabalhos • Portfólio"
        routes="work"
        description="Projetos de software que definem novos padrões de excelência. Veja como minhas habilidades podem transformar sua ideia em um sucesso tecnológico."
      />
      <Work />
    </>
  );
};

export default WorkPage;
