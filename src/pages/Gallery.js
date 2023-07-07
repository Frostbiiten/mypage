import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  transform
} from "framer-motion"

const SmoothScroll = () => {
  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollY } = useScroll()
  const transform = useTransform(
    scrollY,
    [800, 1000],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <div className="scroll-container">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
        >
          <div class="relative flex flex-row border-[20px] border-yellow-500 w-max snap-both">
            <div class="h-[40vh] w-[700px] bg-blue-500 border-[15px] border-solid shrink-0 snap-center" />
            <div class="h-[40vh] w-[700px] bg-blue-500 border-[15px] border-solid shrink-0 snap-center" />
            <div class="h-[40vh] w-[700px] bg-blue-500 border-[15px] border-solid shrink-0 snap-center" />
            <div class="h-[40vh] w-[700px] bg-blue-500 border-[15px] border-solid shrink-0 snap-center" />
            <div class="h-[40vh] w-[700px] bg-blue-500 border-[15px] border-solid shrink-0 snap-center" />
          </div>
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </>
  )
}

export default SmoothScroll
