import _ from 'lodash'
import { login } from '@/service/user'
import { getToken, setToken, removeToken } from '@/utils/token'
import { setStore, getStore, removeStore } from '@/utils/local-store'
const userInfoKeyName = 'userInfo'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  roles: [],
  userInfo: getStore(userInfoKeyName) || {}
}
const getters = {
  userInfo(state) {
    return state.userInfo
  }
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  },
  SET_USERINFO(state, payload) {
    state.userInfo = payload
    setStore(userInfoKeyName, payload)
  },
  REMOVE_USERINFO(state) {
    state.userInfo = {}
    removeStore(userInfoKeyName)
  }
}

const actions = {
  // user login
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      login({ ...payload })
        .then(response => {
          const { data, token } = response
          commit('SET_TOKEN', token)
          commit('SET_USERINFO', _.assign(data))
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // user logout
  logout({ commit }) {
    commit('SET_TOKEN', '')
    commit('REMOVE_USERINFO')
    removeToken()
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('REMOVE_USERINFO')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
