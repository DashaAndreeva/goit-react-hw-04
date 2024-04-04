import { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import ImageGallery from "./components/imageGallery/ImageGallery";
import { Toaster } from "react-hot-toast";

import "./App.css";

// Access Key = Ph4PpdJNR_bfnGbfoO28ljpqE_IueaOsvzxI3HR8ys0

function App() {
  function onSubmit() {}

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={onSubmit} />
    </>
  );
}

export default App;
