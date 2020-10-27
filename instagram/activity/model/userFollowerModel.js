let db = require("./connection");
const createRequest = function (mappingObj){
    return new Promise(function(resolve, reject){
        db.query('INSERT INTO user_follower SET ?', mappingObj, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(mappingObj);
            }
        })
    })
}

const acceptRequestQ = function (user_id, follower_id){
    return new Promise(function(resolve, reject){
        db.query(`UPDATE user_follower SET is_pending=0 WHERE user_id="${user_id}" AND 
            follower_id="${follower_id}" AND is_pending=1`, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

const rejectRequestQ = function (user_id, follower_id){
    return new Promise(function(resolve, reject){
        db.query(`DELETE FROM user_follower WHERE user_id="${user_id}" 
                AND follower_id="${follower_id}"`, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

const getAllFolId = function (user_id){
    return new Promise(function(resolve, reject){
        db.query(`SELECT * FROM user_follower WHERE user_id="${user_id}"`, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

module.exports.createRequest = createRequest;
module.exports.acceptRequestQ = acceptRequestQ;
module.exports.rejectRequestQ = rejectRequestQ;
module.exports.getAllFolId = getAllFolId;