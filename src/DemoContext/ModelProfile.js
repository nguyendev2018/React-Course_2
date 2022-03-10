import React, { Component } from 'react'

export default class ModelProfile extends Component {
    render() {
        return (
            <div>

                <h3>Profile</h3>
                <div className="card text-white bg-dark" style={{ width: 300 }}>
                    <div className="card-body">
                        <h4 className="card-title">Tên :Nguyên</h4>
                        <p className="card-text">Tuổi : 18</p>
                        <span style={{ color: "pink" }}> 10 Heart</span>
                    </div>
                </div>


            </div>
        )
    }
}
