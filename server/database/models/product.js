const connection = require('../index');
module.exports = {
    getAllProduct : (callback) =>{
        let mysql = `SELECT * FROM product`;
        connection.query(mysql, (err, result)=>{
            return err ? callback(err, null) : callback(null, result);
        })
    }
}