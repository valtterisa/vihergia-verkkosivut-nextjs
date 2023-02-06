import '../styles/globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from 'next/script';
import Layout from '../src/komponentit/layout';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return(
    <>
      <Layout>
        <Script strategy="lazyOnload" async src={`https://www.googletagmanager.com/gtag/js?id=G-35DL2QX4EB`}/>
        <Script strategy="lazyOnload">
          {`
              <!-- Google tag (gtag.js) -->
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-35DL2QX4EB');
          `}
        </Script>
        <Component {...pageProps} />
      </Layout>
    </>
)}
