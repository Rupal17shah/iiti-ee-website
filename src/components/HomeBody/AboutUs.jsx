import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <>
            <Box sx={{ py: 5 }}>
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
                >
                    <span className="capitalize text-4xl font-bold">
                        About-Us
                    </span>
                </motion.h1>

                <Box sx={{ py: 3 }}>
                    <motion.div
                        className='w-full'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 50 }}>
                        <Typography variant='p'>
                            Welcome to the website of the Department of Electrical Engineering, IIT Indore.<br />

                            The department offers B.Tech, M.S (Research), M.Tech and Ph.D. programs in Electrical Engineering. The department currently has 15 faculty members with expertise in diverse areas including Power Systems and Power Electronics, Integration of Renewable Energy Sources, Smart Grid, Nanotechnology and Nanoelectronics, Communications and Networking, Signal Processing, Bio-photonics. In tune with the inter–disciplinary research philosophy of IIT Indore, an effort is made to promote internal and external collaborations.<br />

                            Electrical Engineering at IIT Indore aims to play an active role in propelling India in its growth trajectory through innovative inter–disciplinary research and educational programs at undergraduate and postgraduate levels.<br />

                        </Typography>
                    </motion.div>
                </Box>
            </Box>
        </>
    )
}
