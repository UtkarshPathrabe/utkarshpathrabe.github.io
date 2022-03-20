import Head from 'next/head';

import About from '../components/About/About';
import Accomplishments from '../components/Accomplishments/Accomplishments';
import Accordion from '../components/Accordion/Accordion';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Paintings from '../components/Paintings/Paintings';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Layout, { AccordionContext } from '../layout/Layout';
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
        <AccordionContext.Consumer>
          {(
            {projectsIsOpen, toggleProjectsIsOpen,
            technologiesIsOpen, toggleTechnologiesIsOpen,
            accomplishmentsIsOpen, toggleAccomplishmentsIsOpen,
            paintingsIsOpen, togglePaintingsIsOpen,
          }) => (
            <>
              <Accordion id={'projects'} title={'Projects'} content={<Projects />} isActive={projectsIsOpen} toggleActive={toggleProjectsIsOpen} />
              <Accordion id={'tech'} title={'Technologies'} content={<Technologies />} isActive={technologiesIsOpen} toggleActive={toggleTechnologiesIsOpen} />
              <Accordion id={'accomplishments'} title={'Accomplishments'} content={<Accomplishments />} isActive={accomplishmentsIsOpen} toggleActive={toggleAccomplishmentsIsOpen} />
              <Accordion id={'paintings'} title={'Paintings'} content={<Paintings />} isActive={paintingsIsOpen} toggleActive={togglePaintingsIsOpen} />
            </>
          )}
        </AccordionContext.Consumer>
      </Layout>
    </>
  );
};

export default Home;
