'use-strict';

const hackerRankBadgesImagesURL = new Map();
hackerRankBadgesImagesURL['/domains/data-structures'] =
	'https://hrcdn.net/community-frontend/assets/badges/problem-solving-ecaf59a612.svg';
hackerRankBadgesImagesURL['/domains/cpp'] =
	'https://hrcdn.net/community-frontend/assets/badges/cpp-739b350881.svg';
hackerRankBadgesImagesURL['/domains/java'] =
	'https://hrcdn.net/community-frontend/assets/badges/java-9d05b1f559.svg';
hackerRankBadgesImagesURL['/domains/python'] =
	'https://hrcdn.net/community-frontend/assets/badges/python-f70befd824.svg';
hackerRankBadgesImagesURL['/domains/tutorials/30-days-of-code'] =
	'https://hrcdn.net/community-frontend/assets/badges/30-days-of-code-a772ae4c2f.svg';
hackerRankBadgesImagesURL['/domains/tutorials/10-days-of-javascript'] =
	'https://hrcdn.net/community-frontend/assets/badges/10-days-of-javascript-94ff22d1c9.svg';
hackerRankBadgesImagesURL['/domains/tutorials/10-days-of-statistics'] =
	'https://hrcdn.net/community-frontend/assets/badges/10-days-of-statistics-94ff22d1c9.svg';
hackerRankBadgesImagesURL['/domains/sql'] =
	'https://hrcdn.net/community-frontend/assets/badges/sql-89e76e7082.svg';
hackerRankBadgesImagesURL['/domains/c'] =
	'https://hrcdn.net/community-frontend/assets/badges/c-d1985901e6.svg';

const getHackerRankLevel = (level) => {
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

const getHackerRankLevelColor = (level) => {
	switch (level) {
		case 3:
			return '#FFD700';
		case 2:
			return '#AAA9AD';
		case 1:
			return '#CD7F32';
		default:
			return '#FFFFFF';
	}
};

const getStarsIcons = (stars, color) => {
	let starIcons = [];
	for (let i = 0; i < stars; i++) {
		starIcons.push(
			`<i class="fa fa-star" style="color: ${color}; padding: 2px;"></i>`,
		);
	}
	return starIcons.join('');
};

const hackerRankBadgesNode = document.querySelector('#hackerrank-badge');

async function populateHackerRankBadges() {
	const hackerRankBadgesData = await fetch(
		'https://nodejs-server-githubio-page.herokuapp.com/hackerrank_badges',
	)
		.then((response) => response.json())
		.catch((error) => {
			console.error(
				'Error while fetching /hackerrank_badges data. Details: ',
				error,
			);
			return {
				status: true,
				models: [],
				version: 2,
			};
		});
	hackerRankBadgesData.models.forEach((data) => {
		if (data.solved > 0 && data.level > 0) {
			const divNode = document.createElement('div');
			divNode.classList.add('col-lg-4');
			divNode.classList.add('col-md-6');
			divNode.classList.add('col-sm-12');
			divNode.classList.add('col-xs-12');
			divNode.innerHTML = `<div class="card card-block">
              <img alt="" class="team-img" src="${
								hackerRankBadgesImagesURL[data.url]
							}" height="200px" style="padding: 30px;background: ${getHackerRankLevelColor(
				data.level,
			)}">
              <div class="card-title-wrap">
                <span class="card-title">${data.badge_name}</span>
              </div>
              <div class="team-over">
                <h4 class="hidden-md-down">
                  ${getHackerRankLevel(data.level)}
                </h4>
                <nav class="social-nav">
                  ${getStarsIcons(data.stars, '#FFFFFF')}
                </nav>
                <p>
                  Earned ${data.current_points} points.
                </p>
              </div>
            </div>`;
			hackerRankBadgesNode.appendChild(divNode);
		}
	});
}

populateHackerRankBadges();
