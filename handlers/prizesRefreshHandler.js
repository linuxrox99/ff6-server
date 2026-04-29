const { sendJson } = require('../utils/common');

module.exports = function handlePrizesRefresh(req, res) {
  return sendJson(res, {
    ts: Math.floor(Date.now() / 1000),
    result: {
      check: 'uhtotallysecure',
      prizes: []
    }
  });
};
