import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                  <div className="footer__logo">
                    <a href="{{URL::to('/')}}"><i className="fab fa-apple" /></a>
                    <span>Store Online</span>
                  </div>
                  <p>Khách hàng là trọng tâm của mô hình kinh doanh độc đáo của chúng tôi, bao gồm cả thiết kế.</p>
                  <a href="#"><img src="{{asset('public/frontend/img/payment.png')}}" alt="" /></a>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                <div className="footer__widget">
                  <h6>Sản phẩm</h6>
                  <ul>
                    <li>
                        <a href="">Rau</a>
                    </li>
                    <li>
                        <a href="">Rau</a>
                    </li>
                    <li>
                        <a href="">Rau</a>
                    </li>
                    <li>
                        <a href="">Rau</a>
                    </li>
                    <li>
                        <a href="">Rau</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer__widget">
                  <h6>Tin tức</h6>
                  <ul>
                    <li>
                        <a href="">A</a>
                    </li>
                    <li>
                        <a href="">A</a>
                    </li>
                    <li>
                        <a href="">A</a>
                    </li>
                    <li>
                        <a href="">A</a>
                    </li>
                    <li>
                        <a href="">A</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h6>Liện với chúng tôi</h6>
                  <div className="footer__newslatter">
                    <p>Hãy là người đầu tiên biết về hàng mới xuất hiện, xem sách, bán hàng và quảng cáo!</p>
                    <form action="#">
                      <input type="text" placeholder="Email của bạn" />
                      <button type="submit"><span className="icon_mail_alt" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="footer__buttom">
              </div>
              <div className="col-7 col-lg-4 ">
                <div className="footer__copyright__text">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  <p>Copyright ©
                    Quốc Dương. All rights reserved.
                  </p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block footer__img" />
              <div className="col-5 col-lg-2">
                <div className="footer__img">
                  <img src="asset/img/logoSaleNoti.png" className="img_logo_footer" />
                </div>
              </div>
            </div>    
          </div>
        </footer>
  )
}

Footer.propTypes = {}

export default Footer
