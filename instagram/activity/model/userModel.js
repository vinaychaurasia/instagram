let db = require("../utility/connection");
const { v4: uuidv4 } = require('uuid');
const { createEntityFact } = require("../utility/modelFactory");

const createUser = createEntityFact("user");

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
        db.query(`DELETE FROM user WHERE uid = "${id}"`, function(err, result){
            if(err){
                reject(err);    
            }else{
                resolve(result);
            }
        })
    })
}

module.exports.create = createUser;
module.exports.getById = getById;
module.exports.updateById = updateById;
module.exports.deleteById = deleteById;

