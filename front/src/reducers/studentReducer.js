import { SELECTED_TESTS, SUBBMIT_TEST,OPERTION_TEST_FAIL } from "../actions/types";
const initState = {
    alltests: [{
        "_id": "Exam _id",
        "testType": "Exam type",
        "question": "Exam Subject",
        "level": "Leve",
        "group": "group",
        "email": "Teacher@Teacher.com",
    }],
    message: "",
}
const studentReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case SELECTED_TESTS:
            return {
                ...state,
                message: payload.message,
                alltests: payload.findtest
            }
        case SUBBMIT_TEST:
            return {
                ...state,
                alltest: payload.newTest,
                message: payload.message
            }
        case OPERTION_TEST_FAIL:
            return {
                ...state,
                message: payload.message
            }
        default:
            return state;
    }
}
export default studentReducer;