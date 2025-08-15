import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about what makes us special.",
}

export default function About() {
  return (
    <div className="max-w-6xl mx-auto py-36 px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
      <div className="relative inline-block aspect-square overflow-hidden text-stone-950 after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:border-separate after:content-[''] after:[box-shadow:inset_0_0_10px_10px] max-h-full">
        <Image
          height={1000}
          width={600}
          src="/josh-standing.jpeg"
          alt="Josh standing in front of a wall with a cowboy hat and a smile"
          className="aspect-square object-cover object-top rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">Hey, I'm Josh.</h1>
        <p className="text-base/8 sm:text-xl/10 text-stone-200 font-semibold">
          I create websites, but you probably figured that out already. I hate
          seeing businesses waste money on boring and ineffective websites, so
          everything I create is totally custom and uniquely tailored to your
          brand.
        </p>
        <p className="text-base/8 sm:text-xl/10 text-stone-200 font-semibold">
          Since I come from a software background, not only will your site look
          great and convert visitors into customers, it's also going to perform
          exceptionally thanks to a bulletproof technical foundation. I'm
          excited about what we'll build together. If you're ready to get
          started,{" "}
          <Link href="/#contact" className="underline">
            let's chat!
          </Link>
        </p>
      </div>
    </div>
  )
}
