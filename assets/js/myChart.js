'use-strict';

const leetCodeRanking = _.get(LeetCodeUserData, [
	'data',
	'matchedUser',
	'profile',
	'ranking',
]);
const leetCodeRankingSpan = document.querySelector('#leetcode-ranking-value');
leetCodeRankingSpan.textContent = leetCodeRanking;

const leetCodeAllProblemsSolved = _.get(LeetCodeUserData, [
	'data',
	'matchedUser',
	'submitStats',
	'acSubmissionNum',
	0,
	'count',
]);
const leetCodeAllProblemsSolvedSpan = document.querySelector(
	'#leetcode-problems-solved-value',
);
leetCodeAllProblemsSolvedSpan.textContent = leetCodeAllProblemsSolved;

const leetCodeAllProblems = _.get(LeetCodeUserData, [
	'data',
	'allQuestionsCount',
	0,
	'count',
]);

const leetCodeEasyProblemsSolved = _.get(LeetCodeUserData, [
	'data',
	'matchedUser',
	'submitStats',
	'acSubmissionNum',
	1,
	'count',
]);
const leetCodeEasyProblems = _.get(LeetCodeUserData, [
	'data',
	'allQuestionsCount',
	1,
	'count',
]);

const leetCodeMediumProblemsSolved = _.get(LeetCodeUserData, [
	'data',
	'matchedUser',
	'submitStats',
	'acSubmissionNum',
	2,
	'count',
]);
const leetCodeMediumProblems = _.get(LeetCodeUserData, [
	'data',
	'allQuestionsCount',
	2,
	'count',
]);

const leetCodeHardProblemsSolved = _.get(LeetCodeUserData, [
	'data',
	'matchedUser',
	'submitStats',
	'acSubmissionNum',
	3,
	'count',
]);
const leetCodeHardProblems = _.get(LeetCodeUserData, [
	'data',
	'allQuestionsCount',
	3,
	'count',
]);

Highcharts.chart('leetcode-problems-solved-chart', {
	chart: {
		type: 'column',
	},
	title: {
		text: 'Problems Solved',
	},
	xAxis: {
		categories: ['All', 'Easy', 'Medium', 'Hard'],
	},
	yAxis: [
		{
			min: 0,
			title: {
				text: 'Problems',
			},
		},
	],
	legend: {
		shadow: true,
	},
	tooltip: {
		shared: true,
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
			color: '#6CC1D1',
			data: [
				leetCodeAllProblems,
				leetCodeEasyProblems,
				leetCodeMediumProblems,
				leetCodeHardProblems,
			],
			pointPadding: 0.3,
			pointPlacement: 0,
		},
		{
			name: 'Solved',
			color: '#0D515E',
			data: [
				leetCodeAllProblemsSolved,
				leetCodeEasyProblemsSolved,
				leetCodeMediumProblemsSolved,
				leetCodeHardProblemsSolved,
			],
			pointPadding: 0.4,
			pointPlacement: 0,
		},
	],
});
