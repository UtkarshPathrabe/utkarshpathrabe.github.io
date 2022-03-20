import React from 'react';
import { SiHackerrank } from 'react-icons/si';
import { BiLinkExternal } from 'react-icons/bi';

import { SectionSubTitle } from '../../../styles/GlobalComponents';
import { TitleLink, Content } from './HackerRankStyles';
import HackerRankSubmissions from './HackerRankSubmissions';
import HackerRankScores from './HackerRankScores';
import HackerRankBadges from './HackerRankBadges';

const HackerRank = () => {
    return (
        <div>
            <TitleLink href='https://www.hackerrank.com/UtkarshPathrabe' target='_blank'>
                <SectionSubTitle><SiHackerrank size='3rem' /> HackerRank <BiLinkExternal size='2rem' style={{ margin: '0 0 1.5rem 0' }} /></SectionSubTitle>
            </TitleLink>
            <Content>
                <HackerRankSubmissions />
                <HackerRankScores />
                <HackerRankBadges />
            </Content>
        </div>
    );
};

export default HackerRank;