import React, { Component } from 'react'

export default class ProjectCar extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-7">
                            <img className="img-fluid" src={require('../assets/images/images-red/images-red-1/civic-1.jpg')} alt="red_car " />
                        </div>
                        <div className="col-5">
                            <div className="card ">
                                <div className="card-header text-primary">
                                    Exterior Color
                                </div>
                                <div className="card-body pt-0 pb-0">
                                    <div className="row border border-link pt-2 pb-2">
                                        <img className="col-2 img-100" src={require('../assets/images/icons/icon-black.jpg')} alt />
                                        <div className="col-10">
                                            <h5>Crystal Black</h5>
                                            <p>Pearl</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-body pt-0 pb-0">
                                    <div className="row border border-link pt-2 pb-2">
                                        <img className="col-2 img-100" src={require('../assets/images/icons/icon-red.jpg')} alt />
                                        <div className="col-10">
                                            <h5>Crystal Black</h5>
                                            <p>Pearl</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-body pt-0 pb-0">
                                    <div className="row border border-link pt-2 pb-2">
                                        <img className="col-2 img-100" src={require('../assets/images/icons/icon-silver.jpg')} alt />
                                        <div className="col-10">
                                            <h5>Crystal Black</h5>
                                            <p>Pearl</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="card-body pt-0 pb-0">
                                    <div className="row border border-link pt-2 pb-2">
                                        <img className="col-2 img-100" src={require('../assets/images/icons/icon-steel.jpg')} alt />
                                        <div className="col-10">
                                            <h5>Crystal Black</h5>
                                            <p>Pearl</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}