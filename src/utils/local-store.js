import Store from 'store/dist/store.modern'
const prefix = 'vueapp_'
export function getStore(key) {
  return Store.get(prefix + key)
}

export function setStore(key, value) {
  return Store.set(prefix + key, value)
}

export function removeStore(key) {
  return Store.remove(prefix + key)
}

export function clearAllStore() {
  return Store.clearAll()
}
