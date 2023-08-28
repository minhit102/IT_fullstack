
const connection = require('../config/database')
const getHomepage = (req,res) => {
    res.send('Hello World Hoang Trong Minh');
}

const getHoidanit = (req, res) => {
    connection.query(
        'SELECT * FROM Users;',
        (err,results,fail) => {
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
  

module.exports = {
    getHomepage,
    getHoidanit
}