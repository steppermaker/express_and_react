import './App.css';
import MyForm from "./components/MyForm.js"
import MyFormLog from "./components/MyFormLog.js"
import Redux from './components/MyFormRedux.js'
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider
} from '@material-ui/styles';
import  styled, {
  ThemeProvider as StyledThemeProvider
} from 'styled-components';
import theme from './theme';


function App() {  
  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
        <div className="App">
          <h1>フロントエンド</h1>
          <Flex className="flex">
            <div>
              <MyFormLog/>
              <MyForm/>
            </div>
            <div>
              <Redux/>
            </div>
          </Flex>
        </div>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
   );
}

const Flex = styled.div`
  display: flex;
`;

export default App;
