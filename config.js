const secret = require('./secret');

const config = {
    //MONGODB URI
    db: secret.db,
    //PORT SHOULD BE DIFFERENT THAN SERVER PORT (default 3000)
    test_port: 4242,
    test_db: 'TEST DB URI'
}

module.exports = config;