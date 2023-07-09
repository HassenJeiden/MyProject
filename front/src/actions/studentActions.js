import axios from "axios"
import { SELECTED_TESTS, SUBBMIT_TEST,OPERTION_TEST_FAIL } from "../actions/types";


export const submitTest = (testData) => async (dispatch) => {
    try {
        const res = await axios.post('/api/student/passTest', testData)
        dispatch({ type: SUBBMIT_TEST, payload: res.data })
    } catch (error) {
        dispatch({ type: OPERTION_TEST_FAIL, payload: error })
    }
}
export const selectTest = (data) => async (dispatch) => {
    try {
        const res = await axios.put('/api/student/getTest',data )
        console.log(data)
        dispatch({ type: SELECTED_TESTS, payload: res.data })
    } catch (error) {
        dispatch({ type: OPERTION_TEST_FAIL, payload: error })
    }
}