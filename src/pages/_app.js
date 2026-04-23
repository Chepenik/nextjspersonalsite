import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";

const CursorFX = dynamic(() => import("@/components/CursorFX"), { ssr: false });

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

const SITE_URL = "https://www.conorchepenik.com";
const OG_IMAGE = `${SITE_URL}/images/profile/developer-pic-1.png`;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const canonical = `${SITE_URL}${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonical} />
        <meta name="theme-color" content="#1b1b1b" />
        <meta name="author" content="Conor Chepenik" />
        <meta property="og:site_name" content="Conor Chepenik" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ConorChepenik" />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>

      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen h-full`}>
        <CursorFX />
        <Navbar />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
