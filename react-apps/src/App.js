
import HOME from './pages/home.jsx';
import INFO from './pages/contact.jsx';
import ABOUT from './pages/about.jsx';
import HADER from './pages/hader.jsx';
import{BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element ={<HOME /> }></Route>
      <Route path="/about" element ={<ABOUT /> }></Route>
      <Route path="/contact" element ={<INFO /> }></Route>
      <Route path="./hader" element={<HADER />} ></Route>


    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
