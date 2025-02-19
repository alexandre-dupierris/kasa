import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './styles/main.scss'
import App from './components/layout/App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)