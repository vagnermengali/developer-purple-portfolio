import { motion } from "framer-motion";

import { ChildrenDurationProps } from "@/interfaces/ChildrenProps/ChildrenProps";

const AnimatedCharactersDetailsLeft = ({ children, duration }: ChildrenDurationProps) => {
    const item = {
        hidden: {
            x: "-200%",
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85
            }
        },
        visible: {
            x: 0,
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: duration
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
            <div>
                <span style={{ overflow: "hidden", display: "inline-block" }}>
                    <motion.span style={{ display: "inline-block" }} variants={item}>
                        {children}
                    </motion.span>
                </span>
            </div>
        </motion.div>
    );
};

export default AnimatedCharactersDetailsLeft;
