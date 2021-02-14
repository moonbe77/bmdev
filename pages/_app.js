/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { StateProvider } from '../store/store';
import Layout from '../components/layout/MainLayout';
import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Open+Sans&display=swap"
          rel="stylesheet"
          // crossOrigin
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>Bernardo Munz Frontend Web Developer</title>
        <meta
          name="description"
          content="I am an electronic technician persuading a change of career into Frontend developing, My experience as a web developer includes institutional websites for local businesses in Argentina
"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.bmunz.dev/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bernardo Munz Frontend Web Developer"
        />
        <meta
          property="og:description"
          content="I am an electronic technician persuading a change of career into Frontend developing, My experience as a web developer includes institutional websites for local businesses in Argentina
"
        />
        <meta property="og:image" content="./figma/bmunz.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bmunz.dev" />
        <meta property="twitter:url" content="https://www.bmunz.dev/" />
        <meta
          name="twitter:title"
          content="Bernardo Munz Frontend Web Developer"
        />
        <meta
          name="twitter:description"
          content="I am an electronic technician persuading a change of career into Frontend developing, My experience as a web developer includes institutional websites for local businesses in Argentina
"
        />
        <meta name="twitter:image" content="./figma/bmunz.png" />
      </Head>
      <StateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateProvider>
    </>
  );
}

export default MyApp;
