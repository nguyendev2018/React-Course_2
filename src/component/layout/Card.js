import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className='d-flex'>
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">World</strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="stretched-link">Continue reading</a>
                </div>
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">World</strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="stretched-link">Continue reading</a>
                </div>
            </div>

        )
    }
}
