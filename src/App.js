import './App.css';
import Mainpage from './Components/Mainpage';
import SecondPage from "./Components/SecondPage";
import FifthPage from "./Components/FifthPage";
// import SeventhPage from "./Components/SeventhPage"; 
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
        <Router>
      <Routes>
      
        <Route path="/" element={<Mainpage />} />

        <Route path="/secondpage" element={<SecondPage />} />
         
         <Route path="/fifthpage" element={<FifthPage />} />

         {/* <Route path="/seventhpage" element={<SeventhPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
