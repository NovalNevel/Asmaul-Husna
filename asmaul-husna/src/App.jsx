import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/pages/Home";
import AsmaulHusna from "./components/pages/AsmaulHusna";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asmaulhusna" element={<AsmaulHusna />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
