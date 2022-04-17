import Client from './api'

export const GetAllStates = async () => {
  try {
    const res = await Client.get('/state')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetStateAndAllTrails = async (stateId) => {
  try {
    const res = await Client.get(`/state/${stateId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
