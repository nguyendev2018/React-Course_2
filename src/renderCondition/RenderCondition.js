import React, { Component } from 'react'

export default class RenderCondition extends Component {
  login = true;
  userName = "Thảo Nguyên";
  renderIf() {
    if (this.login) {
      return <p>Hello {this.userName}</p>
    } else {
      return <p>Đăng nhập</p>
    }
  }
  render() {
    return (
      <div>
        <p> {this.renderIf()}</p>
      </div>
    )
  }
}
