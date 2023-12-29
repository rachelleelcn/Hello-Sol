import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Learn, Create, Play, Geo } from "./pages";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/learn' />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/create' element={<Create />} />
          <Route path='/play' element={<Play />} />
          <Route path='/geo' element={<Geo />} />
        </Routes>
      </Router>
    </main>
  );
};


export default App;