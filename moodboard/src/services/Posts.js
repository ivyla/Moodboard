import axios from "axios"
const baseUrl = "http://localhost:3001/posts"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then((response) => response.data)
}

const newPost = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then((response) => response.data)
}

const deletePost = (id) => {
    const response = axios.delete(`${baseUrl}/${id}`)
    return response.then((response) => response.data)
}

const updatePost = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then((response) => response.data)
}

export default {
    getAll,
    newPost,
    deletePost,
    updatePost
}
