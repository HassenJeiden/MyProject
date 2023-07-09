import { GET_ALL_TEST, TEST_SUBBMIT, TEST_EDIT, TEST_DELETE, OPERTION_FAIL,GET_ONE_TEST } from "../actions/types";
const initState = {
    alltest: [{
        "_id": "Exam _id",
        "testType": "Exam type",
        "question": "Exam Subject",
        "level": "Level",
        "group": "group",
        "email": "Teacher@Teacher.com",
    }],
    message: "",
    level: "unkowen",
    type: "unkowen",
}

const testReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ONE_TEST:
            return {
                ...state,
                message: payload.message,
                alltest: payload.TheTest
            }
        case GET_ALL_TEST:
            return {
                ...state,
                message: payload.message,
                alltest: payload.AllTest
            }
        case TEST_SUBBMIT:
            return {
                ...state,
                alltest: payload.newTest,
                message: payload.message
            }
        case TEST_EDIT:
            return { ...state, errors: payload }
        case TEST_DELETE:
            return { ...state, errors: payload }
        case OPERTION_FAIL:
            return {
                ...state,
                message: payload.message
            }
        default:
            return state;
    }
}
export default testReducer