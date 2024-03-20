import { motion } from 'framer-motion';

import NumberPagination from "@/components/Other/NumberPagination";

import { TemplateVerticalFreeProps } from "@/interfaces/TemplateSlideVerticalProps/TemplateSlideVerticalProps";

const TemplateSlideVerticalFreeScroll = ({ children, number }: TemplateVerticalFreeProps) => {
  return (
    <motion.section
      className="container w-full h-full flex items-center justify-center flex-col relative z-10" /* teste limite */
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ transition: { duration: 100 } }}
      transition={{ duration: 1, type: "spring", delay: 0.3, damping: 15, staggerChildren: 0.5 }}
    >
      <NumberPagination number={number} />
      {children}
    </motion.section>
  );
};

export default TemplateSlideVerticalFreeScroll;
