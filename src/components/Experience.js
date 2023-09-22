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
              position="Lead Developer"
              company="MassAdoption"
              companyLink="https://massadoption.net"
              time="2022-Present"
              address="Boston, MA."
              work="Led the inception and launch of MassAdoption website using vanilla JavaScript, HTML, and CSS, with Hostinger for deployment. Decided in 2023 to elevate the site's performance and aesthetics through Next.js, React, and Tailwind CSS, while contributing to the development of our Bitcoin-focused LLM, Mr. Nakamoto."
            />

            <Details
              position="Account Executive"
              company="Datadog"
              companyLink="https://www.datadoghq.com/"
              time="2022"
              address="Boston, MA."
              work="Utilized LinkedIn Sales Navigator, Builtwith.com, and Zoominfo to generate personalized outreach, resulting in successful business development via cold calling, email and LinkedIn/Twitter outreach, leading to closing and onboarding of high-profile accounts such as The Block, Foodoo.ai, Transpose, Terracycle, and Usepower.com, among others.
              Coached Sales Development Reps on strategy and best practices for business development, resulting in a 64% increase in meetings booked for SDRs, ultimately leading to more revenue generated for the company."
            />

            <Details
              position="Business Development Team Lead"
              company="Reveneer"
              companyLink="https://reveneer.io/"
              time="2020-2022"
              address="Lexington, MA."
              work="Promoted from Business Development Representative to Business Development Team Lead in May 2021.
              Managed outbound sales team selling web/app development, backup software, learning management solutions, and
              digital signage for companies like Quantum Mob, Datto, and Yodeck.
              Spearheaded the creation of an employee intranet portal that consolidated all sales data, providing employees with easy
              access to their career progress at Reveneer.
              "
            />

            <Details
              position="Writer"
              company="Bitcoin Magazine"
              companyLink="https://bitcoinmagazine.com/"
              time="2022-Present"
              address="Global"
              work="Just doing my part to get the world on a monetary standard backed by math and open source software instead of debt & violence."
            />

            <Details
              position="Writer"
              company="Bitcoin News"
              companyLink="https://bitcoinnews.com/"
              time="2023-Present"
              address="Global"
              work="The more places I can contribute my writing skills the better."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
