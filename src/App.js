
// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index1 from "./Components/Pages/Index1";
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './Components/helperComponents/Navbar';
import Layout from './Components/Layout/Layout';
import Index2 from './Components/Pages/Index2';
import Index3 from './Components/Pages/Index3';
import Index4 from "./Components/Pages/Index4";
import Index5 from "./Components/Pages/Index5";
import Index6 from "./Components/Pages/Index6";
import Index7 from "./Components/Pages/Index7";
import Index8 from "./Components/Pages/Index8";
import Index9 from "./Components/Pages/Index9";
import Index10 from "./Components/Pages/Index10";
import Index11 from "./Components/Pages/Index11";
import Index12 from "./Components/Pages/Index12";
import Index13 from "./Components/Pages/Index13";
import Index14 from "./Components/Pages/Index14";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorSchemesExample />
        <Routes>
         
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Index8 />} />
            <Route path="/Index1" element={<Index1 />} />
            <Route path="/Index2" element={<Index2 />} />
            <Route path="/Index3" element={<Index3 />} />
            <Route path="/Index4" element={<Index4 />} />
            <Route path="/Index5" element={<Index5 />} />
            <Route path="/Index6" element={<Index6 />} />
            <Route path="/Index7" element={<Index7 />} />
            <Route path="/Index8" element={<Index8 />} />
            <Route path="/Index9" element={<Index9 />} />
            <Route path="/Index10" element={<Index10 />} />
            <Route path="/Index11" element={<Index11 />} />
            <Route path="/Index11" element={<Index12 />} />
            <Route path="/Index11" element={<Index13 />} />
            <Route path="/Index11" element={<Index14 />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
