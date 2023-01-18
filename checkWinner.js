
let rowNumber = 4
function setOrder(_rowNumber) {
    rowNumber = _rowNumber
}

function checkWinner(boardToTest) {
    const checkRowCol = (i, boardToTest, inc) => {
        let firstId = inc == 1 ? (rowNumber * i) : (rowNumber)
        if (!boardToTest[firstId]) return null
        for (let j = 1; j < rowNumber; j++) {
            if (boardToTest[firstId] != boardToTest[firstId + j * inc])
                return null
        }
        return boardToTest[firstId]
    }
    const checkCross = (boardToTest, inc) => {
        let firstId = inc == 1 ? (0) : (rowNumber - 1)
        if (!boardToTest[firstId]) return null
        for (let j = 1; j < rowNumber; j++) {
            if (boardToTest[firstId] != boardToTest[firstId + j * (rowNumber + inc)])
                return null
        }
        return boardToTest[firstId]
    }
    let rzlt = null;
    for (let i = 0; i < rowNumber; i++) {
        rzlt = checkRowCol(i, boardToTest, 1)// check ith row
        if (rzlt) return rzlt;
        rzlt = checkRowCol(i, boardToTest, -1)// check ith col
        if (rzlt) return rzlt;
    }

    rzlt = checkCross(boardToTest, 1)// check normal cross
    if (rzlt) return rzlt;
    rzlt = checkCross(boardToTest, -1)// check inverse cross
    if (rzlt) return rzlt;
    return null;
}

module.exports = { checkWinner, setOrder }