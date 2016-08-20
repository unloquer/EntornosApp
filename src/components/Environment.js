/* @jsx */
import React, { Component } from 'react';
import Header from './Header';
import Chart from './Chart';
import PanelBody from './PanelBody';
import DevicesTable from './DevicesTable';

export default class Environment extends Component {
  render() {
    return(
      <div className="wrapper wrapper-content">
        <div className="container">
          <Header />

          <div className="row">
            <div className="col-lg-12">
              <div className = "tabs-container">
                <ul className="nav nav-tabs">
                  <li className="active"><a data-toggle="tab" href="#entorno">Entorno</a></li>
                  <li className=""><a data-toggle="tab" href="#dispositivos">Dispositivos</a></li>
                </ul>

                <div className="tab-content">
                  <div id="entorno" className="tab-pane active">

                    <div className="panel-body">
                      <PanelBody />
                      <PanelBody />
                      <Chart />
                    </div>
                  </div>

                  <div id="dispositivos" className="tab-pane">
                    <DevicesTable devices={[{name: 'uno'}, {name: 'dos'}, {name: 'tres'}, {name: 'cuatro'}, {name: 'cinco'}, {name: 'seis'}]} />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
