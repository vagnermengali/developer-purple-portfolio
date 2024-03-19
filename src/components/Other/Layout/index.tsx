import { Jost } from 'next/font/google'
import { AnimatePresence } from "framer-motion";

import Header from "@/components/Other/Header";
import Footer from "@/components/Other/Footer";

const jost = Jost({
    weight: ['300', '400', '500', '700', '800'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})


const Layout = ({ github, linkedin, instagram, name, email, route, children }: any) => {
    return (
        <AnimatePresence mode="wait">
            <div className={`overflow-x-hidden h-dvh  max-h-dvh ${jost.className}`}>
                <Header
                    github={github}
                    linkedin={linkedin}
                    instagram={instagram}
                    name={name}
                    route={route}
                />
                <main>{children}</main>
                <Footer email={email} github={github} />
            </div>
        </AnimatePresence>
    );
};

export default Layout;
