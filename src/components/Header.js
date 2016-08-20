/* @jsx */
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return(
      <div className="row wrapper border-bottom white-bg page-heading">
        <div className="col-lg-10">
          <h2>Jardín de las Delicias</h2>
          <ol className="breadcrumb">
            <li>
              <a href="index.html">CasaTresPatios</a>
            </li>
            <li>
              <a>Medellín, Colombia</a>
            </li>
          </ol>
        </div>
        <div className="col-lg-2">

        </div>
      </div>
    );
  }
}
