import axios from 'axios'
import { useState, useEffect } from 'react'
import Review from '../Review/Review'
import './Reviews.css'

const APIKEY = process.env.REACT_APP_APIKEY
const APIBASE = process.env.REACT_APP_APIBASE

const URL = `https://api.airtable.com/v0/${APIBASE}/Ratings`

export default function Reviews() {
const [reviews, setReviews] = useState([])
  useEffect(() => {
    console.log(APIKEY)
    getData()
  }, [])

  const getData = async () => {
    const res = await axios.get(URL, { headers: { Authorization: `Bearer ${APIKEY}` } })
    console.log(res)
    setReviews(res.data.records)
  }
    return (
    <div>
      {
          reviews?.map((review) => (
            <>
              <Review review={review} />
            </>
            )
          )
        }
    </div>
    )
  }
