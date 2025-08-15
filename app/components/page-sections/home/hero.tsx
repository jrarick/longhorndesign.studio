"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { TextEffect } from "app/components/animations/text-effect"
import Link from "next/link"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const yValue = useTransform(scrollYProgress, [0.02, 1], [0, 350])
  const opacityValue = useTransform(scrollYProgress, [0.4, 0.8], [1, 0])

  return (
    <div ref={heroRef}>
      <div className="relative isolate -mt-28 overflow-hidden pt-28">
        <motion.div
          className="absolute inset-0 bg-linear-to-b from-stone-750 to-stone-950 from-65% opacity-100"
          style={{ opacity: opacityValue }}
        >
          <motion.img
            style={{ y: yValue }}
            src="/canyon-background.webp"
            alt="Hand drawn picture of two cowboys riding horses through a canyon"
            className="h-full w-full object-cover mix-blend-multiply will-change-auto"
          />
        </motion.div>
        <motion.div
          className="relative flex flex-col items-center py-52"
          style={{ opacity: opacityValue }}
        >
          <h1 className="flex flex-col items-center">
            <TextEffect
              as="div"
              per="char"
              className="inline-flex text-[1.575rem] font-semibold uppercase tracking-wide text-marzipan-200 sm:text-[2.45rem] md:text-[3.5rem]"
              speedSegment={0.25}
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.02 },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    filter: "blur(10px) brightness(0%)",
                    rotateX: 90,
                    y: 10,
                    x: -10,
                  },
                  visible: {
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                    x: 0,
                    filter: "blur(0px) brightness(100%)",
                  },
                },
              }}
            >
              The New Frontier
            </TextEffect>
            <TextEffect
              as="div"
              per="char"
              delay={0.8}
              className="inline-flex font-display text-[4.5rem] uppercase leading-none text-marzipan-200 sm:text-[7rem] md:text-[10rem]"
              speedSegment={0.25}
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.02,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    filter: "blur(10px) brightness(0%)",
                    rotateX: 75,
                    y: 10,
                    x: -10,
                  },
                  visible: {
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                    x: 0,
                    filter: "blur(0px) brightness(100%)",
                  },
                },
              }}
            >
              Of Web Design
            </TextEffect>
          </h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                filter: "blur(5px) brightness(0%)",
                y: 5,
              },
              visible: {
                opacity: 1,
                filter: "blur(0px) brightness(100%)",
                y: 0,
                transition: {
                  delay: 2.2,
                  duration: 0.7,
                },
              },
            }}
            className="mt-6 sm:mt-8 md:mt-12"
          >
            <Link
              href="#contact"
              className="bg-contain bg-center bg-no-repeat px-16 py-6 text-lg font-semibold text-marzipan-200 transition-colors duration-200 hover:text-marzipan-100 sm:px-24 sm:py-8 sm:text-xl"
              style={{
                backgroundImage: `url(/brush-stroke.png)`,
              }}
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
