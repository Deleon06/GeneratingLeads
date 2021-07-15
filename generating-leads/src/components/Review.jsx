import React from "react"

export default function Review(props) {
  return (
    <div>
      <h1>{props.review.fields?.name}</h1>
      <h2>{props.review.fields?.rating}</h2>
      <p>{props.review.fields?.review}</p>
    </div>
  )
  
}