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
export const nameInp=(userName)=>{
    return{
        type: USER_NAME,
        payload: userName
    }
}
export const mailInp=(userEmail)=>{
    return{
        type: USER_EMAIL,
        payload: userEmail
    }
}
export const phoneInp=(userPhone)=>{
    return{
        type: USER_PHONE,
        payload: userPhone
    }
}
