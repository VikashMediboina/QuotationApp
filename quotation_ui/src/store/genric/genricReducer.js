import { LOAD_DATA, STOP_LOAD_DATA, CLEAR_ALERT, SET_ALERT, CLEAR_MODAL_ALERT, SET_MODAL_ALERT, LOAD_MODAL_DATA, STOP_LOAD_MODAL_DATA, SET_CACHEL_DETAILS } from '../type'



export const genricReducer = (state = { lodding: false,alertDetails:{},cacheDetails:{} }, action) => {
    switch (action.type) {
        case LOAD_DATA: {
            return { ...state, lodding: true }
        }
        case STOP_LOAD_DATA: {
            return { ...state, lodding: false }
        }
        case LOAD_MODAL_DATA: {
            return { ...state, modalLodding: true }
        }
        case STOP_LOAD_MODAL_DATA: {
            return { ...state, modalLodding: false }
        }
        case SET_ALERT: {
            return { ...state, alertDetails: action.alertDetails }
        }
        case CLEAR_ALERT: {
            return { ...state, alertDetails: action.alertDetails }
        }
        case SET_MODAL_ALERT: {
            return { ...state, modalAlertDetails: action.modalAlertDetails }
        }
        case CLEAR_MODAL_ALERT: {
            return { ...state, modalAlertDetails: action.modalAlertDetails }
        }
        case SET_CACHEL_DETAILS: {
            return { ...state, cacheDetails: action.cacheDetails }
        }
        
        default: return state
    }
}
export default genricReducer