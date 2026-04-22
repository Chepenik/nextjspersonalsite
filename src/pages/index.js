import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import profilePic from "../../public/images/logo.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const roles = [
  { label: "Father", emoji: "👨‍👧" },
  { label: "Bitcoiner", emoji: "₿" },
  { label: "Developer", emoji: "</>" },
  { label: "Writer", emoji: "✎" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Conor Chepenik — Father, Bitcoiner, Developer & Writer</title>
        <meta
          name="description"
          content="Conor Chepenik's personal site — a father, bitcoiner, developer, and writer turning cool ideas into web applications."
        />
      </Head>

      <TransitionEffect />
      <article className="relative flex min-h-screen w-full items-center justify-center overflow-hidden text-dark dark:text-light">
        {/* Ambient aurora background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-40 left-1/4 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,#ff00d4_0%,transparent_60%)] opacity-20 blur-3xl dark:opacity-30" />
          <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,#00e5ff_0%,transparent_60%)] opacity-20 blur-3xl dark:opacity-25" />
          <div className="absolute -bottom-40 left-1/3 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,#ffbb5c_0%,transparent_60%)] opacity-15 blur-3xl dark:opacity-20" />
        </div>

        <Layout className="!py-16 xl:!py-12 lg:!py-10 md:!py-8 sm:!py-6">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-12 lg:flex-col-reverse lg:gap-10 md:gap-8">
            {/* Left: lion image */}
            <div className="w-[45%] lg:w-full lg:max-w-xl md:max-w-full">
              <div className="group relative h-auto w-full">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-40
                             bg-[conic-gradient(from_0deg,#ff00d4,#00e5ff,#ffea00,#ff6bcb,#8a2be2,#ff00d4)]
                             blur-3xl transition-all duration-500 ease-out
                             group-hover:opacity-90 group-hover:-inset-8"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-2 rounded-[2rem] opacity-0
                             bg-[conic-gradient(from_90deg,#ff6bcb,#45ffca,#ffbb5c,#ff00d4,#ff6bcb)]
                             blur-xl animate-spin-slow transition-opacity duration-500
                             group-hover:opacity-80"
                />
                <Image
                  src={profilePic}
                  alt="Chep"
                  className="relative h-auto w-full rounded-2xl transition-all duration-500 ease-out
                             group-hover:scale-[1.03] group-hover:saturate-150
                             group-hover:[filter:drop-shadow(0_0_20px_rgba(255,0,212,0.85))_drop-shadow(0_0_40px_rgba(0,229,255,0.7))]"
                  sizes="(max-width: 1023px) 90vw, 45vw"
                  priority
                />
              </div>
            </div>

            {/* Right: hero content */}
            <div className="flex w-[55%] flex-col items-start lg:w-full lg:items-center lg:text-center">
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-dark/10 bg-dark/5 px-3 py-1 text-xs font-medium text-dark/80 backdrop-blur dark:border-light/15 dark:bg-light/5 dark:text-light/80 sm:mb-3 sm:text-[11px]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primaryDark opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primaryDark" />
                </span>
                Available for interesting work
              </motion.div>

              <AnimatedText
                text="Father, Bitcoiner, Developer, & Writer"
                className="!text-left !text-6xl !leading-[1.05] xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl xs:!text-2xl"
              />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-4 flex flex-wrap gap-2 lg:justify-center sm:mt-3 sm:gap-1.5"
              >
                {roles.map((r) => (
                  <span
                    key={r.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-dark/15 bg-light/60 px-3 py-1 text-xs font-semibold text-dark shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5 hover:border-primaryDark dark:border-light/20 dark:bg-dark/60 dark:text-light sm:px-2.5 sm:py-0.5 sm:text-[11px]"
                  >
                    <span className="text-sm sm:text-xs">{r.emoji}</span>
                    {r.label}
                  </span>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="my-5 max-w-xl text-base font-medium text-dark/80 dark:text-light/80 md:my-4 md:text-sm sm:my-3 sm:!text-xs"
              >
                I enjoy wearing different hats. My true passion lies in taking
                cool ideas and turning them into awesome web applications. When
                I&apos;m not working I enjoy spending time with my family,
                running, and reading great books.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="mt-2 flex flex-wrap items-center gap-3 lg:justify-center sm:gap-2"
              >
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border-2 border-solid border-dark bg-dark px-6 py-2.5 text-lg font-semibold capitalize text-light transition-colors hover:bg-transparent hover:text-dark dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light md:px-4 md:py-2 md:text-base sm:px-3.5 sm:py-1.5 sm:text-sm"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] transition-transform duration-700 group-hover:translate-x-full"
                  />
                  View Projects
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>

                <Link
                  href="/articles"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-solid border-dark/20 bg-transparent px-6 py-2.5 text-lg font-semibold capitalize text-dark transition-colors hover:border-dark hover:bg-dark/5 dark:border-light/20 dark:text-light dark:hover:border-light dark:hover:bg-light/5 md:px-4 md:py-2 md:text-base sm:px-3.5 sm:py-1.5 sm:text-sm"
                >
                  Read Articles
                </Link>

                <Link
                  href="mailto:chepenikconor@gmail.com"
                  className="text-lg font-medium capitalize text-dark/80 underline underline-offset-4 transition-colors hover:text-dark dark:text-light/80 dark:hover:text-light md:text-base sm:text-sm"
                >
                  Contact
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-dark/60 dark:text-light/60 lg:justify-center sm:mt-5 sm:text-[11px]"
              >
                <span className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primaryDark" />
                  Built with Next.js
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Powered by sats
                </span>
              </motion.div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
