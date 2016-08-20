/* @jsx */
import React, { Component } from 'react';

export default class FeedEvent extends Component {
  render(){
    return(
      <div className="social-body">
          {this.props.Body}
        <img src="img/gallery/11.jpg" className="img-responsive" />
        <div className="btn-group">
          <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-up"></i> Like this!</button>
          <button className="btn btn-white btn-xs"><i className="fa fa-comments"></i> Comment</button>
          <button className="btn btn-white btn-xs"><i className="fa fa-share"></i> Share</button>
        </div>
      </div>
    );
  }
}
