import React from 'react';

import { SectionSubTitle } from '../../../styles/GlobalComponents';
import { TestScoresContainer, TestScoresCard, Title, Text } from './TestScoresStyles';
import TestScoresData from '../../../constants/testScores';

const TestScores = () => (
  <div>
    <SectionSubTitle>Test Scores ({TestScoresData.length})</SectionSubTitle>
    <TestScoresContainer>
      {TestScoresData.map(({ title, score, date }) => (
        <TestScoresCard key={title}>
            <Title>{title}</Title>
            <div>
                <Text>{score}</Text>
                <Text>{date}</Text>
            </div>
        </TestScoresCard>
      ))}
    </TestScoresContainer>
  </div>
);

export default TestScores;
