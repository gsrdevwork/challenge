'use strict';
const _ = require('lodash');
const db = require('./db.js');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        const users = _.map(db.usersById, (userInfo) => userInfo);

        const userAgeMap = _.reduce(
            users,
            (res, user) => {
                res[user.username] = user.age;
                return res;
            },
            {}
        );
        
        const filteredUsers = item ? _.reduce(
            db.itemsOfUserByUsername,
            (result, items, username) => 
                items.includes(item) ? [...result, username] : result,
            []
        ): users.map(user => user.username);

        const data = _.reduce(
            filteredUsers,
            (result, username) => ({
                ...result,
                [userAgeMap[username]]: (result[userAgeMap[username]] || 0) + 1,
            }),
            {}
        );

        return Object.keys(data).map(age => ({ age, count: data[age] }));
    };
    return mockDBCall(dataAccessMethod);
};

const getItems = () => {
    const dataAccessMethod = () => {
        const itemArray = Object.keys(db.itemsOfUserByUsername).reduce(
            (res, username) => [...res, ...db.itemsOfUserByUsername[username]],
            []
        );
        const items = _.uniqBy(itemArray);
        return items;
    };
    return mockDBCall(dataAccessMethod);
};

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith,
    getItems,
};
