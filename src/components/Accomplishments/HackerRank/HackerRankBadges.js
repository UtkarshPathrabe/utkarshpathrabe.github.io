import React from 'react';
import useSWR from 'swr';
import { BiErrorCircle } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { Bars } from 'react-loading-icons';

import { SectionText } from '../../../styles/GlobalComponents';
import { ErrorContent, BadgesContainer, BadgeParentContainer, Badge, BadgeImage, HelperText, Text, Title, StarContainer } from './HackerRankStyles';
import { fetcher } from '../../../utilities/utils';

const badgesImagesURL = new Map();
badgesImagesURL['/domains/data-structures'] = 'https://hrcdn.net/community-frontend/assets/badges/problem-solving-ecaf59a612.svg';
badgesImagesURL['/domains/cpp'] = 'https://hrcdn.net/community-frontend/assets/badges/cpp-739b350881.svg';
badgesImagesURL['/domains/java'] = 'https://hrcdn.net/community-frontend/assets/badges/java-9d05b1f559.svg';
badgesImagesURL['/domains/python'] = 'https://hrcdn.net/community-frontend/assets/badges/python-f70befd824.svg';
badgesImagesURL['/domains/tutorials/30-days-of-code'] = 'https://hrcdn.net/community-frontend/assets/badges/30-days-of-code-a772ae4c2f.svg';
badgesImagesURL['/domains/tutorials/10-days-of-javascript'] = 'https://hrcdn.net/community-frontend/assets/badges/10-days-of-javascript-94ff22d1c9.svg';
badgesImagesURL['/domains/tutorials/10-days-of-statistics'] = 'https://hrcdn.net/community-frontend/assets/badges/10-days-of-statistics-94ff22d1c9.svg';
badgesImagesURL['/domains/sql'] = 'https://hrcdn.net/community-frontend/assets/badges/sql-89e76e7082.svg';
badgesImagesURL['/domains/c'] = 'https://hrcdn.net/community-frontend/assets/badges/c-d1985901e6.svg';

const getLevel = (level) => {
	switch (level) {
		case 3:
			return 'Gold Level';
		case 2:
			return 'Silver Level';
		case 1:
			return 'Bronze Level';
		default:
			return '';
	}
};

const getLevelColor = (level) => {
	switch (level) {
		case 3:
			return '#bfa519';
		case 2:
			return '#AAA9AD';
		case 1:
			return '#CD7F32';
		default:
			return '#FFFFFF';
	}
};

const HackerRankBadges = () => {
    const { data, error } = useSWR('https://nodejs-server-githubio-page.herokuapp.com/hackerrank_badges', fetcher);
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
            <BadgeParentContainer>
                {data.models.filter(({ solved, level }) => solved > 0 && level > 0).map(({ url, level, badge_name, current_points, stars, solved, total_challenges }) => (
                    <Badge key={url}>
                        <BadgeImage src={badgesImagesURL[url]} alt={url} backgroundColor={getLevelColor(level)} />
                        <Text>{badge_name}</Text>
                        <HelperText>{getLevel(level)}</HelperText>
                        <StarContainer>
                            {Array.from(Array(stars)).map((_, i) => (<FaStar key={i} />))}
                        </StarContainer>
                        <HelperText>Earned {current_points} points</HelperText>
                        <HelperText>{solved} of {total_challenges} challenges solved</HelperText>
                    </Badge>
                ))}
            </BadgeParentContainer>
        );
    }
    return (
        <BadgesContainer>
            <Title>HackerRank Badges</Title>
            {content}
        </BadgesContainer>
    );
};

export default HackerRankBadges;