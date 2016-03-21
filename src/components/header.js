import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  authenticate,
} from '../actions/index';

class Header extends Component {
  render(){
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.renderAuthButton()}
          </li>
        </ul>
      </nav>
    )
  }
  renderAuthButton = () => {
    if(this.props.authenticated){
      return (
        <button
          onClick={()=>{this.props.authenticate(false)}}
          >
          Sign Out
        </button>
      )
    }
    return (
      <button
        onClick={()=>{this.props.authenticate(true)}}
        >
        Sign In
      </button>
    )
  }

};

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    authenticate: authenticate,
  }, dispatch);
}

function mapStateToProps(state){
  return ({
    authenticated: state.authenticated,
  })
}

export default connect(mapStateToProps,
                        mapDispatchToProps)(Header);
