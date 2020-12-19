import axios from 'axios'

const token = localStorage.getItem('user-token');

export const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {Authorization: 'Bearer' +token}
})

export default{
  index: () =>{
    return api.get('services')
  },
  paginate: (page) =>{
    return api.get(page)
  },
  getId: (id) =>{
    return api.get(id)
  },
  editOrder: (id, services) =>{
    return api.put(id, services)
  },
  deleteService: (id) =>{
    return api.delete(id)
  },
  createOrder: (service) =>{
    return api.post('http://127.0.0.1:8000/api/services/',service)
  },
  attempLogin: (login) =>{
    return api.post(login)
  }
}