import Client from './api'

export const GetPostComments = async (postId) => {
  try {
    const res = await Client.get(`/comment/post/${postId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateComment = async (userId, postId, commentBody) => {
  try {
    const res = await Client.post(
      `/comment/post/${postId}/user/${userId}`,
      commentBody
    )
    return res.data
  } catch (error) {
    throw error
  }
}
