const Cells = {
    empty: 0,
}

export const States = {
    draw: 0,
    runningMatch: -1,
    x: 1,
    o: 2
}

export function utility(state){
    for(let i = 0; i < 7; i+=3){
        if((state[i] == state[i+1]) && (state[i+1] == state[i+2]) && (state[i] != Cells.empty)){
            return state[i]
        }
    }
    for(let i = 0; i < 3; i++){
        if((state[i] == state[i+3]) && (state[i+3] == state[i+6]) && (state[i] != Cells.empty)){
            return state[i]
        }
    }
    if((state[0] == state[4]) && (state[4] == state[8]) && (state[0] != Cells.empty)){
            return state[0]
        }
    if((state[2] == state[4]) && (state[4] == state[6]) && (state[2] != Cells.empty)){
            return state[2]
        }

    for(let i = 0; i < 9; i++){
        if(state[i] == Cells.empty){
            return Cells.runningMatch
        }
    }

    return States.draw
}
