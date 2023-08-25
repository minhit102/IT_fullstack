const getHomepage = (req,res) => {
    res.send('Hello World Hoang Trong Minh');
}

const getHoidanit = (req, res) => {
    //res.send('Hello World!123')
    res.render('sample.ejs')
  }

module.exports = {
    getHomepage,
    getHoidanit
}