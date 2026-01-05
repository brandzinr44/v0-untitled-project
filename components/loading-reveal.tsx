"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingReveal() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3200) // slightly extended for more "lazy" feel

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.4, // slower exit for premium feel
              ease: [0.76, 0, 0.24, 1], // smoother cubic-bezier
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="w-full max-w-[300px] md:max-w-[500px] px-6 mb-8">
            <svg
              viewBox="0 0 864.88 213.87"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <g className="fill-white">
                {[
                  "M10.89,201.34V11.21h37.07v190.13H10.89Z",
                  "M68.25,106.02c0-54.65,40.67-94.81,93.29-94.81s93.79,40.16,93.79,94.81-40.92,95.32-93.79,95.32-93.29-40.67-93.29-95.32ZM215.42,106.02c0-33.55-20.33-60.24-53.89-60.24s-53.63,26.69-53.63,60.24,20.33,60.75,53.63,60.75,53.89-27.2,53.89-60.75Z",
                  "M261.4,201.34v-31.78l97.18-123.66h-96.92V11.21h146.44v32.31l-97.71,123.14h100.89v34.69h-149.88Z",
                  "M460.78,202.66c-14.56,0-25.42-10.06-25.42-24.1s10.59-24.36,25.42-24.36,25.42,10.33,25.42,24.36-10.86,24.1-25.42,24.1ZM446.75,144.14l-9.27-132.93h46.61l-9.53,132.93h-27.8Z",
                  "M547.09,68.67v132.67h-36.81V11.21h43.43l82.88,126.05V11.21h37.07v190.13h-39.46l-87.12-132.67Z",
                  "M697.75,201.34V11.21h74.41c47.93,0,75.73,22.24,75.73,61.7,0,25.69-15.89,46.08-42.9,55.08l48.99,73.35h-47.93l-42.9-67.26h-25.16v67.26h-40.25ZM738,100.98h32.31c24.36,0,37.34-9.53,37.34-28.07s-12.97-28.33-37.34-28.33h-32.31v56.4Z",
                ].map((path, i) => (
                  <motion.path
                    key={i}
                    d={path}
                    initial={{ y: "60%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1], // more lazy, elegant easing
                      delay: 0.2 + i * 0.12, // staggered slide up
                    }}
                  />
                ))}
              </g>
            </svg>
          </div>

          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 text-xs tracking-[0.3em] uppercase font-mono"
          >
            
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
