import Client from './api'

export const GetAllTrailAndPost = async (trailId) => {
  try {
    const res = await Client.get(`/trail/${trailId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateTrail = async (stateId, userId) => {
  try {
    const res = await Client.post(`/trail/user/${userId}/state/${stateId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateTrailById = async (trailId, userId) => {
  try {
    const res = await Client.put(`/trail/${trailId}/user/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
