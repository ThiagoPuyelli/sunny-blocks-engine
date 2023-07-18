export const showTable = (table: number[][]) => {
  let line = "   "
  for (const i in table) {
    for (const x in table[i]) {
      line += table[i][x] + '   '
    }
    line += "\n   "
  }
  console.log(line)
}

export const showPieces = (pieces: number[][][]) => {
  for (let i in pieces) {
    console.log(i)
    for (let x in pieces[i]) {
      console.log(pieces[i][x])
    }
    console.log('---------------------------------')
  }
}