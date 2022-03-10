// Muốn quản lí cái state nào thì tạo 
// giống như component được lấy ra từ Context đó 
import React, { Component } from 'react'
import { ModelContext } from '../_Context/ModelContext'
export default class ModelStateProvider extends Component {
    state = {
        like: 1
    }
    setLike = () => {
        this.setState({
            like: this.state.like + 1
        })
    }
    render() {
        return (
            <div>
                {/* từ context sử dụng provider để chia sẻ state cho các 
                child component
                */}
                <ModelContext.Provider value={{ stateLike: this.state.like, setState: this.setLike }}>
                    {/* Phạm vi sử dụng context  */}
                    {this.props.children}
                </ModelContext.Provider>
            </div>
        )
    }
}
