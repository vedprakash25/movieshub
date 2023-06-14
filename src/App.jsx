import { useState } from "react";

import "./App.css";
import Header from "./molecules/header";
import { HomePage } from "./pages";
import Footer from "./molecules/footer";

function App() {
  return (
    <>
      <div className="px-10">
        {/* <Header /> */}
        <HomePage />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
