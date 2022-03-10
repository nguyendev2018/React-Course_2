import React, { Component } from 'react'
import LikeProfile from './LikeProfile'
import ModelProfile from './ModelProfile'

export default class DemoContext extends Component {
    render() {
        return (
            <div className='container'>
                <ModelProfile />
                <LikeProfile />
            </div>
        )
    }
}
