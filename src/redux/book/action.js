import { SPOT_SELECT, USER_EMAIL, USER_NAME, USER_PHONE, VH_SELECT } from "./actionTypes";

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
export const userName=(userName)=>{
    return{
        type: USER_NAME,
        payload: userName
    }
}
export const userEmail=(userEmail)=>{
    return{
        type: USER_EMAIL,
        payload: userEmail
    }
}
export const userPhone=(userPhone)=>{
    return{
        type: USER_PHONE,
        payload: userPhone
    }
}
