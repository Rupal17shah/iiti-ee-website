import { Box } from '@mui/system'
import React from 'react'
import AboutUs from './AboutUs'
import { motion } from "framer-motion";
import Events from './Events'
const Body = () => {
  return (
    <>
      <Box sx={{ px: 10 }}>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
        >
          <Events />
        </motion.div>
        <AboutUs />
      </Box>


    </>
  )
}

export default Body