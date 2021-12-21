import React from "react";
import { Redirect } from "react-router-dom";

class Display extends React.Component {

    onHandleSubmit(e) {
        e.preventDefault();
    }

    onDeleteCustomer(e) {
        e.preventDefault();
        e.target.blur();
        let cell = e.target.parentElement.parentElement.cells;
        this.props.deleteCustomer({ 
            method: 'delete', 
            inputName: cell[1].textContent, 
            inputID: cell[5].textContent 
        });
    }

    render() {
        let customerList =
            this.props.customerID.map((item, index) => (
                <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.inputName}</td>
                    <td className='text-center'>{item.inputDay}/{item.inputMonth}/{item.inputYear}</td>
                    <td className='text-center'>{item.inputGender === 1 ? "Nữ" : "Nam"}</td>
                    <td className='text-center'>{item.inputPhone}</td>
                    <td className='text-center'>{item.inputID}</td>
                    <td className='text-center'>{item.checkboxInsurance ? <i className="fas fa-check" /> : <i className="fas fa-times" />}</td>
                    <td className='text-center'>{item.checkboxPaycheck ? <i className="fas fa-check" /> : <i className="fas fa-times" />}</td>
                    <td className='text-center'>{item.checkboxPaymentDien ? <i className="fas fa-check" /> : <i className="fas fa-times" />}</td>
                    <td className='text-center'><button type="button" className="btn btn-sm btn-primary" onClick={(e) => this.onDeleteCustomer(e)}>Xoá</button></td>
                </tr>
            ))
        return (
            <div>
                {this.props.isLogin ? "" : <Redirect to="/login" />}
                <form className="p-3" onSubmit={(e) => this.onHandleSubmit(e)}>
                    <div className="form-row align-items-center">
                        <div className="col">
                            <input type="text"
                                className="form-control" name="search" placeholder="Tìm kiếm thứ gì đó" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                <i className="fa fa-search" /> Tìm
                            </button>
                        </div>
                    </div>
                </form>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-center">Input time</th>
                                <th className="text-center">Họ và tên</th>
                                <th className="text-center">Ngày sinh</th>
                                <th className="text-center">Giới tính</th>
                                <th className="text-center">SĐT</th>
                                <th className="text-center">CCCD</th>
                                <th className="text-center">BHNT</th>
                                <th className="text-center">SKL</th>
                                <th className="text-center">HĐ</th>
                                <th className="text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Display;