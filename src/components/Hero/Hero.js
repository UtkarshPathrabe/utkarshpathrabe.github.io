import React, { useRef } from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { ABOUT_URL } from '../../constants/toolbarURLs';

const Hero = (props) => {
  const audioRef = useRef();

  const handleLearnMore = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Utkarsh Pathrabe
        </SectionTitle>
        <SectionText>
          Senior System Software Engineer (Autonomous Vehicles) at NVIDIA
        </SectionText>
        <Link href={ABOUT_URL} passHref>
          <Button onClick={handleLearnMore}>Learn More</Button>
        </Link>
      </LeftSection>
      <audio ref={audioRef}>
        <source src='/audio/guitar-beat-intro.mp3'></source>
      </audio>
    </Section>
  );
};

export default Hero;