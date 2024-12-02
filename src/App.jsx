import { ToastContainer } from 'react-toastify'
import './App.css'
import { CarrinhoProvider } from './contexts/CarrinhoContext'
import { GlobalProvider } from './contexts/GlobalContext'
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes/Routes'

function App() {
  
  return (
    <GlobalProvider>
      <CarrinhoProvider>
      <Routes />
      </CarrinhoProvider>
      <ToastContainer />
    </GlobalProvider>
  )
}

export default App
