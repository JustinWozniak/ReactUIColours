import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import './navbar.css'
import Slider from 'rc-slider'



class Navbar extends Component {
    render() {
        const { level, changeLevel } = this.props
        return (
            <header className='navbar'>
                <div className='logo'>
                    <a href='./'>JUSTINSCOLORIZOR</a>
                </div>
                <div className='slider-container'>
                <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider
                            defualt={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar
