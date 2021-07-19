import axios from 'axios'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import "./ReviewForm.css"

const APIKEY = process.env.REACT_APP_APIKEY
const APIBASE = process.env.REACT_APP_APIBASE

const URL = `https://api.airtable.com/v0/${APIBASE}/Ratings`

export default function ReviewForm() {
  const [name, setName] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      name,
      review,
      rating,
    }

    const res = await axios.post(URL, { fields }, {
      headers: {Authorization: `Bearer ${APIKEY}`}
    })
    console.log(res)
  }
  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Review</label>
      <textarea
        rows="4"
        cols="50"
        type="text"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <label>Rating</label>
      {/* https://www.youtube.com/watch?v=eDw46GYAIDQ&ab_channel=EricMurphy */}
      <div className="StarContainer"> 
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              />
            <FaStar className="star"
              color={ratingValue <= (hover || rating) ? '#ffc107' : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null) }/>
          </label>
          ) 
      }
        )}
    </div> 
      <br />
      <button className="Button">Submit</button>
    </form>
  )
}