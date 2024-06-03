import { Outlet } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";

 const MainComponent = ()=>{
    const buttonArr = [
        {
          id:1,
          label:'AddHealthData',
          // btFun:()=>{setLoadComponent(<AddHealthData/>)}
          path:"/"
        },
         {
          id:2,
          label:'ShowHealthData',
          // btFun:()=>{setLoadComponent(<ShowHealthData/>)}
          path:"/showData"
        },
         {
          id:3,
          label:'AnalyticsData',
          // btFun:()=>{setLoadComponent(<AnalyticsData/>)}
          path:"/AnData"
        }
       ];
    return(
        <>
          
          <div>

            <header>
            <MenuBar buttonArr={buttonArr}></MenuBar>
            </header>
            <Outlet></Outlet>

          </div>
         
        </>
    )
}

export default MainComponent