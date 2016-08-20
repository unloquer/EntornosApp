/* @jsx */
import React, { Component } from 'react';

export default class Chart extends Component {
  render() {
    return(
      <div className="col-lg-4">
        <div className="ibox float-e-margins">
          <div className="ibox-title">
            <h5>Live Chart Example</h5>
            <div className="ibox-tools">
              <a className="collapse-link">
                <i className="fa fa-chevron-up"></i>
              </a>
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-wrench"></i>
              </a>
              <ul className="dropdown-menu dropdown-user">
                <li><a href="#">Config option 1</a>
                </li>
                <li><a href="#">Config option 2</a>
                </li>
              </ul>
              <a className="close-link">
                <i className="fa fa-times"></i>
              </a>
            </div>
          </div>
          <div className="ibox-content">

            <div className="flot-chart">
              <div className="flot-chart-content" id="flot-line-chart-moving"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
