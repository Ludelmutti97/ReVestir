import { useState } from 'react'
import React from 'react';
import './luana.css'
import {Link} from 'react-router-dom';

function Luana (){
    const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = async () => {
    try {
      const response = await fetch('/api/favorite/:id');
      if (response.ok) {
        const data = await response.json();
        setIsFavorite(true);
        return data
      } else {
        throw new Error('not_found');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className='favorite-button-wrapper'>
    <button onClick={handleClick}  className="favorite-button">
      {isFavorite ? 'Favorited' : '❤️'}
    </button>
    </div>
  )

  }

const AddToOutfitButton = ({ productId }) => {
    const handleClick = async () => {
      try {
        const response = await fetch(`/api/outfit/${productId}`, {
          method: 'POST'
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data); // Aqui você pode manipular a resposta do backend
        } else {
          throw new Error('Erro');
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <button onClick={handleClick}>Add to Outfit</button>
    );
  }

export default Luana
