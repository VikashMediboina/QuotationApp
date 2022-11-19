import React from 'react'
import { withRouter } from 'react-router-dom'
import ViewQuotationById from './ViewQuotationById'

function ShowOutside(props) {

  return (
<ViewQuotationById quotation_id={props.location.pathname.split("/")[props.location.pathname.split("/").length-1]}/>

   
  )
}

export default withRouter(ShowOutside)