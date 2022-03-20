import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';

import { SectionSubTitle, SectionText } from '../../../styles/GlobalComponents';
import { TitleLink, Content, ContentContainer, TextContainer } from './SphereOnlineJudgeStyles';

const SphereOnlineJudge = () => {
    return (
        <div>
            <TitleLink href='https://www.spoj.com/users/utkarsh_ashok/' target='_blank'>
                <SectionSubTitle>Sphere Online Judge <BiLinkExternal size={'2rem'} style={{ margin: '0 0 1.5rem 0' }} /></SectionSubTitle>
            </TitleLink>
            <Content>
                <ContentContainer>
                    <TextContainer>
                        <SectionText>World Rank: 1154</SectionText>
                        <SectionText>Points: 25</SectionText>
                        <SectionText>Problems Solved: 161</SectionText>
                    </TextContainer>
                </ContentContainer>
            </Content>
        </div>
    );
};

export default SphereOnlineJudge;