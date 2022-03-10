import React, { Component } from 'react'

export default class DatazBinding extends Component {
    // tạo 1 thuộc tính
    name = "Nguyễn Thị Thảo Nguyên";
    student = {
        job: "developer",
        experience: " 2 years"
    }
    //binding method(function of class)
    //Tất cả các hàm render đều phải trả về component(jsx)
    renderImage() {
        return <img src="https://static2.yan.vn/YanNews/2167221/202202/linh-vat-ho-co-cai-ket-vien-man-sau-bao-ngay-bi-be-ve-lam-cua-rieng-a1196cd5.jpeg" alt='covid.jpg' />
    }
    renderMulti() {
        const virus = {
            id: "Covid -19",
            age: "Corona"
        }
    }
    renderInfoVirus() {
        const virus = {
            id: "Covid-19",
            name: "Corona",
            info: "Sars-cov-19"
        }
        return (
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{virus.name}</h5>
                    <p className="card-text">{virus.info}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        )

    }
    render() {
        // variable of render function-> not use function different
        const age = 23;

        return (
            <div>
                <ul>
                    <h4>Data Binding</h4>
                    {/* TODO truy xuất đến thuộc tính của đối tượng */}
                    <li>
                        Name:  {this.name} age: {age}
                    </li>
                    <li>
                        Chuyên ngành:{this.student.job}
                    </li>
                    <li>
                        Kinh nghiệm:{this.student.experience}
                    </li>
                </ul>
                <ul>
                    Binding function
                    <li>
                        {this.renderImage()}
                    </li>
                    <li>
                        {this.renderInfoVirus()}
                    </li>
                </ul>
            </div>
        )
    }
}
