import Client from './api'

export const GetPostComments = async (postId) => {
  try {
    const res = await Client.get(`/comment/post/${postId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateComment = async (userId, postId, commentFormValues) => {
  try {
    const res = await Client.post(
      `/comment/post/${postId}/user/${userId}`,
      commentFormValues
    )
    return res.data
  } catch (error) {
    throw error
  }
}
