import Head from 'next/head';

import About from '../components/About/About';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Layout from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
        <title>Utkarsh Pathrabe</title>
        <meta content="Utkarsh Pathrabe's personal website" name="description"></meta>
        <meta content="utkarsh pathrabe reactjs python java sql coder webdeveloper" name="keywords"></meta>
        <link href="/images/logo.png" rel="icon"></link>
      </Head>
      <Layout>
      <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <About />
      </Layout>
    </>
  );
};

export default Home;
