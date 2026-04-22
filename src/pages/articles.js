import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/pagination component in reactjs.jpg";
import blog2 from "../../public/images/articles/create loading screen in react js.jpg";
import bitcoinMag from "../../public/images/articles/bitcoinmagazine.png";
import bitcoinNews from "../../public/images/articles/bitcoinnews.png";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        rel="noopener noreferrer"
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start
      sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl
    dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        rel="noopener noreferrer"
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"} rel="noopener noreferrer">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Articles | Conor Chepenik</title>
        <meta name="description" content="Writing by Conor Chepenik — Bitcoin, freedom tech, and what happens when open-source money meets the real world. Published in Bitcoin Magazine, ZeroHedge, Bitcoinnews.com, Satoshi's Journal, and daily on Medium." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Language is the open source code that humanity continually updates to share concepts."
            className="!text-7xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="My Online Auto-Biography"
              time="1,600+ days and counting"
              summary="I wanted to get better at writing, so I decided to write every single day for the rest of my life. These are the daily notes — half journal, half Bitcoin commentary."
              link="https://medium.com/@chepenikconor"
            />

            <FeaturedArticle
              img={blog2}
              title="Bitcoin Stops The Bleeding"
              time="7 min read"
              summary="A sound money system is the only cure for what ails our economy."
              link="https://www.zerohedge.com/crypto/bitcoin-stops-bleeding-sound-money-system-only-cure-what-ails-our-economy"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Articles
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="Inside Paraguay's Proposed Bitcoin Bill"
              img={bitcoinMag}
              date="Bitcoin Magazine"
              link="https://bitcoinmagazine.com/business/paraguays-proposed-bitcoin-bill"
            />
            <Article
              title="Bitcoin Prevents Doublethink"
              img={bitcoinMag}
              date="Bitcoin Magazine"
              link="https://bitcoinmagazine.com/culture/bitcoin-prevents-doublethink"
            />
            <Article
              title="Bitcoin Aligns Incentives In The Perfect Way"
              img={bitcoinMag}
              date="Bitcoin Magazine"
              link="https://bitcoinmagazine.com/culture/bitcoin-aligns-incentives-in-the-perfect-way"
            />
            <Article
              title="Bitcoin Home Birth And Sovereignty"
              img={bitcoinMag}
              date="Bitcoin Magazine"
              link="https://bitcoinmagazine.com/culture/bitcoin-home-birth-and-sovereignty"
            />
            <Article
              title="Regulators Must Learn To Accept The New Tech"
              img={bitcoinMag}
              date="Bitcoin Magazine"
              link="https://bitcoinmagazine.com/culture/bitcoin-tax-attacks-are-regulatory-fear"
            />
            <Article
              title="Objectivism Meets Bitcoin"
              img={bitcoinNews}
              date="Bitcoin News"
              link="https://bitcoinnews.com/objectivism-meets-bitcoin/"
            />
            <Article
              title="The US Dollar Is A Ponzi Scheme"
              img={bitcoinNews}
              date="Bitcoin News"
              link="https://bitcoinnews.com/us-dolla-ponzi-scheme/"
            />
            <Article
              title="Nostr Protocol Lets Users Earn Bitcoin For Content"
              date="Bitcoin News"
              img={bitcoinNews}
              link="https://bitcoinnews.com/nostr-protocol-earn-bitcoin/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
