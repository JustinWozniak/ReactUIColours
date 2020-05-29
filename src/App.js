import React from 'react';
import Palette from './Palette'
import seedColours from './seedColors'

function App() {
  return (
   <div>
    <Palette {...seedColours[2]} />
   </div>
  );
}

export default App;
