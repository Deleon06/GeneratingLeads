export default function Review(props) {
  return (
    <>
      <h1>{props.fields.name}</h1>
      <h2>{props.fields.ratings}</h2>
      <h3>{props.fields.review}</h3>
    </>
  )
  
}