import Client from './api'

export const GetTrailAndPosts = async (trailId) => {
  try {
    const res = await Client.get(`/trail/${trailId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateTrail = async (userId, formValue) => {
  try {
    const res = await Client.post(`/trail/user/${userId}`, formValue)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateTrailById = async (trailId, userId, formValues) => {
  try {
    const res = await Client.put(`/trail/${trailId}/user/${userId}`, formValues)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteTrailById = async (trailId, userId) => {
  try {
    const res = await Client.delete(`/trail/${trailId}/user/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
