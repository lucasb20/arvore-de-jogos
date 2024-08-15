import { States, utility, checkState } from "@/components/base"

class Game {
    constructor(board = [0, 0, 0, 0, 0, 0, 0, 0, 0], depth = 0){
        this.board = board
        this.val = 0
        let turn = 0
        board.forEach((value) => {
            if(value !== 0)
                turn++
        })
        this.turn = turn % 2 === 0 ? '+' : '-'
        this.children = null
        this.depth = depth
    }

    setChildren(children){
        this.children = children
    }

    setVal(val){
        this.val = val
    }
}

function expand(game){
    if(game.children !== null){
        return game.children
    }
    const state = checkState(game.board)
    if(state !== States.runningMatch){
        game.setChildren([])
        return []
    }
    const children = []
    game.board.forEach((value, index) => {
        if(value === 0){
            const son = [...game.board]
            son[index] = game.turn === '+' ? 1 : 2
            children.push(new Game(son, game.depth + 1))
        }
    })
    game.setChildren(children)
    return children
}

function bestBranch(game){
    if(game.children.length === 0){
        game.setVal(utility(game.board))
        return null
    }
    let bestVal = game.turn === '+' ? -2 : 2
    let bestChild = null
    game.children.forEach((son)=>{
        bestBranch(son)
        if(game.turn === '+'){
            if(son.val > bestVal){
                bestVal = son.val
                bestChild = son
            }
        }else{
            if(son.val < bestVal){
                bestVal = son.val
                bestChild = son
            }
        }
    })
    game.setVal(bestVal)
    return bestChild
}

function buildTree(board){
    const game = new Game(board)
    let array = expand(game)
    let index = 0
    let limit = array.length - 1
    while (index <= limit) {
        console.log(`loading ${index}/${limit}`)
        const children = expand(array[index])
        index++
        limit += children.length
        array = [...array, ...children]
    }
    return game
}

export function buildAndPlay(board){
    return bestBranch(buildTree(board))
}