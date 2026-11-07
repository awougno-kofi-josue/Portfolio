import { motion } from 'framer-motion'

const offsets = {
  up: { y: 16, x: 0 },
  down: { y: -16, x: 0 },
  left: { x: -16, y: 0 },
  right: { x: 16, y: 0 },
  none: { x: 0, y: 0 },
}

export function Reveal({
  as = 'div',
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className,
  children,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div
  const offset = offsets[direction] ?? offsets.up

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
