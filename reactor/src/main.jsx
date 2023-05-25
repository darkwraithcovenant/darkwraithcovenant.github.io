import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/main'
import Exploder from './components/exploder'
import Windows from './components/windows'

function App (){
return (
<>
  <Exploder />
</>
)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//dsadsa