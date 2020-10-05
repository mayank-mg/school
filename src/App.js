import React from 'react';
import logo from './logo.svg';
import Appbar from './component/Menubar/appbar'
import Drawer from'./component/Drawer/drawer'
import Tooltip from'./component/Tooltip/tooltip';
import './App.css';

function App() {
  return (
    <div className="App">
   <Appbar />
   <Drawer />
   <Tooltip />
    </div>
  );
}

export default App;
