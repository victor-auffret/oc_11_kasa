import { useState } from "react"
import { CardLocation } from "../card-location"
import "./index.css"

const CardList = () => {
 const data = [
  "test 1",
  "test 2",
  "test 3",
  "test 4",
  "test 5",
  "test 6",
  "test 7",
  "test 8",
  "test 9"
 ]
 return <div className="card-list">
  {
   data.map((val, key) => <CardLocation key={`card-location-${key}`} titre={val} />)
  }
 </div>
}

export { CardList }
