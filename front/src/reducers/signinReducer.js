import { LOG_IN_OK, LOG_IN_FAIL } from "../actions/types";
const initState = {
    token: localStorage.getItem('token')||null,
    errors: null,
    message:"...Pending",
    usertype:localStorage.getItem('userType')||"Unkowen",
    email:localStorage.getItem('email')
}

const signinReducer = (state = initState, { type, payload }) => {
    switch (type) {
        
        case LOG_IN_FAIL:
            localStorage.setItem('userType',payload.usertype)
            return {  ...state,
            userInfos:payload.message,message:"Incorrect E-mail or Passorwd or ",usertype:'Unkowen' }
            
        case LOG_IN_OK:
            localStorage.setItem('token',payload.token)
            localStorage.setItem('email', payload.email)
            localStorage.setItem('userType',payload.usertype)
            return {
                ...state,
                token:payload.token,
                message:payload.message,
                userInfos:payload.userDetails,
                usertype:payload.usertype,
                email:payload.email
            }
        default:
            return state;
    }
}
export default signinReducer