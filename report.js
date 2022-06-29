const newman = require('newman');

newman.run(
	{
		collection: require('./collection/myCollection.json'),
		iterationCount: 1,
		reporters: 'htmlextra',
		reporter: {
			htmlextra: {
				export: './Reports/report.html',
			},
		},
	},
	(err) => {
		if (err) {
			throw err;
		}
		console.log('collection run complete successfully!');
	}
);

// npm init -y -- npm init
// npm i newman
// npm i newman-reporter-htmlextra
// npm test or yarn test
