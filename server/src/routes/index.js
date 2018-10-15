const emailRoutes = require('./emailRoutes');
const staticFileRoutes = require('./staticFileRoutes');

module.exports = app => {
    emailRoutes(app);
    staticFileRoutes(app);
    // Other route groups could go here, in the future
};
