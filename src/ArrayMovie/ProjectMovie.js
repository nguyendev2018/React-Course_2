import React, { Component } from 'react'
import DataFilm from "./DataFilm.json";
import Styling from "./ProjectMovie.css"
export default class ProjectMovie extends Component {
    listMovie = DataFilm;
    renderList() {
        const arrayList = this.listMovie.map((itemMovie, index) => {
            return <div className="card text-center">
                <img src={itemMovie.hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{itemMovie.tenPhim}</h5>
                    <p className="card-text">{itemMovie.moTa}</p>
                </div>
            </div>

        })
        return arrayList
    }
    render() {
        return (
            <div>
                <div className="bg " style={Styling}>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}
