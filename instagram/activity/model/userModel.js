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
    let updateStr = "";
    for(let key in updateObj){
        updateStr += `${key} = "${updateObj[key]}",`;
    }
    updateStr = updateStr.substring(0, updateStr.length-1);
    var query = `UPDATE user SET ${updateStr} WHERE uid = "${uid}"`
    return new Promise(function(resolve, reject){
        db.query(query, function(err, result){
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const deleteById = function (id){
    return new Promise(function(resolve, reject){
        db.query(`DELETE FROM user WHERE uid = ${id}`, function(err, result){
            if(err){
                reject(err);    
            }else{
                resolve(result);
            }
        })
    })
}

module.exports.create = create;
module.exports.getById = getById;
module.exports.updateById = updateById;
module.exports.deleteById = deleteById;

