import React, { Component } from 'react';
import "./ProjectGlass.css";
import dataGlasses from "../Data/dataGlasses.json"
export default class ProjectGlass extends Component {
  state = {
    glassesCurrent: {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "./images/glassesImage/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "

    }
  }
  renderListGlasses() {
    const arrayGlasses = dataGlasses;
    const arrayNewGlasses = arrayGlasses.map((item) => {
      return <img onClick={() => { this.changeGlasses(item) }} className="image-classes" src={item.url} />
    });
    return arrayNewGlasses;
  }
  changeGlasses = (newClasses) => {
    this.setState({
      glassesCurrent: newClasses
    })
  }
  render() {
    return (
      <div className='bg'>
        <div className="bg-overPlay">
          <div className="bg-text">
            <h3 className='text-center text-bg text-light p-5'>
              Try Glasses App Online
            </h3>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="layout_1">
                  <img src="./images/glassesImage/model.jpg" alt="" className="" />
                  <img src={this.state.glassesCurrent.url} alt="" className="layout_2" />
                </div>
                <div className="layout_text">
                  <p className="text">Tên :{this.state.glassesCurrent.name}</p>
                  <p className="text"> Mô tả : {this.state.glassesCurrent.desc} </p>
                </div>
              </div>
              <div className="col-6">
                <img src="./images/glassesImage/model.jpg" alt="" />
              </div>
            </div>
          </div>
          {/* TODO các kính được chọn */}
          <div className="bg-light container text-center mt-5 d-flex">
            <div className="layout-classes">
              {this.renderListGlasses()}
            </div>

          </div>
        </div>
      </div>
    )
  }
}
