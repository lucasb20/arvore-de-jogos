import { useEffect, useRef } from "react"

export default function SubTree({game}){
    const canvasRef = useRef(null)
    const ctxRef = useRef(null)
    const cellSize = 30

    const handlerClick = () => {}

    const drawGame = () => {
      const ctx = ctxRef.current
  
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
  
      for (let i = 0; i < game.board.length; i++) {
        const posx = (i % 3) * cellSize + cellSize / 2
        const posy = Math.floor(i / 3) * cellSize + cellSize / 2
        const player = game.board[i]
  
        if (player === 1) {
          ctx.beginPath()
          ctx.moveTo(posx - 10, posy - 10)
          ctx.lineTo(posx + 10, posy + 10)
          ctx.moveTo(posx + 10, posy - 10)
          ctx.lineTo(posx - 10, posy + 10)
          ctx.stroke()
        } else if (player === 2) {
          ctx.beginPath()
          ctx.arc(posx, posy, 10, 0, 2 * Math.PI)
          ctx.stroke()
        }
      }
    }
  
    useEffect(() => {
      ctxRef.current = canvasRef.current.getContext('2d')
      drawGame()
    }, [])
  
    return (
      <>
        <canvas 
          className='subarvore'
          ref={canvasRef}
          width={90}
          height={90}
          style={{ border: '1px solid black' }}
          onClick={handlerClick}
        />
      </>
    )
  }