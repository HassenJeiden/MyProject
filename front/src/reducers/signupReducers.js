import { REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from "../actions/types";
const initState = {
    userInfos: {},
    token: null,
    errors: null,
    message:"...Pending",
    isRegistred: false
}

const signupReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case REGISTER_USER_FAIL:
            return {  errors: payload }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                token:payload.tken,
                message:payload.message + " Try to Login",
                isRegistred:true
            }
        default:
            return state;
    }
}
export default signupReducer