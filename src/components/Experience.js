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
            position="Bitcoin Adoption Specialist"
            company="Swan Bitcoin"
            companyLink="https://www.swanbitcoin.com/"
            time="Jan 2024 - July 2024"
            address="Jacksonville, FL (Remote)"
            work="Assisted thousands of customers monthly in utilizing the Swan Bitcoin platform through Zendesk, Zoom, emails, and phone calls, maintaining high customer satisfaction. Conducted biweekly webinars, increasing customer engagement and reducing Zendesk tickets. Collaborated with Risk, Engineering, and Operations teams to provide proactive feedback for platform improvements. Helped triage and resolve complex customer issues, escalating to appropriate departments when necessary. Was a top performer on the Client Services team before being let go due to company wide layoffs."
          />

          <Details
            position="Lead Developer"
            company="MassAdoption"
            companyLink="https://massadoption.net"
            time="2022-Present"
            address="Boston, MA."
            work="Led the inception and launch of MassAdoption website using vanilla JavaScript, HTML, and CSS, with Hostinger for deployment. Decided in 2023 to elevate the site's performance and aesthetics through Next.js, React, and Tailwind CSS, while contributing to the development of our Bitcoin-focused LLM, Mr. Nakamoto. Helping the team launch the new Camp Nakamoto website for the Bitcoin retreat taking place in 2025."
          />

          <Details
            position="Freelance Writer"
            company="Various Publications"
            companyLink="https://conorchepenik.com"
            time="April 2022 - Present"
            address="Jacksonville, FL (Remote)"
            work="Produce in-depth articles and analysis on Bitcoin, blockchain, technology, and fintech trends for leading industry publications, enhancing public understanding of complex topics. Published in prominent outlets including ZeroHedge, Bitcoin Magazine, The Common Sense Movement, and Bitcoinnews.com."
          />

          <Details
            position="Commercial Account Executive"
            company="Datadog"
            companyLink="https://www.datadoghq.com/"
            time="April 2022 - January 2023"
            address="Boston, MA."
            work="Utilized LinkedIn Sales Navigator, Builtwith.com, and Zoominfo to generate personalized outreach, resulting in successful business development via cold calling, email and LinkedIn/Twitter outreach. Coached Sales Development Reps on strategy and best practices for business development, resulting in a 64% increase in meetings booked for SDRs, ultimately leading to more revenue generated for the company."
          />

          <Details
            position="Business Development Team Lead"
            company="Reveneer"
            companyLink="https://reveneer.io/"
            time="September 2020 - April 2022"
            address="Lexington, MA."
            work="Managed outbound sales team selling web/app development, backup software, learning management solutions, and digital signage for companies like Quantum Mob, Datto, and Yodeck. Organized the creation of an employee intranet portal that consolidated all sales data, providing employees with easy access to their career progress at Reveneer. Strengthened camaraderie and morale through team building events, including managing a company soccer team in a local rec league."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;