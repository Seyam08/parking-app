import { CLEAR_INFO, SET_DETAILS, SPOT_SELECT, VH_SELECT } from "./actionTypes";
 
export const vhSelect=(vhType)=>{
    return{
        type: VH_SELECT,
        payload: vhType
    }
}
export const spotSelect=(spotName)=>{
    return{
        type: SPOT_SELECT,
        payload: spotName
    }
}
export const inpDetails=(userDetails)=>{
    return{
        type: SET_DETAILS,
        payload: userDetails
    }
}


export const clearInfo =()=>{
    return{
        type: CLEAR_INFO
    }
}


