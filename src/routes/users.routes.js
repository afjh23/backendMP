import { Router } from "express"
import { createU, find, showImage, updatePU } from "../controllers/users.controller.js"
import { handleError } from "../middlewares/middleware.js"
import { uploadImage } from "../config/multer.js"

const router = Router()

router.get('/:id', find)
router.post('/', createU)
router.patch('/:id', uploadImage.single('image'), handleError, updatePU)
router.get('/image/:nombre', showImage)

export default router