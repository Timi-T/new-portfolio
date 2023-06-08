import Home from "./pages/Home/Home";
import CV from "./components/CV/Cv";
import { Route, Routes } from "react-router-dom";
import { PageProvider } from "./contexts/PageContext";
import { useEffect } from "react";

function App() {
  return (
    <PageProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cv" element={<CV />}></Route>
      </Routes>
    </PageProvider>
  );
}

export default App;
