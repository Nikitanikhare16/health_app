import { useContext, useState } from "react";
import mainContext from "../../Store/mainContext/mainContext";
import styless from "./AddHealthData.module.scss";
import useFormValidation from "../../common/useFormValidation/useFormValidation";
import { Link, useNavigate } from "react-router-dom";
import MenuBar from "../../MenuBar/MenuBar";
import axios from "axios";
const AddHealthData = () => {
  const navigate = useNavigate();
const{
  input:userInput,
  setInput:setUserInput,
  IsTouched:userIsTouched,
  setIsTouched:setUserIsTouched,
  inputIsEmpty:UserIsEmpty}= useFormValidation((userInput:any)=>userInput==="");


  const {
    input:hrInput,
    setInput:setHrInput,
    IsTouched:hrTouched,
    setIsTouched:setHrIsTouched,
    inputIsEmpty:setHrIsEmpty
  }:any = useFormValidation((hrInput:any)=>hrInput<=0);

  const {
    input:sbpInput,
    setInput:setSbpInput,
    IsTouched:sbpTouched,
    setIsTouched:setSbpIsTouched,
    inputIsEmpty:setSbpIsEmpty
  }:any = useFormValidation((sbpInput:any)=>sbpInput<=0);


  // const [hr,setHr] = useState(0);
  const healthContext: any = useContext(mainContext);
  const { healthData, setHealthData } = healthContext;
//   console.log("setHealthData", setHealthData);
  const addNewHealthData = async (e:any) => {
    e.preventDefault();
  try {
    const newHealthData:any = JSON.stringify({   
      id:Math.random(),
      name:userInput,
      HR:hrInput,
      SBP:sbpInput,
      DBP:98,
      Sugar:89,
      cal:120,
      Hemoglobin:70,
      spo2:123
    })

    // axios.post('http://localhost:3001/addHealthData', newHealthData)
    // .then(function (response) {
    //   console.log(response);
    //   alert('Data is Added Successfully....');
    //   navigate("/showData")
    // })
    // .catch(function (error) {
    //   alert(`server issue ${error}`)

    // });

    const response = await fetch("http://localhost:3001/addHealthData", {
      method: "POST",
      body: newHealthData
    });
    const jsonData = await response.json();
    console.log("jsonData",jsonData);
    alert('Data is Added Successfully....');
    navigate("/showData")
    // setHealthData(newHealthData);
  } catch (error) {
    alert(`There is an error ${error}`)
  }

      };
  // console.log("checkusername",)
  // const changeUserName = (e:any)=>{
   
  //  setUserName(e.target.value)
  // }
  const isFormValid = UserIsEmpty || setHrIsEmpty || setSbpIsEmpty;

  
  return (
    <>      
  
    <div>
        {/* <Link to={'/showData'}>{'showData'}</Link> */}

      <form onSubmit={(e)=>addNewHealthData(e)}>
        <div className={styless["form-control"]}>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            value={userInput}
            onBlur={()=>setUserIsTouched(true)}
            id="userName"
            onChange={(e) =>setUserInput(e.target.value) }
          ></input>
          {userIsTouched && UserIsEmpty &&(<span className={styless['error-class']}>Username is empty</span>)}
        </div>
        <div className="sm:col-span-2 sm:col-start-1">
          <label
            htmlFor="hr"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Heart Rate
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="hr"
              id="hr"
              onBlur={()=>setHrIsTouched(true)}
              value={hrInput}
              onChange={(e)=>{setHrInput(parseInt(e.target.value))}}
              autoComplete="address-level2"
              className="block w-60 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
   {hrTouched && setHrIsEmpty &&(<span className={styless['error-class']}>Heart Rate connot be empty</span>)}

          </div>
          {/* <button type="submit" disabled={setHrIsEmpty} className={setHrIsEmpty ? styless['submit-btn-err']:styless['submit-btn']}>save</button> */}
        </div>
        <div className="sm:col-span-2 sm:col-start-1">
          <label
            htmlFor="sbp"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
         Systolic Heart Rate
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="sbp"
              id="sbp"
              onBlur={()=>setSbpIsTouched(true)}
              value={sbpInput}
              onChange={(e)=>{setSbpInput(parseInt(e.target.value))}}
              autoComplete="address-level2"
              className="block w-60 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
   {sbpTouched && setSbpIsEmpty &&(<span className={styless['error-class']}> Systolic Heart Rate connot be empty</span>)}

          </div>
          <button type="submit" disabled={isFormValid} className={isFormValid ? styless['submit-btn-err']:styless['submit-btn']}>save</button>

        </div>
      </form>
    </div>
    </>
  );
};
export default AddHealthData;
