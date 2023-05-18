import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pushNotification,setPushNotification] = useState(Boolean)

  // useEffect(()=>{
    
  // },[])

  // console.log('checking',Notification.permission,pushNotification)
//   if (window.navigator.standalone) {
//     // fullscreen mode
//     if(pushNotification){
//       setPushNotification(false)
//     }
// }

if (window.navigator.userAgent.indexOf('iPhone') != -1) {
  if (window.navigator.standalone == true) {
      alert("Yes iPhone! Yes Full Screen!");
  } else {
      alert("Not Full Screen!");
  };} else {
      alert("Not iPhone!");
      document.location.href = 'please-open-from-an-iphone.html';
};
  if(Notification.permission == "granted"){
    console.log('approved');
    if(!pushNotification){
      setPushNotification(true)
    }
  }else if (Notification.permission == "denied") {
    console.log('denied');
    if(pushNotification){
      setPushNotification(false)
    }
  }
  
  const RequestPemission = () =>{
    Notification.requestPermission().then((prem)=>{
      console.log('hello world',prem);
      if(prem === "granted"){
        console.log('permissin granted');
        setPushNotification(true)
        new Notification("Example notification")
      }else{
        console.log('not got and blocked');
        setPushNotification(true)
      }
    })
  }

  return (
    <div className="App">
      {/* <div className='box'>
        box
      </div> */}
      {pushNotification ? null :
      <div className='parent'>
      <div className='notification'>
        <p>This app wants to send you notification</p>
        <div className='permission_btns'> <button onClick={()=>{setPushNotification(true)}}>Not now</button> <button onClick={RequestPemission}>Allow</button> </div>
      </div>
      </div> }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
