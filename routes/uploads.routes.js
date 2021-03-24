const { Router } = require('express');
const router = Router();
const mongoose = require('mongoose');
const config = require('config');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

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

router.get('/uploads', (req, res) => {
    try {
        gfs.files.find().toArray((err, files) => {
            if (!files || files.length === 0) {
                return res.status(404).json({ message: 'No files exist' });
            }
            return res.json(files);
        });
    } catch (error) {
        return res.status(500).json({ message: "Sorry, something went wrong" });
    }
});

router.get('/uploads/:filename', async (req, res) => {
    try {
        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
            if (!file || file.length === 0) {
                return res.status(404).json({
                    message: 'No file exists'
                });
            }
            return res.json(file);
        });
    } catch (error) {
        return res.status(500).json({ message: "Sorry, something went wrong" });
    }
});


router.get('/image/:filename', async (req, res) => {
    try {
        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
            if (!file || file.length === 0) {
                return res.status(404).json({ message: 'No file exisits' })
            }
        })
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            const readstream = gfs.createReadStream(file.filename)
            readstream.pipe(res)
        } else {
            res.status(404).json({ message: 'Not an image' })
        }

    } catch (error) {
        return res.status(500).json({ message: "Could not find files, please try again" });
    }
})

router.post('/upload', upload.array('pictures', 5), async (req, res) => {
    try {
        res.status(200).redirect('/');

    } catch (error) {
        return res.status(500).json({ message: "Could not upload files, please try again" });
    }
})

router.delete('/uploads/:id', (req, res) => {
    gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
      if (err) {
        return res.status(404).json({ message: err });
      }
  
      res.redirect('/');
    });
  });

module.exports = router;