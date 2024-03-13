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
        <motion.div initial="hidden" whileInView={"visible"} variants={container}>
            <div style={{ position: "absolute", right: "-7.5490%", bottom: " 7%", zIndex: 4 }}>
                <span style={{ overflow: "hidden", display: "block" }}>
                    <motion.span style={{ display: "block" }} variants={item}>
                        {children}
                    </motion.span>
                </span>
            </div>
        </motion.div>
    );
};

export default AnimatedCharactersNumber;
