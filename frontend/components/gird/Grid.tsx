import { motion } from "framer-motion";
import { stagger } from "public/animations/framer";
import React, { ReactNode } from "react";
import styles from "./Grid.module.scss";

interface iProps {
  children: React.ReactNode;
}

const Grid = ({ children }: iProps) => {
  return (
    <motion.div
      className={styles.grid}
      exit={{ opacity: 0 }}
      initial="inital"
      animate="animate"
    >
      <motion.div variants={stagger} className={styles.gridItems}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Grid;
