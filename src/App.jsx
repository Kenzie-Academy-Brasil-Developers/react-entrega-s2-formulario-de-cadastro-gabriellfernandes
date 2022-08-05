import './App.css';
import RoutesMap from './routes';
import GlobalStyle from "./styles/globalstyled"

import { ToastContainer } from 'react-toastify';
function App() {
 

  return (
    <>
        <GlobalStyle />
        <ToastContainer/>
        <RoutesMap />
    </>
  );
}

export default App;
