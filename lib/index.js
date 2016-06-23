var log = require('kapgel-logger');
var ping = require('travis-ping');

var GITHUB_TOKEN;
var IS_PRO;
var init = false;

exports.setAuth = function (token, isPro) {
  GITHUB_TOKEN = token;
  IS_PRO = isPro;
  init = true;
};

exports.ping = function (repo, branch) {
  if (!init) {
    throw new Error('Init required');
  }
  ping.ping(
    {
      pro: IS_PRO,
      github_token: GITHUB_TOKEN
    },
    repo,
    {
      branch: branch || 'master'
    },
    function (travisResponse) {
      log.info(travisResponse);
    }
  );
};
