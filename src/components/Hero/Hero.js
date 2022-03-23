import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Utkarsh Pathrabe
        </SectionTitle>
        <SectionText>
          Senior System Software Engineer (Autonomous Vehicles) at NVIDIA
        </SectionText>
        <a href={"https://utkarshpathrabe.com/#about"} rel="noopener">
          <Button>Learn More</Button>
        </a>
      </LeftSection>
    </Section>
  );
};

export default Hero;