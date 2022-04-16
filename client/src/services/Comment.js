import Client from './api'

export const GetComment = async (postId) => {
  try {
    const res = await Client.get(`/comment/post/${postId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateComment = async (postId, userId) => {
  try {
    const res = await Client.post(`/comment/post/${postId}/user/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
