import axios from 'axios';

export const postAPI = async (url: string, post: object, token?:string) => {
    const res = await axios.post(`http://localhost:5000/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res;
}


export const getAPI = async (url: string, token?:string) => {
    const res = await axios.get(`http://localhost:5000/api/${url}`, {
        headers: { Authorization: token }
    })
    return res;
}

export const patchAPI = async (url: string, post: object, token?:string) => {
    const res = await axios.patch(`http://localhost:5000/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res;
}


export const putAPI = async (url: string, post: object, token?:string) => {
    const res = await axios.put(`http://localhost:5000/api/${url}`, post, {
      headers: { Authorization: token }
    })
  
    return res;
}
  
  
export const deleteAPI = async (url: string, token?:string) => {
    const res = await axios.delete(`https://olean-backend.onrender.com/api/${url}`, {
      headers: { Authorization: token }
    })
  
    return res;
}

