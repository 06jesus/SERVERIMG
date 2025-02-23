const upload = require('../../middlewares/file')
const { isAdmin } = require('../../middlewares/auth')
const {
  getUsers,
  register,
  login,
  deleteUsers,
  updateUsers
} = require('../controllers/users')

const usersRoutes = require('express').Router()

usersRoutes.get('/', [isAdmin], getUsers)
usersRoutes.post('/register', upload.single('img'), register)
usersRoutes.post('/login', login)
usersRoutes.delete('/:id', deleteUsers)
usersRoutes.put('/:id', updateUsers)

module.exports = usersRoutes
