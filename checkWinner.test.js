const { describe, expect, test, beforeAll } = require('@jest/globals')
const { checkWinner, setOrder } = require('./checkWinner.js')
// import path from './testImport.js'

describe('check order 3', () => {
    beforeAll(() => {
        setOrder(3,3)
    })
    test('order 3 case:', () => {
        const board = [
            'x', 'x', 'o',
            'x', 'x', 'x',
            'o', 'o', null
        ]
        expect(checkWinner(board)).toBe('x')
    })
    test('order 3 case:', () => {
        const board = [
            'x', 'o', 'o',
            'x', 'o', 'x',
            'o', 'o', null
        ]
        expect(checkWinner(board)).toBe('o')
    })
    test('order 3 case:', () => {
        const board = [
            'x', 'x', 'o',
            'x', 'o', 'x',
            'o', null, null
        ]
        expect(checkWinner(board)).toBe('o')
    })
    test('order 3 case:', () => {
        const board = [
            'x', null, 'o',
            'x', 'x', 'x',
            'o', null, 'x'
        ]
        expect(checkWinner(board)).toBe('x')
    })
})

describe('check order 4', () => {
    beforeAll(() => {
        setOrder(4,4)
    })
    test('order 4 case:', () => {
        const board = [
            'x', 'x', 'o','o',
            'x', 'o', 'o','o',
            'o', 'o', null,'o',
            'o', 'o', null,'o',
        ]
        expect(checkWinner(board)).toBe('o')
    })
})
describe('check order 5', () => {
    beforeAll(() => {
        setOrder(5,5)
    })
    test('order 5 case 1:', () => {
        const board = [
            'x', 'x', 'o','o','o',
            'x', 'x', 'o','o','o',
            'o', 'o', 'x','o','o',
            'o', 'o', null,'x','x',
            'o', 'o', null,'o','x',
        ]
        expect(checkWinner(board)).toBe('x')
    })
    test('order 5 case 2:', () => {
        const board = [
            null, 'x', 'o','o','o',
            'x', null, 'o','o','o',
            'o', 'o', null,null,null,
            'o', 'o', null,'o','x',
            'o', 'o', null,'o',null,
        ]
        expect(checkWinner(board)).toBe(null)
    })
})
describe('check order 5,4', () => {
    beforeAll(() => {
        setOrder(5,4)
    })
    test('order 5 case 1:', () => {
        const board = [
            'x', 'x', 'o','o','o',
            'x', 'x', 'o','o','o',
            'o', 'o', null,'o','o',
            'o', 'o', null,'x','x',
            'o', 'o', null,'o','x',
        ]
        expect(checkWinner(board)).toBe('o')
    })
    test('order 5 case 2:', () => {
        const board = [
            null, 'x', 'o','o','o',
            'x', null, 'x','o','o',
            'o', 'o', null,null,null,
            'o', 'o', null,'o','x',
            'o', 'o', null,'o',null,
        ]
        expect(checkWinner(board)).toBe(null)
    })
    test('order 5 case 3:', () => {
        const board = [
            null, 'o', 'o','o','o',
            'x', null, 'x','o','o',
            'o', 'o', null,null,null,
            'o', 'o', null,'o','x',
            'o', 'o', null,'o',null,
        ]
        expect(checkWinner(board)).toBe('o')
    })
})



