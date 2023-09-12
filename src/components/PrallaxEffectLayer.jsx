import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import Heading from './Heading/Heading';

const PrallaxEffectLayer = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div
            ref={ref}
            className='className="w-full h-screen overflow-hidden relative grid place-items-center'>
            <motion.div className="font-bold  text-white relative z-10" style={{ y: textY }}>
                <Heading text={"Image slider with parallax effect"} className='!text-5xl md:!text-7xl !text-center font-bold' />
                <Heading text={"Scroll to see parallax effect and slider"} className='!text-xl !text-center font-bold mt-2 text-black' />
            </motion.div>
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/image-full.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY
                }}
            />

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