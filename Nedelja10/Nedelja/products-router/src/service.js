import axios from 'axios'

export const getAllProducts = () => axios.get('http://localhost:3005/products')
