import { States, utility, checkState } from "@/components/base"

class Game {
    constructor(board = [0, 0, 0, 0, 0, 0, 0, 0, 0]){
        this.board = board
        this.val = 0
        let turn = 0
        board.forEach((value) => {
            if(value ==! 0)
                turn++
        })
        this.turn = turn % 2 === 0 ? '+' : '-'
        this.children = null
    }

    expand(){
        if(this.children !== null){
            return this.children
        }
        const state = checkState(this.board)
        if(state !== States.runningMatch){
            this.children = []
            return this.children
        }
        const children = []
        this.board.forEach((value, index) => {
            if(value === 0){
                const son = [...this.board]
                son[index] = this.turn === '+' ? 1 : 2
                children.push(new Game(son))
            }
        })
        this.children = children
        return children
    }
}

// Mock
export function bestBranch(arr){
    let player = 0
    const plays = []
    arr.forEach((value, index) => {
        if(value !== 0){
            player++
        }
        else{
            plays.push(index)
        }
    })
    console.log(plays)
    if(plays.length === 0){
        return arr
    }
    const pos = plays[Math.floor(Math.random()*plays.length)]
    const newArr = [...arr]
    newArr[pos] = player % 2 === 0 ? 1 : 2
    return newArr
}

function buildTree(board){
    const game = new Game(board)
    const stack = game.expand()
    while (true) {
        if(stack.length === 0) break
        const g = stack.pop()
        stack.concat(g.expand())
    }
    return game
}