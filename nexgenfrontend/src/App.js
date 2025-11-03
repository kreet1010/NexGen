import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import TrainingPlans from "./pages/TrainingPlans";
import Coaches from "./pages/Coaches";
import CourtBooking from "./pages/CourtBooking";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/training-plans" element={<TrainingPlans />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/court-booking" element={<CourtBooking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
