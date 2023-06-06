import { useState, useEffect, useRef } from "react";
import React from "react";
import { motion } from 'framer-motion'
import './Carousel.css'

import roupa7 from './Roupa/roupa8.jpeg'
import roupa5 from './Roupa/roupa5.jpeg'
import roupa4 from './Roupa/roupa9.jpeg'
import roupa6 from './Roupa/roupa6.jpeg'
import roupa9 from './Roupa/roupa4.jpeg'
import roupa8 from './Roupa/roupa7.jpeg'

const images = [roupa4, roupa5, roupa6, roupa7, roupa8, roupa9]

function Carousel() {
    const ref = useRef();
    const [ width, setWidth] = useState(0)

    
        useEffect(() => {
            console.log(ref.current?.scrollWithd, ref.current?.offsetWidth)
            setWidth(ref.current?.scrollWithd - ref.current?.offsetWidth)
        }, [])
    


    return (
        <div className="Carousel">
            
            <motion.div ref={ref} className="caixa" whileTap={{ cursor: "grabbing" }} >
                <motion.div
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: window.innerWidth - 1000, left:  -1000}}
                    initial={{ x: 100}}
                    animate={{ x: 0}}
                    transition={{duration: 0.8}}
                    
                >

                    {images.map(image => (
                        <motion.div className="item" key={image}>
                            <img src={image} alt="texto alt" />
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </div>
    )
}

export default Carousel