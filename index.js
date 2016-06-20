var travisPing = require('travis-ping');
travisPing.ping(
  {
    pro: true,
    github_token: process.env.GITHUB_TOKEN
  },
  process.env.ORG_NAME + '/' + process.env.REPO_NAME,
  {
    branch: process.env.BRANCH || 'master'
  },
  function (travisResponse) {
    console.log(travisResponse)
  }
);
