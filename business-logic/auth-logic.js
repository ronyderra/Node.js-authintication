const dal = require("../data-acces-layer/dal")

async function register(user) {
    const sql = ` insert into users values(
        default , 
        ' ${user.firstName}', 
        ' ${user.lastName}', 
        ' ${user.userName}',
        '  ${user.password}', 
         0)` ;// 0 = not admin

    const info = await dal.executeAsync(sql)
    user.userId = info.insertId;
    return user;
}


async function login(credentials) {
    const sql = ` select  * from users
     where userName = ${credentials.userName}
    and password = ${credentials.password}`;
    let user = await dal.executeAsync(sql)
    const userr = user[0];
    return userr;
}
module.exports = {
    register,
    login,
}