import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion"
import { ChildrenProps } from "@/interfaces/ChildrenProps/ChildrenProps";
import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";

const AnimatedCharactersSidebar = ({ children }: ChildrenProps) => {
    const { isSideBarVisible } = useContext(GlobalContext)

    const item = {
        hidden: {
            y: 200,
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.4,
                staggerChildren: 0.025
            }
        },
        visible: {
            y: 0,
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 1,
                staggerChildren: 0.025,
                delay: .2
            }
        },
        exit: {
            y: 200,
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: .4,
                staggerChildren: 0.025
            }
        }
    };

    return (
        <AnimatePresence>
            {children && (
                <motion.div
                    initial="hidden"
                    animate={isSideBarVisible ? "visible" : "hidden"}
                    exit="exit"
                >
                    <div>
                        <span
                            style={{
                                overflow: "hidden",
                                display: "block"
                            }}
                        >
                            <motion.span
                                style={{
                                    display: "block"
                                }}
                                variants={item}
                            >
                                {children}
                            </motion.span>
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AnimatedCharactersSidebar;