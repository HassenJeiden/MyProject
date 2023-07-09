import axios from "axios"
import { REGISTER_USER_SUCCESS,REGISTER_USER_FAIL } from "./types";

export const signUp=(usersData)=>async(dispatch)=>{
try{
const res= await axios.post('/api/Register',usersData)
dispatch({type:REGISTER_USER_SUCCESS,payload:res.data})
}catch (error){
dispatch({type:REGISTER_USER_FAIL,payload:error})
}
}