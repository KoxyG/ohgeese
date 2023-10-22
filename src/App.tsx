import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPage from "./Pages/NewPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
