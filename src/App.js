import Router from './routes';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { check } from './auth/auth'
import { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import './App.css';
import "./css/fonts.css"
import "./css/social.css"
function App() {
  useEffect(() => {
    console.debug(check(), "로그인체크체크")
  }, [])
  return (
    <GoogleOAuthProvider clientId="526924998787-bh0o65d1lcjp7q5ptptsfvvdam04vged.apps.googleusercontent.com">
      <ThemeProvider theme={theme}>
        <Router></Router>
      </ThemeProvider>
    </GoogleOAuthProvider>

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
