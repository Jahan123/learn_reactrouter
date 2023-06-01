import {Routes,Route} from "react-router-dom"
 import Main from "./components/Main";
 import Home from "./components/Home";
 import About from "./components/About";
function App() {
  return (
    <Routes>
      <Route  path="/" element={<Main/>}>
        <Route path=""  element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Route>
    </Routes>
  );
}

export default App;
