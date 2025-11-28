
import NetflixSeries,{Header,Footer} from "./components/NetflixSeries";
// import { Footer } from "./components/NetflixSeries";
// import SakshiSeries from "./components/NetflixSeries";
//while default import we can change name of import

function App() {
  return (
    <>
    <Header/>
      <NetflixSeries />
      <NetflixSeries />

      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <Footer/>

    </>
  )
}
export default App;


