import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="bg-white">
        <header className="header">
          <div className="container-fluid text-center text-white pt-5 pb-5">
            <h3 className="mb-4">Vay tiêu dùng TPBank FICO</h3>
            <p>
              Lãi suất ưu đãi chỉ từ 0.5%
              <br />
              Thời hạn vay tối đa lên 36 tháng
              <br />
              Hạn mức vay lên đến 100.000.000 VNĐ
            </p>
            <Link className="btn btn-primary" to="/add">
              Bấm vào đây để vay ngay
            </Link>
          </div>
        </header>
        <div
          className="container-fluid text-center pt-2"
          style={{ backgroundColor: "rgb(232, 232, 232, 0.5)" }}
        >
          <div className="row">
            <div className="col">
              <p>Thủ tục nhanh chóng</p>
            </div>
            <div className="col">
              <p>Lãi suất cạnh tranh</p>
            </div>
            <div className="col">
              <p>Tỉ lệ duyệt hồ sơ cao</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Đa dạng gói vay</p>
            </div>
            <div className="col">
              <p>Thời hạn vay linh hoạt</p>
            </div>
            <div className="col">
              <p>Tư vấn miễn phí</p>
            </div>
          </div>
        </div>
        <div className="container-fluid pb-4">
          <div className="row justify-content-center">
            <div className="col-sm p-2">
              <div className="card text-left h-100">
                <div className="card-body">
                  <h4 className="card-title text-center">Vay theo sao kê lương</h4>
                  <p className="card-text">
                    - Khách hàng đang đi làm công ty và được công ty cấp thẻ bảo hiểm y tế
                    <br />- Đối với hình thức nhận lương bằng tiền mặt có thể thay thế sao kê lương
                    bằng hợp đồng lao động
                  </p>
                  <ul>
                    <label>Điều kiện vay:</label>
                    <li>Độ tuổi từ 18-65</li>
                    <li>Có thể sao kê 3 tháng lương gần nhất</li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <Link className="btn btn-primary" to="/add">
                    Vay ngay
                  </Link>
                  <Link className="btn bg-lightgrey ml-3" to="/">
                    LH tư vấn
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm p-2">
              <div className="card text-left h-100">
                <div className="card-body">
                  <h4 className="card-title text-center">Vay theo hoá đơn tiện ích</h4>
                  <p className="card-text">
                    - Khách hàng hoặc vợ/chồng có đứng tên trên hoá đơn điện/nước/internet/thuê bảo
                    trả sau
                  </p>
                  <ul>
                    <label>Điều kiện vay:</label>
                    <li>Độ tuổi từ 22-65</li>
                    <li>
                      1 trong 4 loại hoá đơn sau đây thoả điều kiện
                      <ul>
                        <li>Hóa đơn điện trên 250.000 VNĐ</li>
                        <li>Hóa đơn nước trên 200.000 VNĐ</li>
                        <li>Hóa đơn internet trên 150.000 VNĐ</li>
                        <li>Hóa đơn thuê bao trả sau trên 100.000 VNĐ</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <Link className="btn btn-primary" to="/add">
                    Vay ngay
                  </Link>
                  <Link className="btn bg-lightgrey ml-3" to="/">
                    LH tư vấn
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm p-2">
              <div className="card text-left h-100">
                <div className="card-body">
                  <h4 className="card-title text-center">Vay theo bảo hiểm nhân thọ</h4>
                  <p className="card-text">
                    - Khách hàng hoặc vợ/chồng có đứng tên trên hợp đồng bảo hiểm nhân thọ
                  </p>
                  <ul>
                    <label>Điều kiện vay:</label>
                    <li>Độ tuổi từ 22-65</li>
                    <li>Đã đóng bảo hiểm trên 6 tháng</li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <Link className="btn btn-primary" to="/add">
                    Vay ngay
                  </Link>
                  <Link className="btn bg-lightgrey ml-3" to="/">
                    LH tư vấn
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm p-2">
              <div className="card text-left h-100">
                <div className="card-body">
                  <h4 className="card-title text-center">Vay theo hợp đồng vay khác</h4>
                  <p className="card-text">
                    - Khách hàng đã vay ở 1 tổ chức tín dụng khác và đã trả góp 4 tháng trở lên
                  </p>
                  <ul>
                    <label>Điều kiện vay:</label>
                    <li>Độ tuổi từ 22-65</li>
                    <li>
                      Thoả 1 trong 2 điều kiện sau đối với hợp đồng vay bên khác:
                      <ul>
                        <li>
                          Đối với khoản vay <strong>dưới</strong> 12 tháng bên tổ chức khác phải
                          thanh toán trên 4 tháng
                        </li>
                        <li>
                          Đối với khoản vay <strong>trên</strong> 12 tháng bên tổ chức khác phải
                          thanh toán trên 6 tháng
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <Link className="btn btn-primary" to="/add">
                    Vay ngay
                  </Link>
                  <Link className="btn bg-lightgrey ml-3" to="/">
                    LH tư vấn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
