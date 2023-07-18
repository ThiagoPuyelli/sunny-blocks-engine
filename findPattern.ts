export const findPatterns = (table: number[][]) => {
  let patterns: number[] = []
  patterns = line(table, false, patterns)
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