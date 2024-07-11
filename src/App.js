import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./pagecontent/HomePages";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        {/* <Home /> */}
        <Routes>
          <Route path="/" exact element={<HomePages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
