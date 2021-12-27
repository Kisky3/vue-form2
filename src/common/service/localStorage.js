export const getLocalData = key => {
  try {
    const data = localStorage.getItem(key)
    if (!data) return
    try {
      return JSON.parse(data)
    } catch (error) {
      return data
    }
  } catch (error) {
    console.log(error)
    return
  }
}

export const setLocalData = (key, data) => {
  try {
    if (!data) return
    if (typeof data !== 'object') localStorage.setItem(key, data)
    else localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.log(error)
    return
  }
}

export const deleteLocalData = key => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.log(error)
    return
  }
}
