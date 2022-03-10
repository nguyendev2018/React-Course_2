import React, { Component } from 'react'
import { ModelContext } from './_Context/ModelContext'

export default class LikeProfile extends Component {
    render() {

        return (
            <ModelContext.Consumer>
                {(value) => {
                    return <div>
                        <div className="card text-dark bg-default " style={{ width: 300 }}>
                            <div className="card-body">
                                <button onClick={() => { value.setState() }} style={{ color: "red", border: "1px solid red" }} className="card-title">Like </button>
                            </div>
                        </div>
                    </div>
                }}

            </ModelContext.Consumer>

        )
    }
}
