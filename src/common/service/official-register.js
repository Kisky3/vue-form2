import { getLocalData, setLocalData, deleteLocalData } from './localStorage'

const localFormDataKey = 'formData'
export const getLocalFormData = () => {
  return getLocalData(localFormDataKey)
}
export const setLocalFormData = data => {
  return setLocalData(localFormDataKey, data)
}
export const deleteLocalFormData = () => {
  return deleteLocalData(localFormDataKey)
}

export const getLocalFieldData = key => {
  const localFormData = getLocalFormData()
  if (!localFormData) return
  return localFormData[key]
}

export const setLocalFieldData = (key, value, errors = null) => {
  if (typeof value === 'string') {
    value = value.trim()
  }
  if (errors != null) {
    const isHasError = errors.has(key)
    if (isHasError) return false
  }
  let localFormData = getLocalFormData()
  if (!localFormData) localFormData = {}
  localFormData[key] = value
  setLocalFormData(localFormData)
}
export const setLocalFieldDataOnEvent = (event, errors = null) => {
  const name = event.target.name
  const value = event.target.value
  setLocalFieldData(name, value, errors)
}

export const getLocalStep = () => {
  const step = getLocalFieldData('status')
  if (!step) return 1
  return step
}
export const setLocalStep = step => {
  return setLocalFieldData('status', step)
}

const localIdKey = 'official-register-id'
const localTokenKey = 'official-register-token'
export const getLocalId = () => {
  return getLocalData(localIdKey)
}
export const setLocalId = id => {
  return setLocalData(localIdKey, id)
}
export const getLocalToken = () => {
  return getLocalData(localTokenKey)
}
export const setLocalToken = token => {
  return setLocalData(localTokenKey, token)
}
