import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import './index.css'
import App from './App.jsx'
import DerivedState from './components/DerivedState.jsx'
import LiftStateUp from './components/LiftStateUp.jsx'
import UnControlled from './components/UnControlled.jsx'
import State from './components/hooks/State.jsx'
import Profile from './components/Profile.jsx'
// import { AuthProvider } from './components/hooks/ContextAPI/index.jsx'
// import Practises from './Practises.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Profile/> */}
    
      {/* <UnControlled/>
   <LiftStateUp/>
    <DerivedState/>  */}
      <App />
      {/* <State/> */}
    
  </StrictMode>,
)
