// import path from "path"
// const board1 = [
//     'o', 'o', 'o',
//     null, null, 'x',
//     'x', null, null
// ]
// const board2 = [
//     'x', 'o', 'o',
//     null, 'o', 'x',
//     'x', 'o', null
// ]
// const board3 = [
//     'x', 'o', 'o',
//     null, null, 'x',
//     'o', 'o', null
// ]
// const board4 = [
//     'x', 'o', 'o',
//     'x', null, 'x',
//     'x', 'o', null
// ]
// const board5 = [
//     'x', 'x', 'o',
//     null, 'x', 'x',
//     'o', 'o', 'x'
// ]
// const board6 = [
//     'x', 'x', 'o',
//     'x', 'o', 'x',
//     'o', 'o', null
// ]
const board7 = [
    'x', 'x', 'o','o',
    'x', 'o', 'x','o',
    'o', 'o', null,'o',
    'o', 'o', null,'o',
]
const board8 = [
    'x', 'x', 'o','o',
    'x', 'o', 'o','x',
    'o', 'o', null,'o',
    'o', 'o', null,'o',
]
const board9 = [
    'x', 'x', 'o','o',
    'x', 'o', 'x','o',
    'o', 'o', null,null,
    'o', 'o', null,'o',
]
const board10 = [
    'x', 'x', 'o','o',
    'x', 'x', 'x','o',
    'o', 'o', 'x','o',
    'o', 'o', null,'x',
]


 let rowNumber=4
 function setOrder(_rowNumber)
 {
    rowNumber=_rowNumber
 }
function checkWinner(boardToTest) {
    const checkRowCol=(i,boardToTest,inc)=>{
        let firstId=inc==1?(rowNumber*i):(i)
        if(!boardToTest[firstId]) return null
        for(let j=1;j<rowNumber;j++){
            if(boardToTest[firstId]!=boardToTest[firstId+j*inc])
                return null
        }
        return boardToTest[firstId]
    }
    const checkCross=(boardToTest,inc)=>{
        let firstId=inc==1?(0):(rowNumber-1)
        if(!boardToTest[firstId]) return null
        for(let j=1;j<rowNumber;j++){
            if(boardToTest[firstId]!=boardToTest[firstId+j*(rowNumber+inc)])
                return null
        }
        return boardToTest[firstId]
    }
    let rzlt=null;
    for(let i=0;i<rowNumber;i++){
        rzlt= checkRowCol(i,boardToTest,1)// check ith row
        if(rzlt) return rzlt;
        rzlt= checkRowCol(i,boardToTest,rowNumber)// check ith col
        if(rzlt) return rzlt;
    }
    
    rzlt= checkCross(boardToTest,1)// check normal cross
    if(rzlt) return rzlt;
    rzlt= checkCross(boardToTest,-1)// check inverse cross
    if(rzlt) return rzlt;
    return null;
}

// console.log(checkWinner(board1))
// console.log(checkWinner(board2))
// console.log(checkWinner(board3))
// console.log(checkWinner(board4))
// console.log(checkWinner(board5))
// console.log(checkWinner(board6))
// console.log(checkWinner(board7))
// console.log(checkWinner(board8))
// console.log(checkWinner(board9))
// console.log(checkWinner(board10))

module.exports= {checkWinner,setOrder}