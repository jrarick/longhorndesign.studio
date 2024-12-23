import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'react-router'
import brushStroke from '~/assets/brush-stroke.png'
import canyonBackground from '~/assets/canyon-background.webp'
import { TextEffect } from '../animations/text-effect'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const yValue = useTransform(scrollYProgress, [0, 1], [0, -1200])

  return (
    <div
      ref={heroRef}
      className="relative isolate -mt-28 overflow-hidden bg-stone-950/85 pt-24"
    >
      <div className="absolute inset-0">
        <motion.img
          style={{ y: yValue }}
          src={canyonBackground}
          alt=""
          className="h-full w-full object-cover mix-blend-multiply"
        />
      </div>
      <div className="relative flex flex-col items-center py-52">
        <h1 className="flex flex-col items-center">
          <TextEffect
            as="div"
            per="char"
            className="inline-flex text-[1.575rem] font-semibold uppercase tracking-wide text-marzipan-200 sm:text-[2.45rem] md:text-[3.5rem]"
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
                  filter: 'blur(10px) brightness(0%)',
                  rotateX: 90,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  filter: 'blur(0px) brightness(100%)',
                  transition: {
                    duration: 1.3,
                  },
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
                  filter: 'blur(10px) brightness(0%)',
                  rotateX: 60,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  filter: 'blur(0px) brightness(100%)',
                  transition: {
                    duration: 1.3,
                  },
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
              filter: 'blur(10px) brightness(0%)',
            },
            visible: {
              opacity: 1,
              filter: 'blur(0px) brightness(100%)',
              transition: {
                delay: 2.2,
                duration: 0.7,
              },
            },
          }}
          className="mt-6 sm:mt-8 md:mt-12"
        >
          <Link
            to="/get-started"
            className="bg-contain bg-center bg-no-repeat px-16 py-6 text-lg font-semibold text-marzipan-200 transition-colors duration-200 hover:text-marzipan-100 sm:px-24 sm:py-8 sm:text-xl"
            style={{
              backgroundImage: `url(${brushStroke})`,
            }}
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
