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

function bestBranch(game){
    if(game.children.length === 0){
        game.val = utility(game.board)
        return null
    }
    let bestVal = game.turn === '+' ? 2 : -2
    let bestChild = null
    game.board.forEach((son)=>{
        bestBranch(son)
        if(game.turn === '+'){
            if(son.val < bestVal){
                bestVal = son.val
                bestChild = son
            }
        }else{
            if(son.val > bestVal){
                bestVal = son.val
                bestChild = son
            }
        }
    })
    game.val = bestVal
    return bestChild
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