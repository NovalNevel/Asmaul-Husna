import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import Home from "./components/pages/Home";
import AsmaulHusna from "./components/pages/AsmaulHusna";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asmaulhusna" element={<AsmaulHusna />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
