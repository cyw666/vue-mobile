import request from '@/service/request'

// 登录
export function login(data) {
  return request.post('/auth/login', data)
}

// 修改密码
export function changePassword(payload) {
  return request.put(`/change-password`, payload)
}

// 重置密码
export function resetPassword(id, params) {
  return request.put(`/accounts/${id}/reset-password`, params)
}

// 管理员列表
export function getAdminUsers() {
  return request.get(`/accounts`)
}

// 更新
export function updateAdminUsers(id, params) {
  return request.put(`/accounts/${id}`, params)
}

// 添加
export function addAdminUsers(params) {
  return request.post(`/accounts`, params)
}

// 删除
export function deleteAdminUsers(id) {
  return request.delete(`/accounts/${id}`)
}

// 用户列表
export function getUsers(params) {
  return request.get(`/users`, { params })
}

// 用户信息
export function getUserInfo(id) {
  return request.get(`/users/${id}`)
}

// 更新用户状态
export function updateUsersStatus(id, params) {
  return request.put(`/users/${id}/status`, params)
}

// 更新用户
export function updateUsers(id, params) {
  return request.put(`/users/${id}`, params)
}
