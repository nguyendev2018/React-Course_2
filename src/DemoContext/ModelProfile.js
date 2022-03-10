import React, { Component } from 'react'
import { ModelContext } from './_Context/ModelContext'

export default class ModelProfile extends Component {
    render() {
        return (
            <ModelContext.Consumer>
                {(value) => {
                    return <div>
                        <h3>Profile</h3>
                        <div className="card text-white bg-dark" style={{ width: 300 }}>
                            <div className="card-body">
                                <h4 className="card-title">Tên :Nguyên</h4>
                                <p className="card-text">Tuổi : 18</p>
                                <span style={{ color: "pink" }}> {value.stateLike} Heart</span>
                            </div>
                        </div>
                    </div>
                }}
            </ModelContext.Consumer>
        )
    }
}
