import React from 'react';

import { Boxes, ProfileImg } from './AboutStyles';
import { Section, SectionDivider, SectionText, SectionTitle, SectionSubTitle } from '../../styles/GlobalComponents';
import TimeLine from '../TimeLine/TimeLine';
import ExperienceData from '../../constants/experience';
import EducationData from '../../constants/education';

const About = () => {
  return (
    <Section id='about'>
      <SectionDivider />
      <SectionTitle main>About Me</SectionTitle>
      <Boxes>
        <ProfileImg src={'https://avatars.githubusercontent.com/u/7246712?v=4'} alt={'Profile Picture'} />
        <SectionText style={{ margin: 'auto' }}>
          I am a Senior System Software Engineer at NVIDIA Graphics Pvt. Ltd., Pune, India. <br />
          I am Computer Science Graduate from BITS Pilani, Rajasthan, India. <br />
          I like solving competitive coding problems, exploring new technologies, drawing, painting, travelling and gaming.
        </SectionText>
      </Boxes>
      <SectionSubTitle>Experience</SectionSubTitle>
      <TimeLine data={ExperienceData} />
      <SectionSubTitle>Education</SectionSubTitle>
      <TimeLine data={EducationData} extendWidth={true} />
      <SectionSubTitle>Languages</SectionSubTitle>
      <SectionText>Full professional proficiency in English, Hindi and Marathi.</SectionText>
    </Section>
  );
};

export default About;
