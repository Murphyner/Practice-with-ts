// components/Card.tsx
import React from 'react';
import { Movie } from './types';

interface CardProps {
  movie: Movie;
  setId: React.Dispatch<React.SetStateAction<number[]>>,
  id: number[]
}

const Card: React.FC<CardProps> = ({ movie ,setId , id }) => {
  const { id: movieId, title, genre, releaseYear, isFavorite } = movie;

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{genre} | {releaseYear}</p>
        <button onClick={() => setId([...id, movieId])} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default Card;
