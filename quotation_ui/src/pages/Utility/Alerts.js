import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import {
  Alert,
} from "reactstrap"

const  Alerts=({alertDetails}) =>{
    const [visible,setvisible]=useState(true)
    const [sucessvisible,setSucessvisible]=useState(true)
    const [alertDetailsState,setalertDetailsState]=useState({})
    useEffect(()=>{
        if(alertDetails?.type=="ERROR"){
            setvisible(true)
        }
        if(alertDetails?.type=="SUCCESS"){
            setSucessvisible(true)
        }
        setalertDetailsState(alertDetails)

    },[alertDetails])
const onDismiss=()=>{
    setvisible(!visible)
}
const onDismissSucess=()=>{
    setSucessvisible(!visible)
}
  return (
      <>
      <div style={{  position: 'fixed',bottom: '10px',right: "5px",zIndex: 50}}>
      {alertDetailsState?.type=="SUCCESS"&&<Alert 
                   isOpen={sucessvisible} toggle={onDismissSucess}
                   color="success" >
                       {console.log(alertDetailsState)}
                                            {alertDetailsState?.message}
                    </Alert>}
                   {alertDetailsState?.type=="ERROR"&&<Alert 
                   isOpen={visible} toggle={onDismiss}
                   color="danger" role="alert">
                      {alertDetailsState?.message}
                    </Alert>}
                    </div>
      </>
  
  )
}
const mapStateToProps = state => {
  const { alertDetails } = state?.genricReducer
    return {alertDetails}
}

export default connect(mapStateToProps)(Alerts)