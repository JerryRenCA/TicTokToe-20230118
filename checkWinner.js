let rowNumber = 5;
let checkRowNumber = 5;
function setOrder(_rowNumber, _checkRowNumber = 5) {
  rowNumber = _rowNumber;
  checkRowNumber = _checkRowNumber;
}

function checkWinner(boardToTest) {
  const checkRowCol = (i, boardToTest, inc,pivot) => {
    const firstId = pivot+(inc == 1 ? rowNumber * i : i);

    if (!boardToTest[firstId]) return null;
    for (let j = 1; j < checkRowNumber; j++) {
      if (boardToTest[firstId] != boardToTest[firstId + j * inc]) return null;
    }
    return boardToTest[firstId];
  };
  const checkCross = (boardToTest, inc,pivot) => {
    const firstId = pivot+(inc == 1 ? 0 : checkRowNumber - 1);

    if (!boardToTest[firstId]) return null;
    // console.log(firstId);
    for (let j = 1; j < checkRowNumber; j++) {
      if (boardToTest[firstId] != boardToTest[firstId + j * (rowNumber + inc)])
        return null;
    }
    return boardToTest[firstId];
  };
  let rzlt = null;
  for (let pivot = 0; pivot < rowNumber * rowNumber; pivot++) {
    const col=pivot%rowNumber;
    const row=(pivot-col)/rowNumber
    if(rowNumber-col<checkRowNumber)continue
    if(rowNumber-row<checkRowNumber)continue
    // console.log(pivot, col,row,rowNumber,checkRowNumber)
    for (let i = 0; i < checkRowNumber; i++) {
      rzlt = checkRowCol(i, boardToTest, 1,pivot); // check ith row
      if (rzlt) return rzlt;
      rzlt = checkRowCol(i, boardToTest, rowNumber,pivot); // check ith col
      if (rzlt) return rzlt;
    }

    rzlt = checkCross(boardToTest, 1,pivot); // check forward cross
    if (rzlt) return rzlt;
    rzlt = checkCross(boardToTest, -1,pivot); // check backward cross
    if (rzlt) return rzlt;
  }
  return null;
}

// const board = [
//   null, 'x', 'o','o','o',
//   'x', null, 'o','o','o',
//   'o', 'o', null,null,null,
//   'o', 'o', null,'o','x',
//   'o', 'o', null,'o',null,
// ]
// console.log(checkWinner(board));

module.exports = { checkWinner, setOrder };
