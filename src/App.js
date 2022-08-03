import { BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HomePage from './components/HomePage';
import Inst from "./components/InstPage";
import Post from "./components/Post";
import "./App.css";



function App() {
 

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
         <Route path='/' element={<HomePage />}></Route>
         <Route path='/contact' element={<Contact />}></Route>
         <Route path="/inst" element={<Inst />}></Route>
         <Route path="/post" element={<Post />}></Route>

         

        </Routes>
      </Router>
    </div>
  );
}

export default App;
