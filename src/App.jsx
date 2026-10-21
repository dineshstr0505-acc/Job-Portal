import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Jobs from "./Jobs.jsx";
import JobDetails from "./JobDetails.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/JobDetails" element={<JobDetails />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;