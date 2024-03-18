import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from 'framer-motion';

import DarkDiv from '@/components/Other/DarkDiv';
import Layout from "@/components/Other/Layout";

import GlobalContext from "@/context/globalContext";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <AnimatePresence mode='wait' >
        <DarkDiv />
        <GlobalContext>
          <Layout
            github={"https://github.com/vagnermengali"}
            linkedin={"https://www.linkedin.com/in/vagnermengali/"}
            instagram={"https://www.instagram.com/vagner.mengali/"}
            name={"Vagner Mengali"}
            email={"contatovagnermengali@gmail.com"}
            route={router.route}
          >
            <Component {...pageProps} />
          </Layout>
        </GlobalContext >
      </AnimatePresence>
    </>
  )
}

export default App;