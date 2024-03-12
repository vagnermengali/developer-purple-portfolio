import { motion } from "framer-motion";

import { ChildrenProps } from "@/interfaces/ChildrenProps/ChildrenProps";

const AnimatedCharactersSidebar = ({ children }: ChildrenProps) => {
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
                duration: 0.75
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
        <>
            <motion.li initial="hidden" whileInView={"visible"} variants={container}>
                <div>
                    <span style={{ overflow: "hidden", display: "inline-block" }}>
                        <motion.span style={{ display: "inline-block" }} variants={item}>
                            {children}
                        </motion.span>
                    </span>
                </div>
            </motion.li>
        </>
    );
};

export default AnimatedCharactersSidebar;
