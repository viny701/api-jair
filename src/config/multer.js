const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const { resolve, extname } = require('path');

module.exports = {

    storage: multer.memoryStorage({
        destination: (req, res, cb) => {
            cb(null, resolve(__dirname, '..', '..', 'uploads'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, res) => {
                if (err) 
                    return cb(err);
                return cb(null, res.toString('hex')+extname(file.originalname));
            })
        }
    })
};