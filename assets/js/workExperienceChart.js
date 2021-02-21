Highcharts.chart('work-experience-timeline-chart', {
	chart: {
		type: 'timeline',
	},
	xAxis: {
		visible: false,
	},
	yAxis: {
		visible: false,
	},
	title: {
		text: 'Work Experience',
	},
	colors: ['#6CC1D1', '#47B1C6', '#199EB8', '#147E93', '#106576'],
	series: [
		{
			data: [
				{
					name: 'Summer Intern',
					label: 'CMC Ltd., Mumbai',
					description: 'May 2014 - July 2014: CMC Ltd., Mumbai',
				},
				{
					name: 'Data Analyst Summer Intern',
					label: 'InfoCepts Technologies Pvt. Ltd., Nagpur',
					description:
						'June 2015 - July 2015: InfoCepts Technologies Pvt. Ltd., Nagpur',
				},
				{
					name: 'Intern',
					label: 'J P Morgan Chase & Co., Mumbai',
					description:
						'January 2016 - June 2016: J P Morgan Chase & Co., Mumbai',
				},
				{
					name: 'Associate Software Engineer',
					label: 'J P Morgan Chase & Co., Bengaluru',
					description:
						'June 2016 - Jan 2020: J P Morgan Chase & Co., Bengaluru',
				},
				{
					name: 'Senior Associate Software Engineer',
					label: 'J P Morgan Chase & Co., Bengaluru',
					description: 'Jan 2020 - Present: J P Morgan Chase & Co., Bengaluru',
				},
			],
		},
	],
});
