// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script
          id="theme-switcher"
          strategy="beforeInteractive"
        >
          {`
            // existing theme switcher script
          `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LVR3T1LHBR"
          strategy="afterInteractive"
        />
        
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
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