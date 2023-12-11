const applyBodyParser = require('./bodyParser');
const applyAuth = require('./auth');

module.exports = (app) => {
    applyBodyParser(app);
    applyAuth(app);
}