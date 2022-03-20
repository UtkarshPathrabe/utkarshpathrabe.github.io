import React from 'react';
import useSWR from 'swr';
import { SiLeetcode } from 'react-icons/si';
import { BiErrorCircle, BiLinkExternal } from 'react-icons/bi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Bars } from 'react-loading-icons';
import get from 'lodash/get';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { SectionSubTitle, SectionText } from '../../../styles/GlobalComponents';
import { TitleLink, Content, ErrorContent, ChartContainer, ChartParentContainer, TextContainer, ContentContainer, BadgesContainer, BadgeParentContainer, Badge, BadgeImage, Title, Text } from './LeetCodeStyles';
import { getDateDiffInDays, fetcher } from '../../../utilities/utils';

const LeetCode = () => {
    const { data, error } = useSWR('https://nodejs-server-githubio-page.herokuapp.com/leetcode_data', fetcher);
    let content;
    if (error) {
        content = (
            <ErrorContent>
                <BiErrorCircle size='3rem' />
                <SectionText>Failed to load LeetCode profile data.</SectionText>
            </ErrorContent>
        );
    }else if (!data) {
        content = (
            <Bars width='5rem' height='4rem' />
        );
    } else {
        const ranking = get(data, ['data', 'matchedUser', 'profile', 'ranking']);
        const badges = get(data, ['data', 'matchedUser', 'badges']);
        const allProblemsSolved = get(data, ['data', 'matchedUser', 'submitStats', 'acSubmissionNum', 0, 'count']);
        const allProblems = get(data, ['data', 'allQuestionsCount', 0, 'count']);
        const easyProblemsSolved = get(data, ['data', 'matchedUser', 'submitStats', 'acSubmissionNum', 1, 'count']);
        const easyProblems = get(data, ['data', 'allQuestionsCount', 1, 'count']);
        const mediumProblemsSolved = get(data, ['data', 'matchedUser', 'submitStats', 'acSubmissionNum', 2, 'count']);
        const mediumProblems = get(data, ['data', 'allQuestionsCount', 2, 'count']);
        const hardProblemsSolved = get(data, ['data', 'matchedUser', 'submitStats', 'acSubmissionNum', 3, 'count']);
        const hardProblems = get(data, ['data', 'allQuestionsCount', 3, 'count']);
        const totalSubmissions = get(data, ['data', 'matchedUser', 'submitStats', 'totalSubmissionNum', 0, 'submissions']);
        const submissionStatsString = get(data, ['data', 'matchedUser', 'submissionCalendar']);
        const submissionStatsObject = JSON.parse(submissionStatsString,);
        const availableSubmissionTimeStamps = Object.keys(submissionStatsObject).sort();
        const submissionStatsData = [];
        for (let i = 0; i < availableSubmissionTimeStamps.length; i++) {
            if (i > 0 && getDateDiffInDays(availableSubmissionTimeStamps[i], availableSubmissionTimeStamps[i - 1]) > 1) {
                const currentDate = new Date(availableSubmissionTimeStamps[i] * 1000);
                currentDate.setDate(currentDate.getDate() - 1);
                submissionStatsData.push([currentDate.getTime(), 0]);
            }
            submissionStatsData.push([
                parseInt(availableSubmissionTimeStamps[i]) * 1000,
                parseInt(submissionStatsObject[availableSubmissionTimeStamps[i]]),
            ]);
            if (i < availableSubmissionTimeStamps.length - 1 && getDateDiffInDays(availableSubmissionTimeStamps[i + 1], availableSubmissionTimeStamps[i]) > 1) {
                const currentDate = new Date(availableSubmissionTimeStamps[i] * 1000);
                currentDate.setDate(currentDate.getDate() + 1);
                submissionStatsData.push([currentDate.getTime(), 0]);
            }
        }
        content = (
            <ContentContainer>
                <TextContainer>
                    <SectionText>World Rank: {ranking}</SectionText>
                    <SectionText>Rating: <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar /></SectionText>
                    <SectionText>Problems Solved: {allProblemsSolved}</SectionText>
                </TextContainer>
                <ChartParentContainer>
                    <ChartContainer>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={{
                                chart: {
                                    type: 'column',
                                    backgroundColor: '#0F1624',
                                },
                                title: {
                                    text: 'Problems Solved',
                                    style: {
                                        color: 'rgba(255,255,255,0.5)',
                                        fontFamily: 'Space Grotesk,sans-serif',
                                        fontSize: '18px !important',
                                    },
                                },
                                xAxis: {
                                    categories: ['All', 'Easy', 'Medium', 'Hard'],
                                    labels: {
                                        style: {
                                            color: 'rgba(255,255,255,0.5)',
                                            fontFamily: 'Space Grotesk,sans-serif',
                                            fontSize: '14px !important',
                                        },
                                    }
                                },
                                yAxis: [
                                    {
                                        min: 0,
                                        title: {
                                            text: 'Problems',
                                            style: {
                                                color: 'rgba(255,255,255,0.5)',
                                                fontFamily: 'Space Grotesk,sans-serif',
                                                fontSize: '14px !important',
                                            },
                                        },
                                        labels: {
                                            style: {
                                                color: 'rgba(255,255,255,0.5)',
                                                fontFamily: 'Space Grotesk,sans-serif',
                                                fontSize: '14px !important',
                                            },
                                        }
                                    },
                                ],
                                legend: {
                                    shadow: true,
                                    style: {
                                        color: 'rgba(255,255,255,0.5)',
                                        fontFamily: 'Space Grotesk,sans-serif',
                                        fontSize: '16px !important',
                                    },
                                },
                                tooltip: {
                                    shared: true,
                                    style: {
                                        fontFamily: 'Space Grotesk,sans-serif',
                                        fontSize: '12px !important',
                                    },
                                },
                                plotOptions: {
                                    column: {
                                        grouping: false,
                                        shadow: false,
                                        borderWidth: 0,
                                    },
                                },
                                series: [
                                    {
                                        name: 'Total',
                                        color: 'hsl(204,24%,75%)',
                                        data: [
                                            allProblems,
                                            easyProblems,
                                            mediumProblems,
                                            hardProblems,
                                        ],
                                        pointPadding: 0.3,
                                        pointPlacement: 0,
                                    },
                                    {
                                        name: 'Solved',
                                        color: 'hsl(204,24%,45%)',
                                        data: [
                                            allProblemsSolved,
                                            easyProblemsSolved,
                                            mediumProblemsSolved,
                                            hardProblemsSolved,
                                        ],
                                        pointPadding: 0.4,
                                        pointPlacement: 0,
                                    },
                                ],
                            }}
                        />
                    </ChartContainer>
                    <ChartContainer>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={{
                                chart: {
                                    zoomType: 'x',
                                    backgroundColor: '#0F1624',
                                },
                                title: {
                                    text: `${totalSubmissions} Total Submissions`,
                                    style: {
                                        color: 'rgba(255,255,255,0.5)',
                                        fontFamily: 'Space Grotesk,sans-serif',
                                        fontSize: '18px !important',
                                    },
                                },
                                subtitle: {
                                    text:
                                        document.ontouchstart === undefined
                                            ? 'Click and drag in the plot area to zoom in'
                                            : 'Pinch the chart to zoom in',
                                        style: {
                                            color: 'rgba(255,255,255,0.3)',
                                            fontFamily: 'Space Grotesk,sans-serif',
                                            fontSize: '14px !important',
                                        },
                                },
                                xAxis: {
                                    type: 'datetime',
                                    labels: {
                                        style: {
                                            color: 'rgba(255,255,255,0.5)',
                                            fontFamily: 'Space Grotesk,sans-serif',
                                            fontSize: '14px !important',
                                        },
                                    }
                                },
                                yAxis: {
                                    title: {
                                        text: 'Submissions',
                                        style: {
                                            color: 'rgba(255,255,255,0.5)',
                                            fontFamily: 'Space Grotesk,sans-serif',
                                            fontSize: '14px !important',
                                        },
                                    },
                                    labels: {
                                        style: {
                                            color: 'rgba(255,255,255,0.5)',
                                            fontFamily: 'Space Grotesk,sans-serif',
                                            fontSize: '14px !important',
                                        },
                                    }
                                },
                                legend: {
                                    enabled: false,
                                },
                                series: [
                                    {
                                        type: 'area',
                                        name: 'Problems submitted',
                                        data: submissionStatsData,
                                        color: 'hsl(204,24%,75%)',
                                    },
                                ],
                            }}
                        />
                    </ChartContainer>
                </ChartParentContainer>
                <BadgesContainer>
                    <Title>LeetCode Badges</Title>
                    <BadgeParentContainer>
                        {badges.map(({ displayName, icon }) => (
                            <Badge key={`${displayName}_${icon}`}>
                                <BadgeImage src={`https://leetcode.com${icon}`} alt={displayName} />
                                <Text>{displayName}</Text>
                            </Badge>
                        ))}
                    </BadgeParentContainer>
                </BadgesContainer>
            </ContentContainer>
        );
    }
    return (
        <div>
            <TitleLink href='https://leetcode.com/Utkarsh_Pathrabe/' target='_blank'>
                <SectionSubTitle><SiLeetcode size={'3rem'} /> LeetCode <BiLinkExternal size={'2rem'} style={{ margin: '0 0 1.5rem 0' }} /></SectionSubTitle>
            </TitleLink>
            <Content>
                {content}
            </Content>
        </div>
    );
};

export default LeetCode;