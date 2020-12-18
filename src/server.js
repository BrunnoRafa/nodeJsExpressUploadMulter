const express = require('express'),
  app = express(),
  multer = require('multer'),
  path = require('path');


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now());
//   }
// });


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//   }
// });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// cria uma instância do middleware configurada
// const upload = multer({ dest: 'uploads/' });
const uploads = multer({ storage });


app.use(express.static('public'));

app.post('/file/upload', uploads.single('file'),
  (req, res) => res.send('<h2>Upload realizado com sucesso</h2>'));

app.listen(3000, () => console.log('app rodando na porta 3000'));