import { CLEAR_MODAL_ALERT, LOAD_MODAL_DATA, SET_ALERT, SET_CACHEL_DETAILS, SET_MODAL_ALERT, SET_QUOTATION_DETAILS, STOP_LOAD_MODAL_DATA } from "../type"
import {LOAD_DATA,STOP_LOAD_DATA,CLEAR_ALERT} from "../type"


export const loadData =()=>( {type:LOAD_DATA,loading:true})
export const stopLoading =()=>( {type:STOP_LOAD_DATA,loading:false})

export const loadModalData =()=>( {type:LOAD_MODAL_DATA,modalLoading:true})
export const stopModalLoading =()=>( {type:STOP_LOAD_MODAL_DATA,modalLoading:false})

export const setAlert =(details)=>{

    return ( {type:SET_ALERT,alertDetails:details})
 
}


export const clearAlert =()=>( {type:CLEAR_ALERT,alertDetails:{}})

export const setModalAlert =(details)=>( {type:SET_MODAL_ALERT,modalAlertDetails:details})
export const clearModalAlert =()=>( {type:CLEAR_MODAL_ALERT,modalAlertDetails:{}})


export const setCacheDetails =(details)=>( {type:SET_CACHEL_DETAILS,cacheDetails:details})
export const setQutationId =(details)=>( {type:SET_QUOTATION_DETAILS,store_qutation_id:details})
