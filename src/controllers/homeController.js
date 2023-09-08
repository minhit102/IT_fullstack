
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

const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  

  
  //console.log("1.===>>>>"); 

  //console.log(req.body);
  //console.log("2.===>>>>");
  //console.log(email ,name , city );
  console.log("Hoag")
  connection.query(
    `INSERT INTO Users ( email, name,city) VALUES ( ?,?,?)`,[email,name,city],
    function(err, results) {
      console.log(results);
      res.send("Creat succeed");
      
    }
    
  );
  console.log("Hoag1")

}
module.exports = {
  getHomepage,
  getHoidanit,
  postCreateUser
}