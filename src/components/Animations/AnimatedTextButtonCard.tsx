import { motion } from "framer-motion";

import { ChildrenDurationProps } from "@/interfaces/ChildrenProps/ChildrenProps";

const AnimatedTextButtonCard = ({ children, duration, hover }: ChildrenDurationProps) => {
    const itemDown = {
        hidden1: {
            y: "200%",
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85
            }
        },
        visible1: {
            y: 0,
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

    const itemBottom = {
        hidden2: {
            y: "0",
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85
            }
        },
        visible2: {
            y: "200%",
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: duration
            }
        }
    };

    return (
        <>
            {hover ? (
                <motion.div initial="hidden1" animate={"visible1"} variants={container}>
                    <div>
                        <span style={{ overflow: "hidden", display: "block", width: "100%", }}>
                            <motion.span style={{ display: "block", width: "100%", }} variants={itemDown}>
                                {children}
                            </motion.span>
                        </span>
                    </div>
                </motion.div>
            ) : (
                <motion.div initial="hidden2" animate={"visible2"} variants={container}>
                    <div>
                        <span style={{ overflow: "hidden", display: "block", width: "100%", }}>
                            <motion.span style={{ display: "block", width: "100%", }} variants={itemBottom}>
                                {children}
                            </motion.span>
                        </span>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default AnimatedTextButtonCard;
