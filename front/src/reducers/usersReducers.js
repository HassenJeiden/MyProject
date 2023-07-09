import {
    REGISTER_LIST_ADD_SUCCESS, REGISTER_LIST_DELETE_SUCCESS,
    REGISTER_LIST_FAIL, ALL_REGISTER, REGISTER_LIST_EDIT_SUCCESS
} from "../actions/types";
const initState = {
    userInfos:  [{
        "_id": "64a419e90864b807e68f7318",
        "firstName": "hg",
        "lastName": "hg",
        "userType": "TEACHER",
        "level": "2",
        "group": "D",
        "email": "hg@hg.com",
        "registred": true,
        "__v": 0
    }],
    message: ""
}

const userReducer = (state = initState, { type, payload }) => {
    switch (type) {

        case REGISTER_LIST_FAIL:
            
            return {
                message: payload.message,
                userInfos: payload.newListUser
            }

        case REGISTER_LIST_ADD_SUCCESS:
            
            return {
                ...state,
                message: payload.message,
                userInfos: payload.newListUser
            }

        case ALL_REGISTER:
            
            return {
                ...state,
                userInfos: payload.newListUser
            }

        case REGISTER_LIST_DELETE_SUCCESS:
            
            return {
                ...state,
                message: payload.message,
                userInfos: payload.newListUser
            }

        case REGISTER_LIST_EDIT_SUCCESS:
            return {
                ...state,
                message: payload.message,
                userInfos: payload.newListUser
            }
        default:
            return state;
    }
}
export default userReducer