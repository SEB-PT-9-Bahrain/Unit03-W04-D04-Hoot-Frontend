import { useState, useEffect } from "react"
import { Link, useParams } from "react-router"
import { getHootById } from "../../services/hootService"

function HootDetails() {
  const [ hoot, setHoot ] = useState(null)
  const [ comments, setComments] = useState([])

  const { hootId } = useParams() // Getting the dynamic id for the hoot so I can call the api with this id to get the full hoot

  async function loadHoot(){
    const response = await getHootById(hootId)
    setHoot(response.hoot)
    setComments(response.comments)
  }

  useEffect(()=>{
    loadHoot()
  },[])

  return (
    <div>
      <h1>Hoot Details</h1>

      {hoot ? (
        <>
          <h2>{hoot.title}</h2>
          <p>{hoot.text}</p>
          <p> <b>Category:</b> {hoot.category} </p>
          <p> <b>Created By:</b> {hoot.author.username} </p>

          <h3>Comments</h3>
          
      </>) : null}
    </div>
  )
}

export default HootDetails