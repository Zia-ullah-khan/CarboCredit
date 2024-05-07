import { Routes, Route } from "react-router-dom";
import { Contacts } from "./components/contact";
import { Home } from "./components/home";
import SignUp from "./components/signup";
import Projects from "./components/projects";
import Purchase from "./components/purchase";
import {Admin} from "./components/admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contacts />} />
      <Route path="sign_up" element={<SignUp />} />
      <Route path="projects" element={<Projects />} />
      <Route path="purchase" element={<Purchase />} />
      <Route path="admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
