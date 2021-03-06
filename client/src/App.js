import { useState } from 'react';
import Pixel from './components/Pixel';
import ColorPalette from './components/ColorPalette';

function App() {
  const [row, setRow] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
  const [column, setColumn] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
  const [paintBrushColor, setPaintBrushColor] = useState('#000000');

  return (
    <div>
      <div>
        {row.map((row, rowIndex) => {
          return (
            <div>
              {column.map((column, columnIndex) => {
                return <Pixel paintBrushColor={paintBrushColor}/>
              })}
            </div>
          )
        })}
      </div>
      <ColorPalette setPaintBrushColor={setPaintBrushColor} />
    </div>
  );
}

export default App;
