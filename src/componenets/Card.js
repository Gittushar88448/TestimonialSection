import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


const Card = (props) => {
    let reviews = props.reviews;
  return (
    <div>
        <div>
            <img src={reviews.image}></img>
            <div></div>
        </div>

        <div>
            <p>{reviews.name}</p>
            <p>{reviews.job}</p>
        </div>

        <div>
            <FaQuoteLeft/>
        </div>

        <div>
            {reviews.text}
        </div>

        <div>
            <FaQuoteRight/>
        </div>

    </div>
  )
}

export default Card