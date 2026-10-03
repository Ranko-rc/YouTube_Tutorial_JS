import './styles.css';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

export default function StarRating({noOfStars = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);



    function handleclick(getCurrendIndex) {
        setRating(getCurrendIndex);
    }


    function handleMouseEnter(getCurrendIndex   ) {
        setHover(getCurrendIndex);
    }


    function handleMouseLeave(getCurrendIndex)  {
        setHover(null);
    }
 

  return (  <div className='content'>   
    <h1 className="nadpis">Stars Rating</h1>

    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {  

        return (
          <FaStar key={index} 
          onClick={() => handleclick(index + 1)}
          onMouseOver={() => handleMouseEnter(index + 1)}
          onMouseOut={() => handleMouseLeave(index + 1)}
          color={index < (hover || rating)  ? "gold" : "grey"}  
          />

        );
      })}

    </div>

  </div>    
  );
}