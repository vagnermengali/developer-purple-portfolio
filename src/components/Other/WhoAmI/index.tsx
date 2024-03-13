import Image from "next/image";

const WhoAmI = () => {
  return (
    <div className="w-full h-fit px-5 py-20 sm:px-10 flex items-center justify-center flex-col">
      <div className="w-full gap-8 sm:gap-10 h-3/4 flex items-center justify-end">
        <div className="flex items-center justify-center flex-col lg:flex-row w-full lg:w-1/2 min-h-full gap-8 lg:gap-7">
          <div className="w-full h-full flex items-start justify-between flex-col gap-8 sm:gap-5 lg:gap-8">
            <h2 className="text-sm sm:text-2xl lg:text-3xl text-center leading-tight tracking-down break-all uppercase">Vagner Mengali</h2>
            <p className="text-start tracking-widest leading-tight break-all text-xs sm:text-sm lg:text-base">
              Desde criança, sou fascinado por tecnologia, sempre alimentando minha curiosidade nessa área. O que começou como um hobby rapidamente se tornou uma paixão, levando-me a buscar constantemente conhecimento e a explorar diferentes aspectos, inclusive identificando falhas relacionadas a recursos e moedas virtuais em jogos.
              <br />
              Ao longo do tempo, tive a oportunidade de me envolver em uma variedade de projetos que me permitiram crescer profissionalmente. Com uma trajetória de 3 anos como desenvolvedor, também tenho interesse em UX (experiência do usuário) e sou um entusiasta dos jogos.
            </p>
            <Image
              width={0}
              height={0}
              sizes="100%"
              className="w-full h-auto"
              src={"/vagner-mengali-landscape.webp"}
              alt="Vagner Mengali"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
