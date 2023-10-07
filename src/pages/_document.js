// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            if (
              localStorage.getItem('theme') === 'dark' ||
              (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
        </Script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LVR3T1LHBR" />
        <Script id="google-analytics-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LVR3T1LHBR', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
