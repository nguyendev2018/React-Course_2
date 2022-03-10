import React, { Component } from 'react'
import "./Styling.css";
import style from './Styling.module.css'
export default class Styling extends Component {
    render() {
        const styleText = {
            color: "pink",
            padding: "15px",
            backgroundColor: "black"
        }
        return (
            <div>
                <p className='txt'>Hello</p>
                <span className={style.txtStyle}>Hello Nguyen</span>
                <span style={styleText}>Hello Nguyen</span>
            </div>
        )
    }
}
