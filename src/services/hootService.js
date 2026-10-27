// First thing you do in service is import the api
import api from "./api";

export async function getAllHoots(){
    const response = await api.get('/hoots')
    return response.data
}


export async function createNewHoot(newHoot){
    const response = await api.post('/hoots',newHoot)
    return response.data
}

export async function getHootById(hootId){
    const response = await api.get(`/hoots/${hootId}`)
    return response.data
}

export async function updateHootById(hootId, updatedHoot){
    const response = await api.put(`/hoots/${hootId}`,updatedHoot)
    return response.data
}

export async function deleteHootById(hootId){
    const response = await api.delete(`/hoots/${hootId}`)
    return response.data
}

export async function createComment(hootId,newComment){
    const response = await api.post(`/hoots/${hootId}/comment`,newComment)
    return response.data

}


// export {
//     getHootById,
//     getAllHoots,

// }