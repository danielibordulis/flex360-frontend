import './App.css'
import { CarrinhoProvider } from './contexts/CarrinhoContext'
import { GlobalProvider } from './contexts/GlobalContext'

import Routes from './routes/Routes'

function App() {
  
  return (
    <GlobalProvider>
      <CarrinhoProvider>
      <Routes />
      </CarrinhoProvider>
    </GlobalProvider>
  )
}

export default App
