import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-900">
      <div className="mb-10">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
