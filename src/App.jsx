import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Learn, Create, Play, Geo } from "./pages";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Hello-Sol/' element={<Navigate to='/Hello-Sol/learn' />} />
          <Route path='/Hello-Sol/learn' element={<Learn />} />
          <Route path='/Hello-Sol/create' element={<Create />} />
          <Route path='/Hello-Sol/play' element={<Play />} />
          <Route path='/Hello-Sol/geo' element={<Geo />} />
        </Routes>
      </Router>
    </main>
  );
};


export default App;