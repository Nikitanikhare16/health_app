import { useState } from "react";

//custom hook
const useFormValidation:any =(validationFun:any)=>{
    const [input, setInput] = useState("");
    const [IsTouched, setIsTouched]=useState(false);
    const inputIsEmpty = validationFun(input);
    console.log("inputIsEmpty",inputIsEmpty)

return{
    input,
    setInput,
    IsTouched,
    setIsTouched,inputIsEmpty
}
}
export default useFormValidation