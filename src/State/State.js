import React, { Component } from 'react'

export default class State extends Component {
    // state là thuộc tính có sắn của react class component giúp định nghĩa nội dung có khả năng thay đổi khi người dùng thao tác sự kiện
    // là một thuộc tính object  có giá trị có khả năng render lại
    state = {
        status: false
    }
    userLogin = {
        name: "Nguyen",
        age: 20
    }
    login() {
        // this.status = true; không set giá trị trực tiếp trên state 
        // mà phải làm setState

        //setState: là phương thức bất đồng bộ
        let newState = {
            status: true
        }
        //Gọi phương thức setState => truyền vào state mới
        this.setState(newState)
    }
    renderUserLogin() {
        if (this.state.status === true) {
            return <div className='text-center'>{this.userLogin.name}</div>
        }
        return <button onClick={() => { this.login() }}>Login</button>
    }
    render() {
        return (
            <div>
                {this.renderUserLogin()}
            </div>

        )
    }
}
