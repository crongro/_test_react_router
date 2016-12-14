import React from 'react'
import { Link } from 'react-router'
import { IndexLink } from 'react-router' // '/' 는 모든 것의 parent 이라, 늘 active표시되는 문제를 해결할 수 있다.
import NavLink from './NavLink'


export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
