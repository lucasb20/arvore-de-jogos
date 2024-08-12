
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