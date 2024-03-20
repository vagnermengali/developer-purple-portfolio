import { useContext } from "react";
import { motion } from "framer-motion";

import { Work } from "@/data/WorkData";

import { GlobalContext } from "@/context/globalContext";

import Card from "@/components/Other/Card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorksPage = () => {
  const { setCardHover } = useContext(GlobalContext);

  return (
    <div className="container w-screen h-full flex items-center justify-center p-5 sm:p-10"> {/* teste limite */}
      <motion.ul className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10" variants={container} initial="hidden" animate="show" onHoverEnd={() => setCardHover(false)}>
        {Work.map((d) => (
          <Card key={d.id} data={d} />
        ))}
      </motion.ul>
    </div>
  );
};

export default WorksPage;
