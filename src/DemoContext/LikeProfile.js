import React, { Component } from 'react'

export default class LikeProfile extends Component {
    render() {
        return (
            <div>
                <div className="card text-dark bg-default " style={{ width: 300 }}>
                    <div className="card-body">
                        <button style={{ color: "red", border: "1px solid red" }} className="card-title">Like</button>
                    </div>
                </div>
            </div>
        )
    }
}
