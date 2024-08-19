import multer from 'multer'
import User from '../models/User.js'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(req,file)
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const newName = Date.now() + '-' + file.originalname
    cb(null, newName)
  }
})

const imageFilter = async function (req, file, cb) {
  const { mimetype } = file

  if (mimetype.includes('image')) {
    cb(null, true)
  } else {
    cb(new Error('Solo se aceptan imágenes'))
  }
}

export const uploadImage = multer({ storage, fileFilter: imageFilter })