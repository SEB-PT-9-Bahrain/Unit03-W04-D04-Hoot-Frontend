import { useState, useEffect } from "react";
import { updateHootById, getHootById } from "../../services/hootService";
import { useNavigate, useParams } from "react-router";

function EditHoot() {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    category: "",
  });

  
    const navigate = useNavigate()
  
    function handleChange(event){
      setFormData({...formData, [event.target.name]:event.target.value})
    }

    const {hootId} = useParams()

    async function loadHoot(){
    const response = await getHootById(hootId)
    setFormData(response.hoot)
  }

    useEffect(()=>{
    loadHoot()
  },[])
  
  
    
      async function handleSubmit(event){
        event.preventDefault()
        await updateHootById(hootId, formData)
        navigate('/hoots')
    
      }
  return (<div>
    <h1>Update Hoot</h1>
    <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input 
            name="title"
            type="text"
            id="title"
            onChange={handleChange}
            value={formData.title}
            />
            <label htmlFor="text">Text: </label>
            <input 
            name="text"
            type="text"
            id="text"
            onChange={handleChange}
            value={formData.text}
            />
            <label htmlFor="category">Catgory: </label>
            <select value={formData.category}  onChange={handleChange} name="category" id="category">
              <option value="">-------</option>
              <option value="News">News</option>
              <option value="Sports">Sports</option>
              <option value="Games">Games</option>
              <option value="Movies">Movies</option>
              <option value="Television">Television</option>
            </select>
            <button>Comment</button>
          </form>
  </div>)
}

export default EditHoot;
