import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
//Works:
import ShadowDOM from './react-shadow-compiled.js';
// https://puu.sh/sjkml/39591c2ea6.png
// 
//Works:
// import ShadowDOM from './react-shadow.js';
// https://puu.sh/sjkkX/28bee1bb49.png
// 
// 
// 
//Doesn\'t Work:
// import ShadowDOM from 'react-shadow';
// https://puu.sh/sjkjd/5db2f19907.png
//         <ShadowDOM>
//           <p className="App-intro">
//             I'm in the shadow DOM
//           </p>
//         </ShadowDOM>

class App extends Component {
  componentDidMount() {
    console.log("CDM");
    // Create shadow DOM
    let shadow = document.querySelector('#target').createShadowRoot( {mode: undefined});
    // Add some text to shadow DOM
    shadow.innerHTML = '<p>Here is some new text</p>';
    // Add some CSS to make the text red
    shadow.innerHTML += '<style>p { color: red; }</style>';
    console.log("shadowDOM stuff mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("CDU");
  }
  render() {
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 id="target">Welcome to React</h2>
          <ShadowDOM>
            <span> {`I'm in the shadow DOM`} </span>
          </ShadowDOM>
        </div>
      </div>
    );
  }
}

export default App;