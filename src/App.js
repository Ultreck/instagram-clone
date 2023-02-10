
import './App.css';
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './conponents/NavBar';
import Collection from './pages/Collection';
import AddContent from './pages/AddContent';
import Compass from './pages/Compass';
import Activites from './pages/Activites';

function App() {
  return (
    <>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/collection" element={<Collection/>}></Route>
        <Route path="/addcontenet" element={<AddContent/>}></Route>
        <Route path="/compass" element={<Compass/>}></Route>
        <Route path="/activities" element={<Activites/>}></Route>
        </Routes>
    </>
  );
}

export default App;
