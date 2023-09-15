const connection = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select *from Users');
    return results;
}
const getUserbyId = async (userid) => {
    let [results, fields] = await connection.query('SELECT * FROM Users WHERE id = ?', [userid]);
    //let [results,fields] = await connection.query('select *from Users where id = ?',[userid]);
    let user = results[0];
    return user;
}
const updateUserbyId = async (name,email,city,id) => {
    let [results, fields] = await connection.query(
        `UPDATE Users
        SET name = ? , email = ?, city = ?
        WHERE id = ?`,[name,email,city,id]
        );
    
}
module.exports = {
    getAllUsers,
    getUserbyId,
    updateUserbyId
}