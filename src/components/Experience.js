import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
          origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Author"
            company="The Bitcoin Coloring Book"
            companyLink="https://bitcoincoloring.com/"
            time="2025 - Present"
            address="bitcoincoloring.com"
            work="Wrote and shipped The Bitcoin Coloring Book — 21 illustrations that turn blocks, mining, wallets, and self-custody into activities for kids ages 2–10. Available on Amazon and as a free PDF at bitcoincoloring.com. Handled design direction, publishing, distribution, and the marketing site end-to-end."
          />

          <Details
            position="Lead Developer"
            company="MassAdoption"
            companyLink="https://massadoption.net"
            time="2022 - Present"
            address="Boston, MA (Remote)"
            work="Built and maintain massadoption.net — originally vanilla JS/HTML/CSS, now Next.js + React + Tailwind on Vercel. Contributing to Mr. Nakamoto, our Bitcoin-focused LLM, and leading development on Camp Nakamoto, our Bitcoin retreat platform. Focused on making on-boarding to open-source money boring enough that it actually works for normies."
          />

          <Details
            position="Writer"
            company="Bitcoin Magazine, ZeroHedge, Satoshi's Journal & more"
            companyLink="https://bitcoinmagazine.com/authors/conor-chepenik"
            time="April 2022 - Present"
            address="Remote"
            work="150+ published articles covering Bitcoin, freedom tech, monetary history, and the collision of open-source software with politics. Bylines in Bitcoin Magazine, ZeroHedge, Bitcoinnews.com, Satoshi's Journal, and The Common Sense Movement — plus a daily post on Medium since late 2021 (1,600+ consecutive days)."
          />

          <Details
            position="Bitcoin Adoption Specialist"
            company="Swan Bitcoin"
            companyLink="https://www.swanbitcoin.com/"
            time="Jan 2024 - July 2024"
            address="Jacksonville, FL (Remote)"
            work="Supported thousands of Swan customers monthly across Zendesk, Zoom, email, and phone. Ran biweekly customer webinars that lifted engagement and reduced ticket volume. Fed product feedback to Risk, Engineering, and Ops; triaged and escalated complex issues. Top performer on the Client Services team until company-wide layoffs."
          />

          <Details
            position="Commercial Account Executive"
            company="Datadog"
            companyLink="https://www.datadoghq.com/"
            time="April 2022 - January 2023"
            address="Boston, MA"
            work="Ran outbound motion into commercial accounts using LinkedIn Sales Navigator, BuiltWith, and ZoomInfo. Coached SDRs on outbound strategy — their meetings booked jumped 64% over the period, translating directly into pipeline."
          />

          <Details
            position="Business Development Team Lead"
            company="Reveneer"
            companyLink="https://reveneer.io/"
            time="September 2020 - April 2022"
            address="Lexington, MA"
            work="Led an outbound sales team selling web/app development, backup software, learning management, and digital signage for clients like Quantum Mob, Datto, and Yodeck. Spun up an internal intranet portal consolidating sales data so reps could see their own career progression. Ran the company rec-league soccer team on the side."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;