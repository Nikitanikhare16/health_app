import { useContext, useEffect, useState } from "react"
import mainContext from "../../Store/mainContext/mainContext"
import HealthTable from "../../common/HealthTable/HealthTable";
import axios from 'axios';

const ShowHealthData = ()=>{

      const healthContext:any=useContext(mainContext);
      const{ healthData ,setHealthData, tHead} = healthContext;

//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
// const [finalData, setFinalData] = useState<any>([]);

useEffect(() => {
    axios
      .get("http://localhost:3001/allhealth")
      .then((response) => {
        setHealthData (response.data.allHealthData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

   
    // const{healthData}= healthContext
    // console.log("healthContext",healthData)
return(
    <div>
        
        <HealthTable tHead={tHead} healthData={healthData}></HealthTable>
    </div>
)
}
export default ShowHealthData