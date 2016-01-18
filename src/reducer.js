/**
 * Created by sanjoy on 1/18/16.
 */
import {combineReducers} from 'redux'

import app from './reducers/app'
import auth from './reducers/auth'
import dashboard from './reducers/dashboard'

export default combineReducers({app, auth, dashboard})