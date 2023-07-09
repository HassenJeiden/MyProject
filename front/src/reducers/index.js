import userReducer from "./usersReducers";
import signupReducer from "./signupReducers";
import signinReducer from "./signinReducer";
import testReducer from "./testReducer";
import studentReducer from "./studentReducer";

import { combineReducers } from "redux";




export default combineReducers({
    user: userReducer,
    signup: signupReducer,
    signin:signinReducer,
    testactions:testReducer,
    student:studentReducer
})