import React, { Component } from 'react'
import DataCar from '../Data/jsonCar.json';
import DataIcon from '../Data/jsonIconCar.json';
export default class ProjectCarAdvanced extends Component {
    state = {
        carCurrent: {
            "id": 1,
            "title": "Crystal Black",
            "type": "Pearl",
            "img": "./images/icons/icon-black.jpg",
            "srcImg": "./images/images-black/images-black-1/",
            "color": "Black",
            "price": "19,550",
            "engineType": "In-Line 4-Cylinder",
            "displacement": "1996 cc",
            "horsepower": "158 @ 6500 rpm",
            "torque": "138 lb-ft @ 4200 rpm",
            "redline": "6700 rpm",
            "wheels": [
                {
                    "idWheel": 1,
                    "srcImg": "./images/images-black/images-black-1/"
                },
                {
                    "idWheel": 2,
                    "srcImg": "./images/images-black/images-black-2/"
                },
                {
                    "idWheel": 3,
                    "srcImg": "./images/images-black/images-black-3/"
                }
            ]
        }
    }
    changeCar = (newCar) => {
        this.setState({
            carCurrent: newCar
        })
    }

    renderIcon() {
        const arrayIcon = DataCar;
        const listIcon = arrayIcon.map((item) => {
            return <div onClick={() => {
                this.changeCar(item)
            }} className="card-body pt-0 pb-0">
                <div className="row border border-link pt-2 pb-2">
                    <img className="col-2 img-100" src={item.img} alt />
                    <div className="col-10">
                        <h5>{item.title}</h5>
                        <p>{item.type}</p>
                    </div>
                </div>

            </div>
        });
        return listIcon;

    }
    changeWheel = (newWheel) => {
        // Tìm trong state hiện tại (this.state.carCurrent.wheels)
        let obWheel = this.state.carCurrent.wheels.find(item => item.idWheel === newWheel.idWheel);
        this.setState({
            carCurrent: { ...this.state.carCurrent, srcImg: obWheel.srcImg }
        })
    }
    renderWheels() {
        const arrayIcon = DataIcon;
        const listIcon = arrayIcon.map((item) => {
            return <div onClick={() => this.changeWheel(item)} className="card-body pt-0 pb-0">
                <div className="row border border-link pt-2 pb-2">
                    <img className="col-2 img-100" src={item.img} alt />
                    <div className="col-10">
                        <h5>{item.title}</h5>
                        <p>{item.price}</p>
                    </div>
                </div>

            </div>
        });
        return listIcon;
    }

    componentDidMount() {
        //Đây là phương thức có sẵn của component
        //Tự động thực thi sau khi render được gọi
        //componentDidMount chỉ chạy 1 lần đầu tiên sau khi render được thực thi
        const tagScript = document.createElement("script");
        tagScript.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.5/js-cloudimage-360-view.min.js"
        document.querySelector('.appendScript').appendChild(tagScript);
    }
    componentDidUpdate() {
        // clean ảnh cũ 
        document.querySelector('#carCurrent').innerHTML = "";
        const tagScript = document.createElement("script");
        tagScript.src = "https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js";
        document.querySelector('.appendScript').innerHTML = "";
        document.querySelector('.appendScript').appendChild(tagScript);
        // Hàm này chạy sau khi state thay đổi(tự động kích hoạt sau render)


        // Lưu ý : không được chạy setState tại component vì infinity loop
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="model">
                            <div id='carCurrent' className="cloudimage-360" data-folder={this.state.carCurrent.srcImg}
                                data-filename="civic-{index}.jpg" data-amount="8">
                            </div>
                            <div className="appendScript">
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header text-default">Exterior Color</h5>
                            <table className="table border border-color-light" border="1">
                                <tbody>
                                    <tr>
                                        <td>Color</td>
                                        <td>Black</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>$ 19</td>
                                    </tr>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td>In-line-4-cylinder</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card text-left">
                            <div className="container-fluid">
                                {this.renderIcon()}
                                {this.renderWheels()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
