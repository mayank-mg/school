import React from 'react';
import logo from './logo.svg';
import Appbar from './component/Menubar/appbar'
import Class from './component/Class/Class';
import './App.css';

function App() {
  return (
    <div className="App">
   <Appbar />
    <Class />
   {/* <Drawer /> */}
   
    </div>
  );
}

export default App;
