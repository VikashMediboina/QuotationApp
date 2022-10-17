import {SET_TOKEN,RECEVIED} from '../type'



export  const loginReducer =(state={token:""},action)=>{
switch(action.type){
    case SET_TOKEN:{
        return {...state,lodding:true,token:action.token}
    }
    case RECEVIED:{
            return {...state,lodding:false,data:action.data}
    }
    default:        return state
}
}
export default loginReducer