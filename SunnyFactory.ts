import { piecesList } from "./types"

export const generateDefault = () => {
  const table: number[][] = []
  for (let i = 0;i < 9; i++) {
    table.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
  }
  return {table, pieces: generatePieces()}
}

export const generatePieces = () => {
  const pieces: number[][][] = []
  for (let i = 0;i < 3; i++) {
    const piece = JSON.parse(JSON.stringify(piecesList[Math.floor(Math.random() * piecesList.length)]))
    const color = Math.floor(Math.random() * 5) + 1
    for (const x in piece) {
      for (const t in piece[x]) {
        piece[x][t] *= color
      }
    }
    pieces.push(piece)
  } 
  return pieces
}