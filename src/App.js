import React from "react";
import "./index.css";
// import SearchBar from "./Components/SearchBar";
import CartItems from "./components/CartItems";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* <SearchBar/> */}
      <CartItems />
    </div>
  );
}

export default App;
