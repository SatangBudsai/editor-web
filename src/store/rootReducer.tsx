import { combineReducers } from 'redux'
import { loaderReducer } from './reducers/loader'
import { appSettingReducer } from './reducers/app-setting'

const rootReducer = combineReducers({
  loaderState: loaderReducer,
  appSettingState: appSettingReducer
})
export default rootReducer
