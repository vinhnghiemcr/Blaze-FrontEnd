import Client from './api'

export const GetPostofTrail = async (trailId) => {
  try {
    const res = await Client.get(`/trail/${trailId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPostofUser = async (userId) => {
  try {
    const res = await Client.get(`/trail/user/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreatePost = async (userId, trailId, postFormValue) => {
  try {
    const res = await Client.post(
      `/post/trail/${trailId}/user/${userId}`,
      postFormValue
    )
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeletePost = async (userId, postId) => {
  try {
    const res = await Client.delete(`/post/${postId}/user/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePost = async (userId, postId) => {
  try {
    const res = await Client.put(`/post/${postId}/user/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
