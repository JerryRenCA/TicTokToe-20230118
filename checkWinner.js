let rowNumber = 5;
function setOrder(_rowNumber) {
  rowNumber = _rowNumber;
}

function checkWinner(boardToTest) {
  const checkRowCol = (i, boardToTest, inc) => {
    const firstId = inc == 1 ? rowNumber * i : i;
    if (!boardToTest[firstId]) return null;
    for (let j = 1; j < rowNumber; j++) {
      if (boardToTest[firstId] != boardToTest[firstId + j * inc]) return null;
    }
    return boardToTest[firstId];
  };
  const checkCross = (boardToTest, inc) => {
    const firstId = inc == 1 ? 0 : rowNumber - 1;
    if (!boardToTest[firstId]) return null;
    console.log(firstId)
    for (let j = 1; j < rowNumber; j++) {
      if (boardToTest[firstId] != boardToTest[firstId + j * (rowNumber + inc)])
        return null;
    }
    return boardToTest[firstId];
  };
  let rzlt = null;
  for (let i = 0; i < rowNumber; i++) {
    rzlt = checkRowCol(i, boardToTest, 1); // check ith row
    if (rzlt) return rzlt;
    rzlt = checkRowCol(i, boardToTest, rowNumber); // check ith col
    if (rzlt) return rzlt;
  }

  rzlt = checkCross(boardToTest, 1); // check forward cross
  if (rzlt) return rzlt;
  rzlt = checkCross(boardToTest, -1); // check backward cross
  if (rzlt) return rzlt;
  return null;
}

const board = [
  'x', 'x', 'o','o','o',
  'x', 'x', 'o','o','o',
  'o', 'o', 'x','o','o',
  'o', 'o', null,'x','x',
  'o', 'o', null,'o','x',
]
console.log(checkWinner(board))

module.exports = { checkWinner, setOrder };
