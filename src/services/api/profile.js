import xses from 'xses'

export const profile = (credentials) => {
    return xses.post('http://127.0.0.1:8000/api/profile', credentials).then(response => response.data)
  }