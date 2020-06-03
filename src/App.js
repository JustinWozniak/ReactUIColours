import React, { Component } from 'react';
import Palette from './Palette'
import seedColours from './seedColors'
import {generatePalette} from './colorHelpers'



class App extends Component {
  render()  {
  return (
   <div>
    <Palette palette={generatePalette(seedColours[2])} />
   </div>
  );
}
}
export default App;
