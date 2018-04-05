const connect = require('../commons/connect')
const VerifyToken = require('../auth/VerifyToken')

const User = {

    getAllUsers: (callback) => {
        return connect.query("SELECT * FROM user", [], callback)
    },

    getUserById: (id, callback) => {
        return connect.query("SELECT * FROM user WHERE userid=?", [id], callback)
    },

    getUserByUsername:(username, callback) => {
        return db.query("SELECT userid, username, pwd FROM user WHERE username=?", [username], callback)
    },

    postNewUser: (User, hashedpwd, callback) => {
        console.log(hashedpwd)
        return connect.query("INSERT INTO user (firstname, lastname, gender, address, tel, email, image, username, pwd) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [User.firstname, User.lastname, User.gender, User.address, User.tel, User.email, User.image, User.username, hashedpwd], callback);
    },

    deleteUser: (id, callback) => {
        return connect.query("DELETE FROM user WHERE userid=?", [id], callback)
    },

    updateUser: (id, User, callback) => {
        return connect.query("UPDATE user SET firstname=?, lastname=?, gender=?, address=?, tel=?, email=?, username=?, pwd=? WHERE userid=?", [User.Firstname, User.Lastname, User.Gender, User.Address, User.Tel, User.Email, User.Username, User.pwd], callback);
    },

    authenticate: (username, password, callback) => {
        return VerifyToken(username, password, callback);
    }

}

module.exports = User