/* @jsx */
import React, { Component } from 'react';
import SocialComment from './SocialComment';
import FeedEvent from './FeedEvent';
import Avatar from './Avatar';

export default class PanelBody extends Component {
  render(){
    return(
      <div className="col-lg-8">
        <div className="social-feed-box">

          <div className="pull-right social-action dropdown">
            <button data-toggle="dropdown" className="dropdown-toggle btn-white">
              <i className="fa fa-angle-down"></i>
            </button>
            <ul className="dropdown-menu m-t-xs">
              <li><a href="#">Config</a></li>
            </ul>
          </div>
          <Avatar Name="Brolin" Timestamp="Today 4:21 pm - 12.06.2014" />
          <FeedEvent Body="Miren mi jardín como está de bonito" />
          <div className="social-footer">

            <SocialComment
              Name="Julian Giraldo"
              Comment="Funciona comentario social"
            />

            <SocialComment
              Name="Miguel Vargas"
              Comment="Funciona comentario social"
            />

            <SocialComment
              Name="Sergio Ruda"
              Comment="Funciona comentario social"
            />

          </div>

        </div>

      </div>
    );
  }
}
