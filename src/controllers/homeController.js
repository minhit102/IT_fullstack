
const connection = require('../config/database')
const getHomepage = (req, res) => {
  return res.render('home.ejs')
}

const getHoidanit = (req, res) => {
  connection.query(
    'SELECT * FROM Users;',
    (err, results, fail) => {
      if (err) {
        console.error('Lỗi truy vấn:', err);
        return;
      }

      // In ra dữ liệu
      console.log('Dữ liệu trong bảng:');
      console.log(results);
      let str = 'Dữ liệu trong bảng:' + JSON.stringify(results)
      res.send(str)

    }
  )
}

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  //connection.query(
  //  `INSERT INTO Users ( email, name,city) VALUES ( ?,?,?)`,[email,name,city],
  //  function(err, results) {
  //    console.log(results);
  //    res.send("Creat succeed");
  //    
  // } 
  //);
    //connection.query(
    //'SELECT * FROM Users;',
    //(err, results, fail) => {
   //   console.log('Dữ liệu trong bảng:');
    //  console.log(results);
    //  let str = 'Dữ liệu trong bảng:' + JSON.stringify(results)
    //  res.send(str)
    //}
  //)

  //const[results,fields] = await connection.query('SELECT * FROM Users;')

  let [results,fields] = await connection.query(`INSERT INTO Users(email,name,city) VALUES(?,?,?)`,[email,name,city]);
  console.log("data : ",results);
  //res.send('Creat thành công');
  return res.send('ok');
}
const getCreatePage = (req, res) => {
  //res.send("Minh");
  return res.render('create.ejs');
};

const getedit = (req, res) => {
  res.send("Hay chinh sua")

};
module.exports = {
  getHomepage,
  getHoidanit,
  postCreateUser,
  getCreatePage,
  getedit
}