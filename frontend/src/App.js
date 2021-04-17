import './App.css';
import MyForm from "./components/MyForm.js"
import MyFormLog from "./components/MyFormLog.js"
import Redux from './components/MyFormRedux.js'


function App() {  
  return (
    <div className="App">
      <h1>フロントエンド</h1>
      <div className="flex">
        <div>
          <MyFormLog/>
          <MyForm/>
        </div>
        <div>
          <Redux/>
        </div>
      </div>
    </div>
  );
}

export default App;
