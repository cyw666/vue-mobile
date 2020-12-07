import { getStore, setStore, removeStore } from '@/utils/local-store'

const TokenKey = 'accessToken'

export function getToken() {
  return getStore(TokenKey)
}

export function setToken(token) {
  return setStore(TokenKey, token)
}

export function removeToken() {
  return removeStore(TokenKey)
}
