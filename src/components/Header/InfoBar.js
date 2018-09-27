import React from 'react';

export default class HeaderInfoBar extends React.Component {
  render() {
    return (
      <div className="info-bar">
        <div className="content-container">
          <div className="info-bar__content">
            
            <div className="info-bar__contact">
              <i className="fas fa-phone"></i>+385 99 463 7777
              <i className="fas fa-envelope"></i>info@femel.hr
            </div>

            <ul className="info-bar__menu">
              <li className="info-bar__menu-item">
                <a className="info-bar__menu-link" href="#">English<i className="fas fa-angle-down"></i></a>
                <ul className="info-bar__dropdown">
                  <li className="info-bar__dropdown-item">
                    <a className="info-bar__dropdown-link" href="#">Hrvatski</a>
                  </li>
                  <li className="info-bar__dropdown-item">
                    <a className="info-bar__dropdown-link" href="#">Deutsch</a>
                  </li>
                </ul>
              </li>|
              <li className="info-bar__menu-item">
                <a className="info-bar__menu-link" href="#">USD ($)<i className="fas fa-angle-down"></i></a>
                <ul className="info-bar__dropdown">
                  <li className="info-bar__dropdown-item">
                    <a className="info-bar__dropdown-link" href="#">HRK (Kn)</a>
                  </li>
                  <li className="info-bar__dropdown-item">
                    <a className="info-bar__dropdown-link" href="#">EUR (€)</a>
                  </li>
                </ul>
              </li>|
              <li className="info-bar__menu-item">
                <a className="info-bar__menu-link" href="#">Help</a>
              </li>|
              <li className="info-bar__menu-item">
                <a className="info-bar__menu-link" href="#">Store locator</a>
              </li>|
              <li className="info-bar__menu-item">
                <a className="info-bar__menu-link" href="#">My account<i className="fas fa-angle-down"></i></a>
                <ul className="info-bar__dropdown">
                  <li className="info-bar__dropdown-item">
                    <a className="info-bar__dropdown-link" href="#">Account settings</a>
                  </li>
                  <li className="info-bar__dropdown-item">
                    <a className="info-bar__dropdown-link" href="#">Order tracking</a>
                  </li>
                  <li className="info-bar__dropdown-item">
                    <a className="info-bar__dropdown-link" href="#">Log out</a>
                  </li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </div>
    );
  }
}