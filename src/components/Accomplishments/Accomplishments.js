import React from 'react';

import { Box, Boxes, BoxNum, BoxText, GitHubStats, GitHubMostUsedLanguages, GitHubStatsContainer } from './AccomplishmentsStyles';
import LeetCode from './LeetCode/LeetCode';
import HackerRank from './HackerRank/HackerRank';
import SphereOnlineJudge from './SphereOnlineJudge/SphereOnlineJudge';
import Certificates from './Certificates/Certificates';
import TestScores from './TestScores/TestScores';

const GitHubData = [
  { number: 20, text: 'Open Source Projects'},
  { number: 190, text: 'Github Followers', },
];

const Accomplishments = () => (
  <>
    <GitHubStatsContainer>
      <GitHubStats src={'https://github-readme-stats.vercel.app/api?username=UtkarshPathrabe&show_icons=true&hide=prs,issues,contribs&theme=github_dark&border_radius=10px&count_private=true'} alt='github_stats' />
      <GitHubMostUsedLanguages src={'https://github-readme-stats.vercel.app/api/top-langs/?username=UtkarshPathrabe&theme=github_dark&border_radius=10px'} alt='github_most_used_languages' />
    </GitHubStatsContainer>
    <Boxes>
      {GitHubData.map(({ number, text }, index) => (
        <Box key={index}>
          <BoxNum>{number}+</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <LeetCode />
    <HackerRank />
    <SphereOnlineJudge />
    <TestScores />
    <Certificates />
  </>
);

export default Accomplishments;
