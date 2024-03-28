import { useContext } from "react";
import { Abril_Fatface } from 'next/font/google'

import { GlobalContext } from "@/context/globalContext";

import { NumberPaginationProps } from "@/interfaces/HeaderProps/HeaderProps";

const abril = Abril_Fatface({
  weight: ["400"],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const NumberPagination = ({ number }: NumberPaginationProps) => {
  const { router } = useContext(GlobalContext);

  return (
    <>
      {router.pathname === "/about" && (
        <div className="flex items-center justify-center z-50 ">
          <p className={`absolute h-8 text-center lg:text-start top-4 text-brand8 whitespace-nowrap uppercase leading-tight z-50 left-8 sm:left-12 lg:left-20 text-2xl sm:text-3xl lg:text-4xl after:content-[''] after:bg-brand4 after:absolute after:m-auto after:h-1 after:bottom-4 sm:after:bottom-3 lg:after:bottom-2 after:translate-x-2/4 after:w-[50vw] after:-left-[75.5vw] ${abril.className}`}>{`0${number}`}</p>
          <span className="text-brand9 whitespace-break-spaces uppercase absolute top-4 left-20 sm:left-36 text-2xl sm:text-3xl lg:text-4xl leading-tight ">
            {`${number === 1 ? "quem sou eu" : number === 2 ? "paixão" : "conjunto de habilidades"}`}
          </span>
        </div>
      )}
    </>
  );
};

export default NumberPagination;
