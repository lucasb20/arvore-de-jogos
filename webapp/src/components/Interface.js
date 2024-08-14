import { useRef, useEffect, useState } from 'react';
import { checkState, States } from '@/components/base';

export default function GameComponent(){
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const [game, setGame] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [player, setPlayer] = useState(1)
  const cellSize = 100

  const handlerClick = (ev) => {
    const x = ev.clientX - canvasRef.current.offsetLeft
    const y = ev.clientY - canvasRef.current.offsetTop
    const pos = Math.floor(x / 100) + Math.floor(y / 100)*3
    if(game[pos] === 0 && checkState(game) === States.runningMatch){
      const newGame = [...game]
      newGame[pos] = player
      setGame(newGame)
      setPlayer(player === 1 ? 2 : 1)
    }
  }

  const drawGame = () => {
    const ctx = ctxRef.current
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    for (let i = 1; i < 3; i++) {
      ctx.beginPath()
      ctx.moveTo(i * cellSize, 0)
      ctx.lineTo(i * cellSize, 3 * cellSize)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(0, i * cellSize)
      ctx.lineTo(3 * cellSize, i * cellSize)
      ctx.stroke()
    }

    for (let i = 0; i < game.length; i++) {
      const posx = (i % 3) * cellSize + cellSize / 2
      const posy = Math.floor(i / 3) * cellSize + cellSize / 2
      const player = game[i]

      if (player === 1) {
        ctx.beginPath()
        ctx.moveTo(posx - 30, posy - 30)
        ctx.lineTo(posx + 30, posy + 30)
        ctx.moveTo(posx + 30, posy - 30)
        ctx.lineTo(posx - 30, posy + 30)
        ctx.stroke()
      } else if (player === 2) {
        ctx.beginPath()
        ctx.arc(posx, posy, 30, 0, 2 * Math.PI)
        ctx.stroke()
      }
    }
  }

  const newMatch = () => {
    const newGame = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    setGame(newGame)
  }

  useEffect(() => {
    ctxRef.current = canvasRef.current.getContext('2d')
    drawGame()
  }, [game])

  return (
    <>
      <canvas 
        id='canvas'
        ref={canvasRef} 
        width={300} 
        height={300} 
        style={{ border: '1px solid black' }}
        onClick={handlerClick}
      />
      <button onClick={newMatch}>Nova Partida</button>
    </>
  )
}