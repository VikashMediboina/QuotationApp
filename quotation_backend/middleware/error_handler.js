const errorHandler = (error, request, response, next)=> {
    console.log( `error ${error.message}`) // log the error
  const status = error.status || 400
  // send back an easily understandable error message to the caller
  response.status(status).json({'msg':error.message})
  }



module.exports=errorHandler