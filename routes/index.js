var express = require('express');
var router = express.Router();
var multer = require('multer');

router.use(multer({ dest: './uploads/',
 rename: function (fieldname, filename) {
    return filename+Date.now();
  },
 onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
 onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
}
}));


 //GET home page. 
router.get('/', function(req, res) {
  res.render('index', { title: 'default!' });
});

router.post('/',function(req,res){
  console.log(req.files);
  res.end("File uploaded.");
});


module.exports = router;
