import './App.css';
import RoutesMap from './routes';
import GlobalStyle from "./styles/globalstyled"

import { ToastContainer } from 'react-toastify';
import AuthProvider from './contexts/authContext';



function App() {
 

  return (
    <AuthProvider>
        <GlobalStyle />
        
        <RoutesMap />
    </AuthProvider>
  );
}

export default App;
