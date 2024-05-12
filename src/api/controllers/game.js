const Game = require('../models/game')

const getGames = async (req, res, next) => {
  try {
    const allGames = await Game.find()
    return res.status(200).json(allGames)
  } catch (error) {
    return res.status(400).json('Ha fallado la petión')
  }
}
const postGame = async (req, res, next) => {
  try {
    const newGame = new Game(req.body)
    if (req.file) {
      newGame.img = req.file.path
    }
    const gameSaved = await newGame.save()
    return res.status(201).json(gameSaved)
  } catch (error) {
    console.error(error)
    return res.status(400).json('error3')
  }
}
const updateGame = async (req, res, next) => {
  try {
    const { id } = req.params
    const newGame = new Game(req.body)
    newGame._id = id
    const up = await Game.findByIdAndUpdate(id, newGame, { new: true })
    return res.status(200).json(up)
  } catch (error) {
    return res.status(400).json('error')
  }
}
const deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params
    const gameDeleted = await Game.findByIdAndDelete(id)
    return res.status(200).json(gameDeleted)
  } catch (error) {
    return res.status(400).json('error')
  }
}
module.exports = {
  getGames,
  postGame,
  updateGame,
  deleteGame
}
