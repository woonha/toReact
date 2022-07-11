import Router from './routes';
import logo from './logo.svg';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { check } from './auth/auth'
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    console.debug(check(), "로그인체크체크")
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Router></Router>
    </ThemeProvider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
