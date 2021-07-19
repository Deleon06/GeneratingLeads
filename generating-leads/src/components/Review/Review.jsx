import React from "react"
import { FaStar } from 'react-icons/fa'
import "./Review.css"
export default function Review(props) {

  let created = props.review.createdTime

  let date = created.slice(0, created.indexOf("T"))

  let dateArr = []

  for (let i = 0; i < 5; i++) {
    dateArr.push(date[i])
  }
  
  let inverseDate = date.concat(dateArr[4], dateArr[0], dateArr[1], dateArr[2], dateArr[3])

  let newDate = inverseDate.slice(5)

  return (
    <div className="review-container" key={newDate}>
      <h1>{props.review.fields?.name}</h1>
      <div className="date-star">
      <div className="date-created">
          {
            newDate
          }
        </div>
      <div className="star-div">
        
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1
          return (
            <label key={ratingValue}>
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
        </div>
      </div>
      <br />
      <p>{props.review.fields?.review}</p>
    </div>
  )
  
}