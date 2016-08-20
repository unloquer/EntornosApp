/* @jsx */
import React, { Component } from 'react';

export default class Avatar extends Component {
  render(){
    return(
      <div className="social-avatar">
        <a href="" className="pull-left">
          <img alt="image" src="img/a6.jpg" />
        </a>
        <div className="media-body">
          <a href="#">
            {this.props.Name}
          </a>
          <small className="text-muted">{this.props.Timestamp}</small>
        </div>
      </div>
    );
  }
}
