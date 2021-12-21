import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";
import Axios from "../../Utils/Axios"
// import { Redirect } from "react-router-dom";

class Add extends Component {
    constructor(props) {
        super(props);
        this.firstInput = React.createRef();
        this.socketIo = React.createRef();
        this.state = {
            errorValidate: '',
            method: 'register',
            inputName: '',
            inputDay: 0,
            inputMonth: 0,
            inputYear: 0,
            inputGender: -1,
            inputID: 0,
            checkboxInsurance: false,
            checkboxPaycheck: false,
            checkboxPaymentDien: false
        };
    }

    onHandleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onHandleSubmit(e) {
        let validate = {
            inputName: '',
            inputDay: 0,
            inputMonth: 0,
            inputYear: 0,
            inputGender: -1,
            inputID: 0,
            inputPhone: 0
        };

        e.preventDefault();

        let lastKey = Object.keys(validate);
        for (let x in validate) {
            if (validate[x] === this.state[x] || e.target[x].value === '') {
                return this.setState({ errorValidate: 'Đã có lỗi xảy ra, vui lòng kiểm tra lại' });
            }
            else if (x.toString() === lastKey[lastKey.length - 1]) {
                axios.post(Axios("addcustomer"), this.state)
                    .then(async res => {
                        let data = this.state;
                        data._id = res.data._id;
                        e.target.reset();
                        this.socketIo.current = await socketIOClient.connect(Axios(""));
                        this.socketIo.current.emit("sendDataClient", data, () => {
                            this.socketIo.current.disconnect();
                        });
                        this.firstInput.current.focus();
                    })
                    .catch(err => console.log(err));
            }
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <form onSubmit={(e) => { this.onHandleSubmit(e); }} autoComplete="off">
                    <div className="form-group">
                        <label>Họ và tên</label>
                        <input type="text"
                            className="form-control" name="inputName"
                            onChange={(e) => this.onHandleChange(e)}
                            ref={this.firstInput} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Ngày</label>
                            <input type="number"
                                className="form-control" name="inputDay"
                                onChange={(e) => this.onHandleChange(e)} />
                        </div>
                        <div className="form-group col">
                            <label>Tháng</label>
                            <input type="number"
                                className="form-control" name="inputMonth"
                                onChange={(e) => this.onHandleChange(e)} />
                        </div>
                        <div className="form-group col">
                            <label>Năm sinh</label>
                            <input type="number"
                                className="form-control" name="inputYear"
                                onChange={(e) => this.onHandleChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Chọn giới tính</label>
                        <div>
                            <select className="custom-select w-50" name="inputGender"
                                onChange={(e) => this.onHandleChange(e)}>
                                <option value={-1}>Chọn giới tính</option>
                                <option value={0}>Nam</option>
                                <option value={1}>Nữ</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input type="number"
                            className="form-control" name="inputPhone"
                            onChange={(e) => this.onHandleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>Số CCCD</label>
                        <input type="number"
                            className="form-control" name="inputID"
                            onChange={(e) => this.onHandleChange(e)} />
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="checkboxInsurance"
                                onChange={(e) => this.onHandleChange(e)} />
                            Bảo hiểm nhân thọ
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="checkboxPaycheck"
                                onChange={(e) => this.onHandleChange(e)} />
                            Bảng lương
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="checkboxPaymentDien"
                                onChange={(e) => this.onHandleChange(e)} />
                            Hoá đơn đóng tiền điện
                        </label>
                    </div>
                    <div className="text-right pr-5">
                        <button type="submit" className="btn btn-primary">Gửi đi</button> &nbsp;
                        <button type="reset" className="btn btn-secondary">Xoá</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Add;