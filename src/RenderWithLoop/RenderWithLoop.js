import React, { Component } from 'react'

export default class RenderWithLoop extends Component {
    productList = [
        { id: 1, name: "black car", price: 1000, img: "./images/images-black/images-black-1/civic-1.jpg" },
        { id: 2, name: "red car", price: 1000, img: "./images/images-black/images-black-1/civic-1.jpg" },
        { id: 3, name: "silver car", price: 1000, img: "./images/images-black/images-black-1/civic-1.jpg" },
        { id: 4, name: "steel car", price: 1000, img: "./images/images-black/images-black-1/civic-1.jpg" }
    ]
    renderTable() {

        let arrayList = this.productList.map((itemProduct, index) => {
            return <tr key={index}>
                <td>{itemProduct.id}</td>
                <td>{itemProduct.name}</td>
                <td>{itemProduct.price}</td>
                <td > <img style={{ width: "100px" }} src={itemProduct.img}></img></td>
            </tr>
        });

        return arrayList;
    }
    render() {
        return (
            <div className='container'>
                <div className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </div>
            </div>
        )
    }
}
