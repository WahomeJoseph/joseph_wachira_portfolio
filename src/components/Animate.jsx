import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const Animate = ({ children }) => {

    const controls = useAnimation()
    const [ref, setRef] = useState(null)

    useEffect(() => {
        if (!ref) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                controls.start('visible')
            }
        }, { threshold: 0.1 })

        observer.observe(ref)

        return () => observer.disconnect()
    }, [controls, ref])
    return (
        <motion.div
            ref={setRef}
            initial='hidden'
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    )
}

Animate.propTypes = {
    children: PropTypes.node.isRequired,
}