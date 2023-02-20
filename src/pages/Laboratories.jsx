import React from "react";
import { motion } from "framer-motion";

const Laboratories = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
    >
      <div>{props.Data.mainHeading}</div>
    </motion.div>
  );
};

export default Laboratories;
