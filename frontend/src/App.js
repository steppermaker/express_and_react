import React from 'react';

import './App.css';
import Nav from './components/Nav.js';

function App(props) {  
  return (
        <div className="App">
          { props.children }
          <Nav />
        </div>
   );
}

export default App;
