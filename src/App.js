import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./pagecontent/HomePages";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Home /> */}
        <Routes>
          <Route path="/" exact element={<HomePages />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
