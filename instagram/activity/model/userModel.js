let db = require("./connection");
const { v4: uuidv4 } = require('uuid');
// will create user in DB
const create = function (userObj){
    userObj.uid = uuidv4();
    return new Promise(function(resolve, reject){
        db.query('INSERT INTO user SET ?', userObj, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(userObj);
            }
        })
    })
}

const getById = function (id){
    return new Promise(function(resolve, reject){
        db.query(`SELECT * FROM user WHERE uid = "${id}"`, function(err, result){
            if(err){
                reject(err);
            }else{
                resolve(result[0]);
            }
        })
    })
}

const updateById = function (uid, updateObj){

}

const deleteById = function (id){

}

module.exports.create = create;
module.exports.getById = getById;
module.exports.updateById = updateById;
module.exports.deleteById = deleteById;

