import { coordsSquares } from "./types"

export const findPatterns = (table: number[][]) => {
  let patterns: number[] = []
  patterns = line(table, false, patterns)
  patterns = squares(table, patterns)
  const tableCopy = rotate(table)
  patterns = line(tableCopy, true, patterns)
  return patterns
}

export const line = (table: number[][], columns: boolean, patterns: number[]) => {
  for (const i in table) {
    let isLine = true
    for (const x in table) {
      if (table[i][x] === 0) {
        isLine = false
      }
    }
    if (isLine) {
      patterns.push(columns ? parseInt(i) + 9 : parseInt(i))
    }
  }
  return patterns
}

export const rotate = (table: number[][]) => {
  const tableCopy = JSON.parse(JSON.stringify(table))
  for (const i in table) {
    for (const x in table[i]) {
      tableCopy[x][i] = table[i][x]
    }
  }
  return tableCopy
}

export const squares = (table: number[][], patterns: number[]) => {
  for (const i in coordsSquares) {
    let isSquare = true
    const {x, y} = coordsSquares[i]
    let c = y
    while (c < y + 3 && <boolean>isSquare) {
      let t = x
      while (t < x + 3 && <boolean>isSquare) {
        if (table[c][t] === 0) {
          isSquare = false
        }
        t++
      }
      c++
    }
    if (<boolean>isSquare) {
      patterns.push(18 + parseInt(i))
    }
  }
  return patterns
}