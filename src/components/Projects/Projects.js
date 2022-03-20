import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { projects } from '../../constants/projects';

const Projects = () => (
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
);

export default Projects;