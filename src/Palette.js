import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'


class Palette extends Component {


    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox
              background={color.color}
              name={color.name}
            />
          ));
        return (
            <div className='palette'>
                {/* Navbar Goes Here */}
                <div className='palette-colors'>
                    {colorBoxes}
                </div>
                {/* Footer eventually */}
            </div>
        )
    }
}

export default Palette
