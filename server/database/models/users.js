//Login and SignUp part for Users

const connection = require('../index');
module.exports = {
    createNewUser: (params, callback) =>{
        let mysql = `INSERT INTO users (username, password, avatar, wallet, tel) VALUE(?,?,?,0,?)`;
        connection.query(mysql, params, (err,result)=>{
            return err ? callback(err,null) : callback(null, result);
        })

    },
    getUsersByName: (params, callback) => {
        let mysql = `SELECT * FROM users WHERE username=? and password=?`;
        connection.query(mysql, params, (err, result)=>{
            return err ? callback(err, null) : callback(null, result);
        })
    },
    getAllUsers : (callback) =>{
        let mysql = `SELECT * FROM users`;
        connection.query(mysql, (err, result)=>{
            return err ? callback(err, null) : callback(null, result);
        })
    }

}

    