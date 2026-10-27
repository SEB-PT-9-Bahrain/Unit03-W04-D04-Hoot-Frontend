import { useState, useEffect } from "react"
import { Link, useParams } from "react-router"
import { getHootById } from "../../services/hootService"

function HootDetails() {
  const [ hoot, setHoot ] = useState(null)
  const [ comments, setComments] = useState([])

  const { hootId } = useParams() // Getting the dynamic id for the hoot so I can call the api with this id to get the full hoot

  

  return (
    <div>HootDetails</div>
  )
}

export default HootDetails