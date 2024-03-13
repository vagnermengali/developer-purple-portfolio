import Icon from "@/components/Other/Icon";

const Passion = () => {
  return (
    <div className="w-full h-min flex justify-center items-center flex-col pt-[5.625rem] pb-10">
      <div className="w-[85%] sm:w-[70%] lg:w-[93%] flex-col lg:flex-row gap-8 sm:gap-4 lg:gap-10 flex items-center justify-center h-full">
        <div className="w-full h-full flex items-center justify-start flex-col gap-6 lg:gap-[1.6rem]">
          <Icon id="Computer" className="relative w-14 min-h-w-14 sm:w-[5.625rem] sm:min-h-[5.625rem] lg:w-[9.375rem]" />
          <h2 className="text-sm sm:text-base lg:text-[2rem] text-center break-all leading-[1.2] tracking-[0.4rem]">PROGRAMAÇÃO</h2>
          <p className="break-all leading-[1.2] text-start tracking-widest text-xs lg:text-base">
            Acredito que a programação é como uma varinha mágica para resolver problemas. Como programadores, nosso papel é criar soluções funcionais e eficientes para atender às necessidades dos usuários. Trabalhamos duro todos os dias para desenvolver código que corresponda às expectativas e requisitos dos clientes e que torne a experiência do usuário mais intuitiva e agradável. Em última análise, nosso objetivo é usar a programação como uma ferramenta para melhorar a vida das pessoas e tornar o mundo um lugar melhor.
          </p>
        </div>
        <div className="w-full h-full flex items-center justify-start flex-col gap-6 lg:gap-[1.6rem]">
          <Icon id="Chip" className="relative w-14 min-h-w-14 sm:w-[5.625rem] sm:min-h-[5.625rem] lg:w-[9.375rem]" />
          <h2 className="text-sm sm:text-base lg:text-[2rem] text-center break-all leading-[1.2] tracking-[0.4rem]">TECNOLOGIA</h2>
          <p className="break-all leading-[1.2] text-start tracking-widest text-xs lg:text-base">
            A tecnologia tem o poder de mudar o mundo e a vida das pessoas, como diz o ditado: Qualquer tecnologia suficientemente avançada é indistinguível de magia. Como desenvolvedor de software, sempre me esforço para me manter atualizado com as últimas tecnologias e me adaptar às mudanças. Acredito que difundir a inovação é uma missão compartilhada por todos os envolvidos na criação de tecnologia, desde programadores e designers até engenheiros. Juntos, podemos desenvolver soluções criativas e funcionais que melhorem a vida das pessoas e impulsionem a sociedade para frente.
          </p>
        </div>
        <div className="w-full h-full flex items-center justify-start flex-col gap-6 lg:gap-[1.6rem]">
          <Icon id="Book" className="relative w-14 min-h-w-14 sm:w-[5.625rem] sm:min-h-[5.625rem] lg:w-[9.375rem]" />
          <h2 className="text-sm sm:text-base lg:text-[2rem] text-center break-all leading-[1.2] tracking-[0.4rem]">HISTÓRIA</h2>
          <p className="break-all leading-[1.2] text-start tracking-widest text-xs lg:text-base">
            Acredito que a leitura pode ter um grande impacto na vida das pessoas, pois as histórias têm o poder de chamar a atenção e tornar as coisas mais fáceis de entender e lembrar. Quando lemos, somos transportados para outros mundos e realidades, aprendemos novas perspectivas e nos tornamos mais empáticos e compreensivos. Acredito que a literatura é uma ferramenta poderosa para mudar vidas e moldar o pensamento humano. Por isso, procuro sempre estudar diferentes padrões narrativos e aplicá-los em minha própria produção, para contar histórias com significado e impacto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Passion;
