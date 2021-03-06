'use-strict';

const windowWidth = $(window).width();

async function populateLeetCodeData() {
	const LeetCodeUserData = await fetch(
		'https://nodejs-server-githubio-page.herokuapp.com/leetcode_data',
	)
		.then((response) => response.json())
		.catch((error) => {
			console.error(
				'Error while fetching /leetcode_data data. Details: ',
				error,
			);
			return {};
		});
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

	const leetCodeProblemsSolvedChart = Highcharts.chart(
		'leetcode-problems-solved-chart',
		{
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
					color: '#106576',
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
		},
	);
	if (windowWidth < 768) {
		leetCodeProblemsSolvedChart.setSize(windowWidth - 50, 350);
	}

	const leetCodeTotalSubmissions = _.get(LeetCodeUserData, [
		'data',
		'matchedUser',
		'submitStats',
		'totalSubmissionNum',
		0,
		'submissions',
	]);
	const leetCodeSubmissionStatsString = _.get(LeetCodeUserData, [
		'data',
		'matchedUser',
		'submissionCalendar',
	]);
	const leetCodeSubmissionStatsObject = JSON.parse(
		leetCodeSubmissionStatsString,
	);
	const leetCodeAvailableSubmissionTimeStamps = Object.keys(
		leetCodeSubmissionStatsObject,
	).sort();
	const getDateDiffInDays = (date2, date1) =>
		Math.ceil(
			Math.abs(new Date(date2 * 1000) - new Date(date1 * 1000)) /
				(1000 * 60 * 60 * 24),
		);
	const leetCodeSubmissionStatsData = [];
	for (let i = 0; i < leetCodeAvailableSubmissionTimeStamps.length; i++) {
		if (
			i > 0 &&
			getDateDiffInDays(
				leetCodeAvailableSubmissionTimeStamps[i],
				leetCodeAvailableSubmissionTimeStamps[i - 1],
			) > 1
		) {
			const currentDate = new Date(
				leetCodeAvailableSubmissionTimeStamps[i] * 1000,
			);
			currentDate.setDate(currentDate.getDate() - 1);
			leetCodeSubmissionStatsData.push([currentDate.getTime(), 0]);
		}
		leetCodeSubmissionStatsData.push([
			parseInt(leetCodeAvailableSubmissionTimeStamps[i]) * 1000,
			parseInt(
				leetCodeSubmissionStatsObject[leetCodeAvailableSubmissionTimeStamps[i]],
			),
		]);
		if (
			i < leetCodeAvailableSubmissionTimeStamps.length - 1 &&
			getDateDiffInDays(
				leetCodeAvailableSubmissionTimeStamps[i + 1],
				leetCodeAvailableSubmissionTimeStamps[i],
			) > 1
		) {
			const currentDate = new Date(
				leetCodeAvailableSubmissionTimeStamps[i] * 1000,
			);
			currentDate.setDate(currentDate.getDate() + 1);
			leetCodeSubmissionStatsData.push([currentDate.getTime(), 0]);
		}
	}
	const leetCodeSubmissionsStatTimeSeriesChart = Highcharts.chart(
		'leetcode-submissions-stat-time-series-chart',
		{
			chart: {
				zoomType: 'x',
			},
			title: {
				text: `${leetCodeTotalSubmissions} submissions in the last year`,
			},
			subtitle: {
				text:
					document.ontouchstart === undefined
						? 'Click and drag in the plot area to zoom in'
						: 'Pinch the chart to zoom in',
			},
			xAxis: {
				type: 'datetime',
			},
			yAxis: {
				title: {
					text: 'Submissions',
				},
			},
			legend: {
				enabled: false,
			},
			series: [
				{
					type: 'area',
					name: 'Problems submitted',
					data: leetCodeSubmissionStatsData,
					color: '#199eb8',
				},
			],
		},
	);
	if (windowWidth < 768) {
		leetCodeSubmissionsStatTimeSeriesChart.setSize(windowWidth - 50, 350);
	}
}

populateLeetCodeData();
