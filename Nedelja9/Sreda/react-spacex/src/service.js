import axios from 'axios'
import { BASE_URL, COMPANY_INFO, PAST_LAUNCHES } from './constants'

export const getPastLaunches = () => axios.get(`${BASE_URL}${PAST_LAUNCHES}`)

export const getCompanyInfo = () => axios.get(`${BASE_URL}${COMPANY_INFO}`)