/* @jsx */
import React, { Component } from 'react';

export default class SocialComment extends Component {
  render() {
    return(
      <div className="social-comment">
        <a href="" className="pull-left">
          <img alt="image" src="img/a1.jpg" />
        </a>
        <div className="media-body">
          <a href="#">
            {this.props.Name}
          </a>
            {this.props.Comment}

          <br/>
          <a href="#" className="small"><i className="fa fa-thumbs-up"></i> 26 Like this!</a> -
          <small className="text-muted">12.06.2014</small>
        </div>
      </div>
    );
  }
}
