import { useRef, useEffect } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.fillStyle = 'red';
    context.fillRect(10, 10, 150, 100);
  }, []);

  return (
    <canvas 
      id='canvas'
      ref={canvasRef} 
      width={500} 
      height={500} 
      style={{ border: '1px solid black' }}
    />
  );
};

export default CanvasComponent;
