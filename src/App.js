import React from 'react';
import './App.css';
import BlocklyComponent from './BlocklyComponent';
import { toolbox } from './toolbox';

function App() {
  return (
    <div className="App">
      <h1>Blockly with React</h1>
      <BlocklyComponent initialXml={''} toolbox={toolbox}>
        {/* Pass any additional options here */}
      </BlocklyComponent>
    </div>
  );
}

export default App;
