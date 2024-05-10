import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './redux/store.jsx'
import { Provider } from 'react-redux'
import NavBar from './componentes/NavBar.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import Router from './router.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  
      <ToastContainer autoClose={2000} />
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
