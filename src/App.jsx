
// import EventPropagation from "./components/EventPropagation";
// import './components/project/EV.css';
import EventProps from "./components/EventProps";
import NetflixSeries from "./components/NetflixSeries";
import State from "./components/hooks/State";
import DerivedStateChallenge from "./components/DerivedStateChallenge";
import DerivedState from "./components/DerivedState";
import LiftStateUp from "./components/LiftStateUp";
import Toggle from "./components/project/ToggleSwitch";
import ToDo from "./components/project/ToDo/ToDo";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import { Keys } from "./components/project/keys";
import ShortCircuitExample from "./components/hooks/ShortCircuit";
import Counter from "./components/hooks/UseState";
import AdvancedCounter from "./components/hooks/UseState/AdvancedCounter";
import UnControlled from "./components/hooks/UseState/UnControlled";
import Controlled from "./components/hooks/UseState/Controlled";
import RegistrationForm from "./components/hooks/UseState/Registration";
import RegistrationReact from "./components/hooks/UseState/RegistrationReact";
import LoginForm from "./components/hooks/UseState/LoginForm";
import ContactForm from "./components/hooks/UseState/ContactForm";
import ContactFormObj from "./components/hooks/UseState/ContactFormObj";
import { ReactUseEffect } from "./components/hooks/useEffect";
import Challenge from "./components/hooks/useEffect/Challenge";
import CleanUp from "./components/hooks/useEffect/CleanUp";
import HowNotToFetchApi from "./components/hooks/useEffect/HowNotToFetchApi";
import HowToFetchApi from "./components/hooks/useEffect/HowToFetchApi";
import FetchApiWithAsync from "./components/hooks/useEffect/FetchApiWithAsync";
import UseRef from "./components/hooks/useRef";
import UseId from "./components/hooks/useId";
import { ParentComponent } from "./components/propsDrilling";
import { BioContext, BioProvider } from "./components/ContextAPI";
import Home from "./components/ContextAPI/Home";
import About from "./components/ContextAPI/About";
import Service from "./components/ContextAPI/Service";
//  import './App.css'
//  import './index.css'
// import { Footer } from "./components/NetflixSeries";
// import SakshiSeries from "./components/NetflixSeries";
//while default import we can change name of import



function App() {
  return (
    <>
      {/* <h1 className='card-heading'>List of Best Netflix Series</h1>
      <NetflixSeries /> */}
      {/* <EventHandling/> */}
      {/* <EventProps/> */}
      {/* <EventPropagation/> */}
      {/* <State/> */}
      {/* <DerivedStateChallenge/> */}
      {/* <DerivedState/> */}
      {/* <LiftStateUp/> */}
      {/* <Toggle/> */}
      {/* <ToDo/> */}
      {/* <DigitalClock/> */}
      {/* <Keys/> */}
      {/* <ShortCircuitExample /> */}
      {/* <Counter/> */}
      {/* <AdvancedCounter/> */}
      {/* <UnControlled/> */}
      {/* <Controlled/> */}
      {/* <RegistrationForm/> */}
      {/* <RegistrationReact/> */}
      {/* <LoginForm/> */}
      {/* <ContactForm/> */}
      {/* <ContactFormObj/> */}
      {/* <ReactUseEffect/> */}
      {/* <Challenge/> */}
      {/* <CleanUp/> */}
      {/* <HowNotToFetchApi/> */}
      {/* <HowToFetchApi/> */}
      {/* <FetchApiWithAsync /> */}
      {/* <UseRef/> */}
      {/* <UseId/> */}
      {/* <ParentComponent /> */}
      <BioProvider>
        <Home/>
        <About/>
        <Service/>
      </BioProvider>

    </>)
}
export default App;


