const bcrypt = require('bcryptjs')
const connect = require('../commons/connect')

function VerifyToken(username, password, callback) {
    console.log("username in verify ", username);
    console.log('password in verify ', password)
    connect.query("SELECT username, pwd FROM user WHERE username=?", [username], (err, result) => {
        if (err) {
            console.log("Error when selecting user on login: ", err)
            return callback(err, false, 'error')
        }
        console.log('result in verify ', result)
        console.log('result.rows in verify ', result.rows)
        console.log("password in verify ", password);
        console.log('result[0] in verify ', result[0])        

        if (result.length > 0) {
            const first = result[0]
            console.log("first ", first);
            console.log('first.pwd ', first.pwd)

            if (password == first.pwd) {
                console.log("1");
                
                return callback(null, {
                    username: first.username,
                    password: first.pwd
                }, '1');
            } else {
                console.log("2");
                return callback(null, false, '2');
            }

            // bcrypt.compare(password, first.pwd, (err, res) => {
            //     if (res) {
            //         console.log('1')
            //         return callback(null, User)
            //     } else {
            //         console.log("2");                    
            //         return callback(null, false)
            //     }
            // })
        } else {
            return callback(null, false, '0')
        }

    })
}

module.exports = VerifyToken