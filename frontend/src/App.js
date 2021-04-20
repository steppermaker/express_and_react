import styled from 'styled-components'

import './App.css';
import MyForm from "./components/MyForm.js"
import MyFormLog from "./components/MyFormLog.js"
import MyFormRedux from './components/MyFormRedux.js'
import Count from './components/Count.js'

function App() {  
  return (
        <div className="App">
          <h1>フロントエンド</h1>
          <Flex className="flex">
            <div>
              <Count />
              <MyFormRedux />
            </div>
            <div>
              <MyFormLog />
              <MyForm />
            </div>
          </Flex>
        </div>
   );
}

const Flex = styled.div`
  margin: 0 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default App;
