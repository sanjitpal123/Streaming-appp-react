import SimpleCollapse from "./Components/Demo/Demo"
import Navbar from "./Components/Header/Navbar"
import SideBar from "./Components/SideBar/SideBar"
import { useSelector } from "react-redux"
import HomePageDataDisplay from "./Components/HomePageData/HomePageData"


function App() {
const Clicked=useSelector((state)=>state.clickedCheck.clicked);
console.log("fdf",Clicked)

  return (
    <>
    <Navbar/>
     {/* <h1>Welcome to Streaming app setup ( delete this when you start )</h1>
     <SimpleCollapse/> 
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quo.</p> */}
     <div className=" flex">
     <SideBar/>
     <HomePageDataDisplay/>
     </div>
    
    </>
  )
}

export default App
