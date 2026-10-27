import { useState, useEffect } from "react"
import { Link } from "react-router"
import { getAllHoots } from "../../services/hootService"

function AllHoots({user}) {
  console.log(user)
  const [ hoots, setHoots ] = useState([])

  async function loadHoots(){
    const response = await getAllHoots()
    setHoots(response)
  }

  useEffect(()=>{
    loadHoots()
  },[])
  

  return (
    <div>
      <h1>All Hoots</h1>

      {hoots.map((oneHoot)=>
      <div key={oneHoot._id}>
        <h2>{oneHoot.title}</h2>
        <Link to={`/hoots/${oneHoot._id}`}>See Hoot</Link>
      </div>
      )}
    </div>
  )
}

export default AllHoots