import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/searchBar/SearchBar";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState(null);

  const fetchImages = async (searchQuery, numPage) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=${numPage}&query=${searchQuery}`,
        {
          headers: {
            Authorization:
              "Client-ID Ph4PpdJNR_bfnGbfoO28ljpqE_IueaOsvzxI3HR8ys0",
          },
        }
      );
      return res.data.results.slice(0, 9);
    } catch (error) {
      console.log("Error: ", error);
      return;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newImages = await fetchImages(query, page);
        setImages((prevImg) => [...prevImg, newImages]);
      } catch (error) {
        setError(error);
      }
    };

    if (query !== "") {
      fetchData();
    }
  }, [query, page]);

  function onSubmit() {
    setError();
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <LoadMoreBtn />
      {/* {error ? <ErrorMessage /> : <ImageGallery />} */}
      <Loader />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
