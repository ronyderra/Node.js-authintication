class User {
    constructor(userId, firstName, lastName, userName, password, isAdmin) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
module.exports = User;