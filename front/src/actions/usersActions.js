import axios from "axios"
import { ALL_REGISTER, REGISTER_LIST_ADD_SUCCESS, REGISTER_LIST_FAIL,
     REGISTER_LIST_DELETE_SUCCESS, REGISTER_LIST_EDIT_SUCCESS} from "../actions/types";


export const registerUser = (usersData) => async (dispatch) => {
    try {
        const res = await axios.post('/api/admin/add', usersData)
        dispatch({ type: REGISTER_LIST_ADD_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: REGISTER_LIST_FAIL, payload: error })
    }
}
export const allUser = (usersData) => async (dispatch) => {
    try {
        const res = await axios.get('/api/admin/allUser', usersData)
        dispatch({ type: ALL_REGISTER, payload: res.data })
    } catch (error) {
        dispatch({ type: REGISTER_LIST_FAIL, payload: error })
    }
}
export const deleteUser = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`/api/admin/deleteUser/${id}`)
        dispatch({ type: REGISTER_LIST_DELETE_SUCCESS, payload: res.data })
        console.log(res.data )
    } catch (error) {
        dispatch({ type: REGISTER_LIST_FAIL, payload: error })
    }
}
export const editUser = (data) => async (dispatch) => {
    try {
       
        const res = await axios.put("/api/admin/editUser",data )
        dispatch({ type: REGISTER_LIST_EDIT_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: REGISTER_LIST_FAIL, payload: error })
    }
}