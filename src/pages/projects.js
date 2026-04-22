import AnimatedText from "@/components/AnimatedText";
import { YoutubeIcon, LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import coloringBookImg from "../../public/images/projects/based.jpeg";
import texasSlim from "../../public/images/projects/texas-slim.jpg";
import bigHand from "../../public/images/projects/bigHandWins.jpg";
import massAdoption from "../../public/images/projects/devdreaming.jpg";
import campNakamoto from "../../public/images/projects/Caribou.jpg";
import fatherChat from "../../public/images/projects/Father.jpg";
import marksNostr from "../../public/images/projects/marks.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, linkLabel = "Visit", external = true }) => {
  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark
lg:flex-col
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={target}
        rel={rel}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={target}
          rel={rel}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target={target}
            rel={rel}
            className="flex items-center rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark
             sm:px-4 sm:text-base
            "
            aria-label={title}
          >
            {linkLabel} <LinkArrow className="ml-1 !w-6 md:!w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const PodcastProject = ({ type, title, summary, img, link }) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark
lg:flex-col
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10"
            aria-label={`${title} on YouTube`}
          >
            <YoutubeIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark
             sm:px-4 sm:text-base
            "
            aria-label={`Watch ${title}`}
          >
            Watch
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, cta = "Visit", youtube }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl
      rounded-br-2xl
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center justify-between">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded text-lg
            font-medium underline md:text-base"
            aria-label={title}
          >
            {cta}
          </Link>
          {youtube && (
            <Link
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 md:w-6"
              aria-label={`${title} on YouTube`}
            >
              <YoutubeIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Conor Chepenik</title>
        <meta
          name="description"
          content="Things Conor Chepenik is building — The Bitcoin Coloring Book, Camp Nakamoto, MassAdoption, Mr. Nakamoto, and The Conor Chepenik Podcast."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Work hard, play hard, stay humble."
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Book — Launched 2025"
                title="The Bitcoin Coloring Book"
                summary="A playful introduction to Bitcoin, sound money, and financial literacy for kids ages 2–10. 21 illustrations covering blocks, mining, wallets, and the ideas that make self-custody matter. Buy it on Amazon or grab the free PDF at bitcoincoloring.com."
                img={coloringBookImg}
                link="https://bitcoincoloring.com/"
                linkLabel="Get the book"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Bitcoin Retreat"
                title="Camp Nakamoto"
                img={campNakamoto}
                link="https://massadoption.net"
                cta="Learn more"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Bitcoin Education Hub"
                title="MassAdoption"
                img={massAdoption}
                link="https://massadoption.net"
                cta="Visit site"
              />
            </div>

            <div className="col-span-12">
              <PodcastProject
                type="The Conor Chepenik Podcast"
                title="An interview with Texas Slim"
                summary="We explore Slim's groundbreaking project revolutionizing the beef industry — how technology is transforming beef production, and why nutrition and food choices matter more than you think."
                img={texasSlim}
                link="https://youtu.be/PT4yHzxq1oo?si=FvjE_tqRbca26kp3"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="JS Card Game in Your Terminal"
                title="Big Hand Wins"
                img={bigHand}
                link="https://youtu.be/ebh3489YPA0?si=WxiPj1-gHZXmkx0X"
                youtube="https://youtu.be/ebh3489YPA0?si=WxiPj1-gHZXmkx0X"
                cta="Watch"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="The Conor Chepenik Podcast"
                img={marksNostr}
                title="Nostr Paradigm Shift With Marks"
                link="https://youtu.be/huDc_5hzRdM?si=0PkonlGtHIv-FY74"
                youtube="https://youtu.be/huDc_5hzRdM?si=0PkonlGtHIv-FY74"
                cta="Watch"
              />
            </div>

            <div className="col-span-12">
              <PodcastProject
                type="A Chat With My Father"
                title="Ancestral Knowledge"
                summary="Sitting down with my dad to trade notes across generations — what we've each learned about health, work, faith, and what actually lasts."
                img={fatherChat}
                link="https://youtu.be/HZPqlN1gjT8?si=QhtadbglSzZ77_vQ"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
