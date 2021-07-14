import axios from 'axios'
import { useState } from 'react'

const APIKEY = process.env.REACT_APP_APIKEY
const APIBASE = process.env.REACT_APP_APIBASE

const URL = `https://api.airtable.com/v0/${APIBASE}/Ratings`

export default function ReviewForm() {
  const [name, setName] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState('')


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
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Review</label>
      <br />
      <input
        type="text"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <br />
      <label>Rating</label>
      <br />
      <input
        type="text"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <br />
      <button>Submit</button>
    </form>
  )
}