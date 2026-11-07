import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export function ParallaxMedia({ className, range = 20, children }) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [range, -range])

  return (
    <motion.div ref={ref} className={className} style={{ y: reducedMotion ? 0 : y }}>
      {children}
    </motion.div>
  )
}
