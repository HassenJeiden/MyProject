import axios from "axios"
import { GET_ALL_TEST, TEST_SUBBMIT, TEST_EDIT, TEST_DELETE, OPERTION_FAIL, GET_ONE_TEST } from "../actions/types";


export const submitTest = (testData) => async (dispatch) => {
    try {
        const res = await axios.post('/api/teacher/addTest', testData)
        dispatch({ type: TEST_SUBBMIT, payload: res.data })
    } catch (error) {
        dispatch({ type: OPERTION_FAIL, payload: error })
    }
}
export const editTest = (usersData) => async (dispatch) => {
    try {
        const res = await axios.put('/api/teacher/editTest', usersData)
        dispatch({ type: TEST_EDIT, payload: res.data })
    } catch (error) {
        dispatch({ type: OPERTION_FAIL, payload: error })
    }
}

export const getAllTest = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/teacher/allTest')
        dispatch({ type: GET_ALL_TEST, payload: res.data })
    } catch (error) {
        dispatch({ type: OPERTION_FAIL, payload: error })
    }
}
export const deleteTest = (testData) => async (dispatch) => {
    try {
        const res = await axios.post('/api/teacher/deleteTest',
            testData,
            { 'Content-Type': 'text/plain' })
        console.log("res :", res)
        dispatch({ type: TEST_DELETE, payload: res.data })
    } catch (error) {
        dispatch({ type: OPERTION_FAIL, payload: error })
    }
}
export const getoneTest = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/teacher/TheTest')
        dispatch({ type: GET_ONE_TEST, payload: res.data })
    } catch (error) {
        dispatch({ type: OPERTION_FAIL, payload: error })
    }
}
