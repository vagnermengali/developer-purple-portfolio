/* export const TransitionVariants = {
    initial: {
        height: "100%",
    },
    animate: {
        height: "0%",
    },
    exit: {
        height: ["0%", "100%"],
    },
}; */


export const TransitionVariants = {
    initial: {
        translateY: "0%",
    },
    animate: {
        translateY: "-100%",
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        translateY: "0%",
        transition: {
            duration: 0.3,
        },
    },
};
