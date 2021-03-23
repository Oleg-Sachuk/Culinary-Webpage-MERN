const { Router } = require('express');
const router = Router();
const mongoose = require('mongoose');
const config = require('config');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
// const methodOverride = require('method-override');

let gfs;

const conn = mongoose.createConnection(config.get('mongoURI'));

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);  
    gfs.collection('uploads');
})

const storage = new GridFsStorage({
    url: config.get('mongoURI'),
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });

router.get('/uploads', async (req,res) => {
    try {
        gfs.files.find().toArray( (err, files) => {
            if(!files || files.length === 0) {
                return res.status(404).json({message: 'No files exisits'})
            }
        })
        res.status(200).json(files);
        
    } catch (error) {
        return res.status(500).json({ message: "Could not find files, please try again" });
    }
})

router.get('/uploads/:filename', async (req,res) => {
    try {
        gfs.files.findOne({filename: req.params.filename}, (err, file) => {
            if(!file || file.length === 0) {
                return res.status(404).json({message: 'No file exisits'})
            }
        }) 
        res.status(200).json(file);
        
    } catch (error) {
        return res.status(500).json({ message: "Could not find files, please try again" });
    }
}
)
router.get('/image/:filename', async (req,res) => {
    try {
        gfs.files.findOne({filename: req.params.filename}, (err, file) => {
            if(!file || file.length === 0) {
                return res.status(404).json({message: 'No file exisits'})
            }
        }) 
        if(file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            const readstream = gfs.createReadStream(file.filename)
            readstream.pipe(res)
        } else {
            res.status(404).json({message: 'Not an image'})
        }
        
    } catch (error) {
        return res.status(500).json({ message: "Could not find files, please try again" });
    }
})

router.post('/upload', upload.single('pictures'), async (req,res) => {
    debugger;
    try {
        res.status(200).json({file: req.file});
        
    } catch (error) {
        return res.status(500).json({ message: "Could not uploaf files, please try again" });
    }
})

module.exports = router;