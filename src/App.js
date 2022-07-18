
import './App.css';

import ChartComp from './Component/ChartComp/ChartComp';
import LandingPage from './Component/LandingPage/LandingPage';
import SideBar from "./Component/SideBar/SideBar"

import Topbar from './Component/Topbar/Topbar';

function App() {
  return (
    <div classNameName="App">
      <Topbar/>
      <SideBar/>
      <LandingPage/>
      <ChartComp/>
     
      
    </div>
  );
}

export default App;
