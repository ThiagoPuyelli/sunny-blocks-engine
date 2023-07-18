import { generatePieces } from "./SunnyFactory"
import { findPatterns, rotate } from "./findPattern"
import { coordsSquares } from "./types"

export const action = (table: number[][], pieces: number[][][], x: number, y: number, piece: number) => {
  for (const i in pieces[piece]) {
    for (const t in pieces[piece][i]) {
      const actual = pieces[piece][i][t]
      if (actual !== 0 && table[y + parseInt(i)][x + parseInt(t)] === 0) {
        table[y + parseInt(i)][x + parseInt(t)] = actual
      } else if (actual !== 0 && table[y + parseInt(i)][x + parseInt(t)] !== 0) {
        return false
      }
    }
  }
  pieces.splice(piece, 1)
  if (pieces.length === 0) {
    pieces = generatePieces()
  }
  const patterns = findPatterns(table)
  if (patterns.length > 0) {
    for (const i in patterns) {
      if (patterns[i] < 18) {
        table = restoreLine(table, patterns[i], patterns[i] >= 9)
      } else {
        table = restoreSquare(table, patterns[i] - 18)
      }
    }
    table = restoreTable(table)
  }
  return {table, pieces}
}

const restoreLine = (table: number[][], line: number, column: boolean) => {
  if (column) {
    line -= 9
    table = rotate(table)
  }
  for (const i in table[line]) {
    if ((table[line][i] + '')[0] !== '9') {
      table[line][i] = 90 + table[line][i]
    }
  }
  if (column) {
    table = rotate(table)
  }
  return table
}

const restoreSquare = (table: number[][], coordSquare: number) => {
  const {x, y} = coordsSquares[coordSquare]
  for (let c = x;c < x + 3;c++) {
    for (let t = y;t < y + 3;t++) {
      if ((table[c][t] + '')[0] !== '9') {
        table[c][t] = 90 + table[c][t]
      }
    }
  }
  return table
}

const restoreTable = (table: number[][]) => {
  for (const i in table) {
    for (const x in table[i]) {
      if ((table[i][x] + '')[0] === '9') {
        table[i][x] = 0
      }
    }
  }
  return table
}