import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Experience from '../components/Sections/Experience';
import {homePageMeta} from '../data/data';
import Education from "../components/Sections/Education";
import ResearchWorks from "../components/Sections/ResearchWorks";
import Skills from "../components/Sections/Skills";
import {Alert} from "../components/Layout/Alert";

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Alert/>
      <Header/>
      <Hero/>
      <About/>
      <Education/>
      <ResearchWorks/>
      <Experience/>
      <Skills/>
      <Footer/>
    </Page>
  );
});

export default Home;
