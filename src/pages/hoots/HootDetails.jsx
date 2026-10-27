import { useState, useEffect } from "react"
import { Link, useParams } from "react-router"
import { getHootById, createComment } from "../../services/hootService"

function HootDetails() {
  const [ hoot, setHoot ] = useState(null)
  const [ comments, setComments] = useState([])
  const [ formData, setFormData ] = useState({
    text:''
  })

  function handleChange(event){
    setFormData({...formData, [event.target.name]:event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()

    createComment(hootId,formData)
    loadHoot() // This re fetches the hoot with the updated comment
    setFormData({text:''})

  }

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

          <form onSubmit={handleSubmit}>
            <label htmlFor="text"></label>
            <input 
            name="text"
            type="text"
            id="text"
            onChange={handleChange}
            value={formData.text}
            />
            <button>Comment</button>
          </form>
          {comments.map((oneComment)=>
          <div>
            <p>{oneComment.text}</p>
            <p> <b>By:</b> {oneComment.author.username} </p>
          </div>
          )}
      </>) : null}
    </div>
  )
}

export default HootDetails