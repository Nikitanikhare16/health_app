import {createContext, useState} from "react";
const mainContext:any =createContext({healthData:[],
    setFun:()=>{}
});
const tHead = [
    "id",
    "name",
    "HR",
    "SBP",
    "DBP",
    "Sugar",
    "cal",
    "Hemoglobin",
    "spo2"
]
const initialValue = [{
//     id:1,
//     name:"nikita",
//     HR:98,
//     SBP:120,
//     DBP:98,
//     Sugar:89,
//     cal:120,
//     Hemoglobin:70,
//     spo2:123
// },
// {
//     id:2,
//     name:"harshu",
//     HR:98,
//     SBP:120,
//     DBP:98,
//     Sugar:89,
//     cal:120,
//     Hemoglobin:70,
//     spo2:123
}]
export const MainContextWrapper:React.FC<any> =(props)=>{
    const [healthData,setHealthData]=useState(initialValue);

    return(
        <mainContext.Provider value={{
            healthData:healthData,
            setHealthData:setHealthData,
            tHead:tHead
        }}>
        {props.children}
        </mainContext.Provider>
    )
}
export default mainContext