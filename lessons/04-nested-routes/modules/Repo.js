import React from 'react'

export default React.createClass({
  render() {
    return (
    		<div>
    			welcome,  {this.props.params.userName}
    			<br/>
    			{this.props.params.repoName}
    		</div>
    	)
  }
})
