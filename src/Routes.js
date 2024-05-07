import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";

export const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
    </Router>
  );
};
