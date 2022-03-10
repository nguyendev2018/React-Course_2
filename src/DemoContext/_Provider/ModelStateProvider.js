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
                <ModelContext.Provider>
                    {/* Phạm vi sử dụng context  */}
                </ModelContext.Provider>
            </div>
        )
    }
}
