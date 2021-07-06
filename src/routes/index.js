'use strict';
const express = require('express')

module.exports = (app) => {
    require('./healthCheck.js')(app);
    require('./getUsers.js')(app);
    require('./getListOfAgesOfUsersWith.js')(app);
    require('./getItems.js')(app);
    app.get('/*', express.static('public'))
};;
