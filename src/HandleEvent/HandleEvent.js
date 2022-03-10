import React, { Component } from 'react'

export default class HandleEvent extends Component {
    // định nghĩa hàm xử lý sự kiện khi người dùng click vào button click me
    handleClick() {
        alert("show click")
    }
    handleClickParams(params, button) {
        console.log(params);
        console.log(button.target);
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.handleClick
                }}>Touch me </button>
                <button id="btnClickMe" onClick={this.handleClickParams.bind("hello men", this)}>Click here!</button>
            </div>
        )
    }
}
