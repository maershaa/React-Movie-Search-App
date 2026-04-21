import { useState } from 'react';

const useMovieModal = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = movie => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return { selectedMovie, isModalOpen, openModal, closeModal };
};

export { useMovieModal };
