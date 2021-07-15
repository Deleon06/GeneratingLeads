import React from "react"
import { FaStar } from 'react-icons/fa'
import "./StarRating.css"

export default function Review(props) {
  return (
    <div>
      <h1>{props.review.fields?.name}</h1>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
      <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              />
            <FaStar className="star" 
            color={ratingValue <= (props.review.fields?.rating) ? '#ffc107' : "#e4e5e9"}/>
      </label>
        )
      }
      )
      }
      <p>{props.review.fields?.review}</p>
    </div>
  )
  
}