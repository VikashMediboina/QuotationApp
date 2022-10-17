import { configureStore } from '@reduxjs/toolkit'
import genricReducer from './Reducers/genricReducer'
import loginReducer from './Reducers/loginReducer'

export default configureStore({
  reducer: {
      gen:genricReducer,
      login:loginReducer
  },
})