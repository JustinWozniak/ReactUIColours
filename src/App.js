import React, { Component } from 'react';
import Palette from './Palette'
import seedColours from './seedColors'
import {generatePalette} from './colorHelpers'



class App extends Component {
  render()  {
    console.log(generatePalette(seedColours[2]))
  return (
   <div>
    <Palette {...seedColours[2]} />
   </div>
  );
}
}
export default App;
