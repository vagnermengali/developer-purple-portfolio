import Seo from "@/components/Other/Seo";
import Home from "@/components/Templates/Home";

const HomePage = () => {
  return (
    <>
      <Seo
        title="Homepage"
        description="Bem-vindo ao mundo do desenvolvimento de software inovador. Descubra como minha paixão pela tecnologia pode transformar sua visão em realidade digital."
      />
      <Home />
    </>
  );
};

export default HomePage;
