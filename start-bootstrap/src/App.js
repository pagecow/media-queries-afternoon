import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>

        <header id='header'>
          <div className="logo">Start Bootstrap</div>
          
          <div id="nav">
            <div className="buttons">SERVICES</div>
            <div className="buttons">PORTFOLIO</div>
            <div className="buttons">ABOUT</div>
            <div className="buttons">TEAM</div>
            <div className="buttons">CONTACT</div>
          </div>
        </header>

        <section id='body-2'>
          <div className='headline-1'>Welcome To Our Studio!</div>
          <br></br>
          <div className='headline-2'>IT'S NICE TO MEET YOU</div>
          <br></br>
          <button className='body-button'>TELL ME MORE</button>
        </section>

      </body>
    </div>
  );
}

export default App;
