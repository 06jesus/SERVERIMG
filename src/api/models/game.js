const mongoose = require('mongoose')
const gameSchema = new mongoose.Schema(
  {
    titulo: { type: String, trim: true, required: true },
    desarrolladora: { type: String, trim: true, required: true },
    precio: { type: Number, trim: true, required: true },
    descripcion: { type: String, trim: true, required: true },
    img: { type: String, required: true, trim: true },
    categoria: {
      type: String,
      required: true,
      enum: ['accion', 'aventuras', 'miedo', 'coches', 'desportes']
    }
  },
  {
    timestamps: true,
    collection: 'games'
  }
)
const Game = mongoose.model('games', gameSchema, 'games')
module.exports = Game
