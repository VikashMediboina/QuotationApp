const errorHandler = (error, request, response, next)=> {
    console.log( `error ${error.message}`,error) // log the error
  const status = error.status || 400
  if(error.code==23503){
  response.status(status).json({'msg':"Element can't be deleted as it is used some other place."})
  }
  else{
    response.status(status).json({'msg':error.message})
  }
  }



module.exports=errorHandler