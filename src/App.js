import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Components/Layout";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import HomePage from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
