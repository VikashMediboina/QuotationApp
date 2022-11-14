import React from 'react'
import { withRouter } from 'react-router-dom'

function ShowOutside(props) {

  return (
    <div>ShowOutside

        {console.log(props.match.params)}
    </div>
  )
}

export default withRouter(ShowOutside)