import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';
import Certification from './pages/Certification';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Certification/>}/>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
