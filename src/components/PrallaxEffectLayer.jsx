import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import Heading from './Heading/Heading';

const PrallaxEffectLayer = () => {

    const ref = useRef(null)

    // to track scrollYProgress based on the ref element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })


    //  animated values for the parallax effect on background and text
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div
            ref={ref}
            className='className="w-full h-screen overflow-hidden relative grid place-items-center'>
            {/* Animate the text with a parallax effect */}
            <motion.div className="font-bold  text-white relative z-10" style={{ y: textY }}>
                <Heading text={"Image slider with parallax effect"} className='!text-5xl md:!text-7xl !text-center font-bold' />
                <Heading text={"Scroll to see parallax effect and slider"} className='!text-xl !text-center font-bold mt-2 text-black' />
            </motion.div>

            {/* Animate the background image with a parallax effect */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/image-full.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY
                }}
            />

            {/* Another background layer with a parallax effect */}
            <div
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: `url(/image-bottom.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />
        </div>
    )
}

export default PrallaxEffectLayer