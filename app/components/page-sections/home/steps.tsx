"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";

type Blurb = {
  id: number;
  title: string;
  content: string;
  image: {
    src: string;
    alt: string;
  };
};

const blurbs: Blurb[] = [
  {
    id: 1,
    title: "First: Plan",
    content:
      "We'll have discussions to understand business goals, target audience, brand identity, and specific requirements. We conduct research, define project scope, and develop a project roadmap that will guide the next steps of the design process.",
    image: {
      src: "/cowboys-planning.webp",
      alt: "Cowboys planning heist in a den",
    },
  },
  {
    id: 2,
    title: "Second: Prepare",
    content:
      "This involves procuring digital assets, creating mockups, curating color palettes and typography, and developing a cohesive design system. We'll also lock down technology choices that we'll build with in the upcoming phase.",
    image: {
      src: "/cowboy-saddling-horse.webp",
      alt: "Cowboy putting a saddle on a horse in the evening",
    },
  },
  {
    id: 3,
    title: "Third: Execute",
    content:
      "We'll convert static mockups into dynamic, responsive web interfaces. We build a live prototype of the website and ensure cross-browser and device compatibility. Meticulous attention is paid to both visual design and technical performance.",
    image: {
      src: "/cowboy-ranching.webp",
      alt: "Rancher with a lasso herding cattle on horseback",
    },
  },
  {
    id: 4,
    title: "Fourth: Refine",
    content:
      "We perform testing for accessibility and browser and device compatibility as well as making changes based on feedback and revisions. Once we're confident your website is free of any critical bugs that could affect usability it's time to send it live.",
    image: {
      src: "/cowboy-polishing-revolver.webp",
      alt: "Cowboy in a dimly lit barn polishing a revolver",
    },
  },
];

export default function Steps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  useEffect(() => {
    let lastScrollY = 0;
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = () => {
        let potentialIndex = Math.floor(latest * blurbs.length);
        if (potentialIndex > blurbs.length - 1) {
          potentialIndex = blurbs.length - 1;
        }
        if (potentialIndex < 0) {
          potentialIndex = 0;
        }
        return potentialIndex;
      };

      setScrollDirection(latest > lastScrollY ? "down" : "up");
      lastScrollY = latest;

      setActiveIndex(newIndex());
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div
      className="relative h-[var(--section-height)]"
      style={
        {
          "--section-height": `${blurbs.length * 125}vh`,
        } as React.CSSProperties
      }
      ref={containerRef}
    >
      <div className="sticky top-0 flex flex-col h-screen items-center justify-center gap-y-12">
        <motion.h2
          variants={{
            initial: {
              opacity: 0,
              filter: "blur(4px)",
              scale: 0.98,
            },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
            },
          }}
          transition={{
            duration: 0.5,
          }}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="font-display text-6xl uppercase text-stone-300 sm:text-7xl md:text-8xl"
        >
          ✯ The Process ✯
        </motion.h2>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  y: scrollDirection === "down" ? -10 : 10,
                  filter: "blur(10px) brightness(0%)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px) brightness(100%)",
                }}
                exit={{
                  opacity: 0,
                  y: scrollDirection === "down" ? 10 : -10,
                  filter: "blur(10px) brightness(0%)",
                }}
                transition={{ duration: 0.15 }}
                className="h-[300px] w-full md:h-[400px] lg:h-[500px]"
              >
                <div className="relative inline-block aspect-square overflow-hidden text-stone-950 after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:border-separate after:content-[''] after:[box-shadow:inset_0_0_10px_10px] max-h-full">
                  <img
                    src={blurbs[activeIndex].image.src}
                    alt={blurbs[activeIndex].image.alt}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  y: scrollDirection === "down" ? -10 : 10,
                  filter: "blur(10px) brightness(0%)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px) brightness(100%)",
                }}
                exit={{
                  opacity: 0,
                  y: scrollDirection === "down" ? 10 : -10,
                  filter: "blur(10px) brightness(0%)",
                }}
                transition={{ duration: 0.15, delay: 0.1 }}
                className="flex items-center justify-center"
              >
                <BlurbSection blurb={blurbs[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlurbSection({ blurb }: { blurb: Blurb }) {
  return (
    <div className="max-w-xl md:p-8 h-[270px] md:h-[unset]">
      <div className="max-w-max">
        <h3 className="mb-6 text-3xl md:text-5xl font-semibold text-stone-200">
          {blurb.title}
        </h3>
        <div
          className="my-8 flex h-0.5 w-full items-center justify-center bg-stone-200"
          aria-hidden={true}
        >
          <motion.span
            initial={{
              rotate: 0,
            }}
            animate={{
              rotate: 360,
              transition: {
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              },
            }}
            className="rounded-full bg-stone-950 p-2 text-xl md:text-3xl leading-[25px] text-stone-200"
          >
            {`✯`}
          </motion.span>
        </div>
      </div>
      <p className="text-sm md:text-base font-medium leading-loose text-stone-400 max-w-xs md:max-w-sm">
        {blurb.content}
      </p>
    </div>
  );
}
