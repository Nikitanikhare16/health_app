import React, { useState } from 'react';
import './App.css';
import MenuBar from './MenuBar/MenuBar';
import AddHealthData from './component/AddHealthData/AddHealthData';
import ShowHealthData from './component/ShowHealthData/ShowHealthData';
import AnalyticsData from './component/AnalyticsData/AnalyticsData';
import { MainContextWrapper } from './Store/mainContext/mainContext';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainComponent from './MainComponent/MainComponent';

function App() {
 const [loadComponent,setLoadComponent] = useState (<AddHealthData/>)
   
     const router = createBrowserRouter([{
      path:"/",
      element:<MainComponent></MainComponent>,

      children: [
        {
          path: "/",
          element: <AddHealthData></AddHealthData>,
        },
        {
          path: "/showData",
          element: <ShowHealthData></ShowHealthData>,
        },
        {
          path: "/AnData",
          element: <AnalyticsData></AnalyticsData>,
        },
      ],
     }]
    //   [
    //   {
    //     path: "/",
    //     element: <AddHealthData/>,
    //   },
    //   {
    //     path: "/showData",
    //     element: <ShowHealthData/>,
    //   },
    //   {
    //     path: "/anData",
    //     element: <AnalyticsData/>,
    //   },
    // ]
  );
     return (
      <MainContextWrapper>  
              {/* <a href="http://localhost:3000/showData">Show Data</a> */}
         {/* <div>
        <MenuBar buttonArr={buttonArr}></MenuBar>
        {loadComponent}
    </div> */}
     <div>        
          {/* <MenuBar buttonArr={buttonArr}></MenuBar> */}
       
        <RouterProvider router={router} />
        </div>
    </MainContextWrapper>

  );
}

export default App;
