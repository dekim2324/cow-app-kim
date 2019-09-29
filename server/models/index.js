var db = require('../database/index');

module.exports = {
    cows: {

        get: () => {

        },

        post: ({name, description}, callback) => {

            const enterCow = `INSERT INTO cow (id, name, description) 
            VALUES ('0', '${name}', '${description}' )`;

            db.query(enterCow, (err, result) => {
                if(err) throw err;

                callback(null, result);
            })

        }
    }
};