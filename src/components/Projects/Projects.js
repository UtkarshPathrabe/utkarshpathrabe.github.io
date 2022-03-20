import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { projects } from '../../constants/projects';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(( { id, image, title, description, tags, source, visit } ) => (
        <BlogCard key={id}>
          <Img src={image} alt={id} />
          <TitleContent>
            <HeaderThree isTitle={true}>
              {title}
            </HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit} target='_blank'>
              Visit
            </ExternalLinks>
            <ExternalLinks href={source} target='_blank'>
              Source
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;