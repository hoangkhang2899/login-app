import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container-fluid pt-2">
          <div className="row">
            <div className="col">
              <h3 className="text-lightyellow">Thông tin liên hệ</h3>
              <p>(024)123 456 78</p>
              <p>khanglh@tpb.vn</p>
              <p>36 Kỳ Đồng, Phường 9, Quận 3, Tp. Hồ Chí Minh</p>
            </div>
            <div className="col-9">
              <h3 className="text-lightyellow">TPBank FICO</h3>
              <p>
                Công ty tài chính cho vay tín chấp ngân hàng thương mại cổ phần
                Tiên Phong
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
