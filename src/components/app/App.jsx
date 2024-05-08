import { useState, useEffect} from 'react'
import './App.css'
import { fetchPhotosWithQuery } from '../../api/photos-api.js'
import SearchBar from '../search_bar/SearchBar'
import ImageGallery from '../image_gallery/ImageGallery.jsx'
import Loader from '../loader/Loader.jsx'
import ErrorMessage from '../error_message/ErrorMessage.jsx'
import LoadMoreBtn from '../load_more_btn/LoadMoreBtn.jsx'
import ImageModal from '../image_modal/ImageModal.jsx'

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});


  useEffect(() => {
    if (query == "") {
      return;
    }
    fetchPhotos(query, page);
  }, [query, page]);

  async function fetchPhotos(searchQuery, page) {
      try {
        setIsError(false);
        setLoadMoreBtn(false);
        setLoading(true);
        const data = await fetchPhotosWithQuery(searchQuery, page);
        const totalPages = data.total_pages;
        setLoadMoreBtn(totalPages > page);
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
}
  
  const handleSearch = (searchQuery) => {
    setPhotos([]);
    setQuery(searchQuery);
    setPage(1);
  }
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1 );
  }

  const openModal = (img) => {
    setSelectedPhoto(img);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }
  
  return (
    <>
      <SearchBar onSearch={handleSearch}></SearchBar>
      {photos.length > 0 && <ImageGallery items={photos} onSelect={openModal}></ImageGallery>}
      {loading && <Loader></Loader>}
      {isError && <ErrorMessage></ErrorMessage>}
      {loadMoreBtn && <LoadMoreBtn handleLoadMore={handleLoadMore}></LoadMoreBtn>}
      {modalIsOpen && <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} photo={selectedPhoto}></ImageModal>}
    </>
    
  )
}

export default App
