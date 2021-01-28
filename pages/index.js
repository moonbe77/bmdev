import Head from 'next/head';
import dynamic from 'next/dynamic';
import Hero from '../components/molecules/Hero';
import TextComponent from '../components/molecules/TextComponent';
import { useStateContext } from '../store/store';

const SectionObserved = dynamic(
  () => import('../components/atoms/SectionObserved'),
  {
    ssr: false,
  }
);

export default function Home() {
  const { isDarkTheme } = useStateContext();

  return (
    <>
      <Head>
        <title>bMunz.dev</title>
      </Head>
      <Hero />
      <SectionObserved isDarkTheme={isDarkTheme}>
        <TextComponent isDarkTheme={isDarkTheme} />
      </SectionObserved>
    </>
  );
}
