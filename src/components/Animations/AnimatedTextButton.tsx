import { motion } from "framer-motion";

import { ChildrenDurationProps } from "@/interfaces/ChildrenProps/ChildrenProps";

const AnimatedTextButton = ({ children, duration, width, animate }: ChildrenDurationProps) => {
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
        <>
            {animate ? (
                <motion.div initial="hidden" animate={"visible"} variants={container}>
                    <div>
                        <span style={{ overflow: "hidden", display: "block", width: width }}>
                            <motion.span style={{ display: "block", width: "100%", paddingRight: "1.25rem" }} variants={item}>
                                {children}
                            </motion.span>
                        </span>
                    </div>
                </motion.div>
            ) : (
                <motion.div initial="hidden" whileInView={"visible"} variants={container}>
                    <div>
                        <span style={{ overflow: "hidden", display: "block", width: width }}>
                            <motion.span style={{ display: "block", width: "100%", paddingRight: "1.25rem" }} variants={item}>
                                {children}
                            </motion.span>
                        </span>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default AnimatedTextButton;
