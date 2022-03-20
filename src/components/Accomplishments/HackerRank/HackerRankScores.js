import React from 'react';
import useSWR from 'swr';
import { BiErrorCircle } from 'react-icons/bi';
import { Bars } from 'react-loading-icons';

import { SectionText } from '../../../styles/GlobalComponents';
import { ErrorContent, ScoresContainer, ScoreParentContainer, ScoreContainer, Text, Title } from './HackerRankStyles';
import { fetcher } from '../../../utilities/utils';

const HackerRankScores = () => {
    const { data, error } = useSWR('https://nodejs-server-githubio-page.herokuapp.com/hackerrank_scores', fetcher);
    let content;
    if (error) {
        content = (
            <ErrorContent>
                <BiErrorCircle size='3rem' />
                <SectionText>Failed to load HackerRank scores data.</SectionText>
            </ErrorContent>
        );
    }else if (!data) {
        content = (
            <Bars width='5rem' height='4rem' />
        );
    } else {
        content = (
            <ScoreParentContainer>
                {data.map(({ name, score }) => (
                    <ScoreContainer key={name}>
                        <Text>{name}</Text>
                        <Text>{score}</Text>
                    </ScoreContainer>
                ))}
            </ScoreParentContainer>
        );
    }
    return (
        <ScoresContainer>
            <Title>HackerRank Scores</Title>
            {content}
        </ScoresContainer>
    );
};

export default HackerRankScores;