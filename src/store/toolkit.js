import { combineReducers, configureStore } from '@reduxjs/toolkit'
import testSlice from './reducers/testSlice'

const reducer = combineReducers({
    test: testSlice,
})

const toolkit = configureStore({
    reducer: reducer,
  })

export default toolkit