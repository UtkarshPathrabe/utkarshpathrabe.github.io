'use-strict';

const leetCodeRanking = _.get(LeetCodeUserData, [
	'data',
	'matchedUser',
	'profile',
	'ranking',
]);
const leetCodeRankingSpan = document.querySelector('#leetcode-ranking-value');
leetCodeRankingSpan.textContent = leetCodeRanking;

const leetCodeProblemsSolved = _.get(LeetCodeUserData, [
	'data',
	'matchedUser',
	'submitStats',
	'acSubmissionNum',
	0,
	'count',
]);
const leetCodeProblemsSolvedSpan = document.querySelector(
	'#leetcode-problems-solved-value',
);
leetCodeProblemsSolvedSpan.textContent = leetCodeProblemsSolved;
