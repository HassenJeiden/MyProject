import axios from "axios"
import { LOG_IN_OK,LOG_IN_FAIL } from "./types";

export const signIn=(usersData)=>async(dispatch)=>{
try{
const res= await axios.post('/api/Login',usersData)
dispatch({type:LOG_IN_OK,payload:res.data})
}catch (error){
dispatch({type:LOG_IN_FAIL,payload:error})
}
}