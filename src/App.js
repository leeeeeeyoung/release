import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState, MutableRefObject } from 'react'

function App() {


   useEffect(()=>{
   
           // 在组件挂载完成后，使用fetch获取数据
    fetch('https://aigctech.love/web.php/user/info',{
            method:'GET',
            headers:{
               'X-Token':'650595deb79e61',
            }

      })
      .then(response => {
          
          console.log(response.json())
          })
      ;

   },[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              <p>0.1.1</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
