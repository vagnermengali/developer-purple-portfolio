import { motion } from "framer-motion";

import { TransitionVariants } from "@/components/Animations/Transition";

const Transition = () => {

    return (
        <motion.div
        >
            <motion.div className="fixed top-0 w-screen h-dvh bottom-full z-50 transition-height duration-300 ease-linear bg-black" variants={TransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.1, duration: 0.1 }} >
            </motion.div>
        </motion.div>
    );
};

export default Transition;