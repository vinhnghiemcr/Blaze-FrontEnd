import Client from './api'

export const LogInUser = async (data) => {
  try {
    const res = await Client.post('/user/login', data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/user/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/user/session')
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateUser = async (userId) => {
  try {
    const res = await Client.put(`/user/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteUser = async (userId, passwordBody) => {
  try {
    const res = await Client.delete(`/user/${userId}`, passwordBody)
    return res.data
  } catch (error) {
    throw error
  }
}

// Get all posts belong to a user
export const GetPostofUser = async (userId) => {
  try {
    const res = await Client.get(`/post/user/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
