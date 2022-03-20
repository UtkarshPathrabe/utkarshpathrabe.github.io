import React from 'react';
import useSWR from 'swr';
import { BiErrorCircle } from 'react-icons/bi';
import { Bars } from 'react-loading-icons';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { SectionText } from '../../../styles/GlobalComponents';
import { ErrorContent, ChartContainer } from './HackerRankStyles';
import { fetcher } from '../../../utilities/utils';

const HackerRankSubmissions = () => {
    const { data, error } = useSWR('https://nodejs-server-githubio-page.herokuapp.com/hackerrank_submission_histories', fetcher);
    let content;
    if (error) {
        content = (
            <ErrorContent>
                <BiErrorCircle size='3rem' />
                <SectionText>Failed to load HackerRank submissions data.</SectionText>
            </ErrorContent>
        );
    }else if (!data) {
        content = (
            <Bars width='5rem' height='4rem' />
        );
    } else {
        content = (
            <ChartContainer>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={{
                        chart: {
                            zoomType: 'x',
                            backgroundColor: '#0F1624',
                        },
                        title: {
                            text: `HackerRank Submissions`,
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
                                data: data,
                                color: 'hsl(204,24%,75%)',
                            },
                        ],
                    }}
                />
            </ChartContainer>
        );
    }
    return (
        <>
            {content}
        </>
    );
};

export default HackerRankSubmissions;