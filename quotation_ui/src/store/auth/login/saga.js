import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes"
import { apiError, loginSuccess, logoutUserSuccess } from "./actions"



function* loginUser({ payload: { user, history } }) {
  
  try {
    
      // localStorage.setItem("authUser", JSON.stringify(user))
      yield put(loginSuccess(user))
    history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    // localStorage.removeItem("authUser")

   
      yield put(logoutUserSuccess(false))
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}



function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
