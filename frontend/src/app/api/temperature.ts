import { fetch } from 'app/utils/fetch'

export const requestTemperature = () => fetch.get('temperature')
