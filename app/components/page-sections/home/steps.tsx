"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import cowboyPolishingRevolver from "app/assets/cowboy-polishing-revolver.webp";
import cowboyRanching from "app/assets/cowboy-ranching.webp";
import cowboySaddlingHorse from "app/assets/cowboy-saddling-horse.webp";
import cowboysPlanning from "app/assets/cowboys-planning.webp";
import { cn } from "app/lib/utils";
import { InView } from "app/components/animations/in-view";

type Blurb = {
  id: number;
  title: string;
  content: string;
  image: string;
};

const blurbs: Blurb[] = [
  {
    id: 1,
    title: "First: Plan",
    content:
      "We'll have discussions to understand business goals, target audience, brand identity, and specific requirements. We conduct research, define project scope, and develop a project roadmap that will guide the next steps of the design process.",
    image: cowboysPlanning.src,
  },
  {
    id: 2,
    title: "Second: Prepare",
    content:
      "This involves procuring digital assets, creating mockups, curating color palettes and typography, and developing a cohesive design system. We'll also lock down technology choices that we'll build with in the upcoming phase.",
    image: cowboySaddlingHorse.src,
  },
  {
    id: 3,
    title: "Third: Execute",
    content:
      "We'll convert static mockups into dynamic, responsive web interfaces. We build a live prototype of the website and ensure cross-browser and cross-device compatibility. This stage involves meticulous attention to both visual design and technical performance.",
    image: cowboyRanching.src,
  },
  {
    id: 4,
    title: "Fourth: Refine",
    content:
      "We perform testing for accessibility and browser and device compatibility as well as making changes based on feedback and revisions. Once we're confident your website is free of any critical bugs that could affect usability it's time to send it live.",
    image: cowboyPolishingRevolver.src,
  },
];

function BlurbSection({ blurb }: { blurb: Blurb }) {
  return (
    <div className="max-w-xl md:p-8">
      <div className="max-w-max">
        <h2 className="mb-6 text-5xl font-semibold text-stone-200">
          {blurb.title}
        </h2>
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
            className="rounded-full bg-stone-925 p-2 text-3xl leading-[25px] text-stone-200"
          >
            {`✯`}
          </motion.span>
        </div>
      </div>
      <p className="text-base font-medium leading-loose text-stone-400">
        {blurb.content}
      </p>
    </div>
  );
}

export default function Steps() {
  const [activeBlurb, setActiveBlurb] = useState(blurbs[0]);
  const blurbContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: blurbContainerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", () => {
    let progress = scrollYProgress.get();
    function index() {
      if (progress < 0.28) return 0;
      if (progress < 0.5) return 1;
      if (progress < 0.72) return 2;
      return 3;
    }

    setActiveBlurb(blurbs[index()]);
  });

  return (
    <div className="border-y border-stone-800 bg-stone-925">
      <div className="flex w-full flex-col items-center">
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
          className="mt-20 font-display text-6xl uppercase text-stone-300 sm:text-8xl md:-mb-16 md:text-9xl"
        >
          ✯ The Process ✯
        </motion.h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-center p-8 md:sticky md:top-0 md:h-screen md:w-1/2">
          <div className="relative inline-block aspect-square overflow-hidden text-stone-925 after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:border-separate after:content-[''] after:[box-shadow:inset_0_0_10px_10px]">
            {blurbs.map((blurb, i) => (
              <InView
                variants={{
                  hidden: { opacity: 0, filter: "blur(4px)" },
                  visible: { opacity: 1, filter: "blur(0px)" },
                }}
                transition={{
                  duration: 0.5,
                }}
                viewOptions={{ once: true, amount: 0.5 }}
                key={blurb.id}
              >
                <motion.img
                  src={blurb.image}
                  alt={blurb.title}
                  className={cn(
                    "h-auto w-full max-w-md rounded-3xl shadow-xl transition-opacity",
                    i == activeBlurb.id - 1 ? "opacity-100" : "size-0 opacity-0"
                  )}
                />
              </InView>
            ))}
          </div>
        </div>
        <div
          className="space-y-48 px-8 py-24 md:w-1/2 md:space-y-[90dvh] md:py-72"
          ref={blurbContainerRef}
        >
          {blurbs.map((blurb) => (
            <InView
              variants={{
                hidden: { opacity: 0, filter: "blur(4px)" },
                visible: { opacity: 1, filter: "blur(0px)" },
              }}
              transition={{
                duration: 0.5,
              }}
              viewOptions={{ once: true, amount: 0.25 }}
              key={blurb.id}
            >
              <BlurbSection blurb={blurb} />
            </InView>
          ))}
        </div>
      </div>
    </div>
  );
}
