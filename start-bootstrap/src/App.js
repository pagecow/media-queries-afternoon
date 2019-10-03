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

          <select className='menu-button'>
            <option className="buttons">HOME</option>
            <option className="buttons">SERVICES</option>
            <option className="buttons">PORTFOLIO</option>
            <option className="buttons">ABOUT</option>
            <option className="buttons">TEAM</option>
            <option className="buttons">CONTACT</option>
          </select>
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
