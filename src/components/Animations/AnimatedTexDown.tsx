import { motion } from "framer-motion";

import { ChildrenProps } from "@/interfaces/ChildrenProps/ChildrenProps";

const AnimatedCharactersNumber = ({ children }: ChildrenProps) => {
    const item = {
        hidden: {
            y: "200%",
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85
            }
        },
        visible: {
            y: 0,
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 2
            }
        }
    };

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };

    return (
        <motion.div initial="hidden" animate={"visible"} variants={container}>
            <div>
                <span style={{ overflow: "hidden", display: "block", width: "100%" }}>
                    <motion.span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }} variants={item}>
                        {children}
                    </motion.span>
                </span>
            </div>
        </motion.div>
    );
};

export default AnimatedCharactersNumber;
