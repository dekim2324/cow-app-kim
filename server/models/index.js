var db = require('../database/index');

module.exports = {
    cows: {

        get: (callback) => {
            let queryStr = 'SELECT * FROM cow;'

            db.query(queryStr, (err, result) => {
                if(err) throw err;
                callback(null, result)
            })
        },

        post: ({name, description}, callback) => {

            const enterCow = `INSERT INTO cow (id, name, description) 
            VALUES ('0', '${name}', '${description}' )`;

            db.query(enterCow, (err, result) => {
                if(err) throw err;

                callback(null, result);
            })

        },

        delete: ({cow}, callback) => {
            console.log('cow', cow)

            const deleteCow = `TRUNCATE cow`;
            const deleteOne = `DELETE FROM cow WHERE name = '${cow}'`;
            let queryStr;

            cow ? queryStr = deleteOne : queryStr = deleteCow;
            
            console.log('this is queryStr', queryStr)

            db.query(queryStr, (err, result) => {
                if(err) throw err;

                callback(null, result);
            })
        },

        put: ({cow, msg}, callback) => {

            const queryStr = `UPDATE cow SET description='${msg}' WHERE name='${cow}'`

            db.query(queryStr, (err, result) => {
                if(err) throw err;

                callback(null, result)
            })
        }
    }
};