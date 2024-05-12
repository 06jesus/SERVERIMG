const upload = require('../../middlewares/file')
const { isAdmin } = require('../../middlewares/auth')
const {
  postConsolas,
  putConsolas,
  getConsolasById,
  getConsolas,
  deleteConsolas
} = require('../controllers/consolas')

const consolasRouter = require('express').Router()

consolasRouter.get('/:id', getConsolasById)
consolasRouter.get('/', getConsolas)
consolasRouter.post('/', upload.single('img'), [isAdmin], postConsolas)
consolasRouter.put('/:id', [isAdmin], putConsolas)
consolasRouter.delete('/:id', [isAdmin], deleteConsolas)

module.exports = consolasRouter
