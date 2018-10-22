import { fetch } from 'app/utils/fetch'

export const requestPrecipitation = () => fetch.get('precipitation')
