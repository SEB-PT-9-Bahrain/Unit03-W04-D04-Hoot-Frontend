import { useState } from "react";
import { createNewHoot } from "../../services/hootService";
import { useNavigate } from "react-router";
function CreateHoot() {
  const [formData, setFormData] = useState({
    title:"",
    text: "",
    category:""
  });

  

  const navigate = useNavigate()

  function handleChange(event){
    setFormData({...formData, [event.target.name]:event.target.value})
  }


  
    async function handleSubmit(event){
      event.preventDefault()
      const createdHoot = await createNewHoot(formData)
      navigate('/hoots')
  
    }
  return (
    <div>
      <h1>Create Hoot</h1>
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
    </div>
  );
}

export default CreateHoot;
