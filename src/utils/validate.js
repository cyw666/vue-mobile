/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @desc InternetURL
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @desc 字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @desc 邮箱
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @desc 手机号
 * @export
 * @param {string | number} val
 * @returns {Boolean}
 */
export function validPhone(val) {
  const reg = /^1(2|3|4|5|6|7|8)\d{9}$/
  return reg.test(val)
}

/**
 * @desc 固话
 * @export
 * @param {string | number} val
 * @returns {Boolean}
 */
export function validTel(val) {
  const reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
  return reg.test(val)
}

/**
 * @desc 身份证
 * @export
 * @param {string} val
 * @returns {Boolean}
 */
export function validIDCard(val) {
  const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/
  return reg.test(val)
}

/**
 * @desc 整数
 * @export
 * @param {string} val
 * @returns {Boolean}
 */
export function IntPattern(val) {
  const reg = /^-?\d+$/
  return reg.test(val)
}

/**
 * @desc 正整数
 * @export
 * @param {string} val
 * @returns {Boolean}
 */
export function posIntPattern(val) {
  const reg = /^\d+$/
  return reg.test(val)
}

/**
 * @desc 数字
 * @export
 * @param {string} val
 * @returns {Boolean}
 */
export function numPattern(val) {
  const reg = /^-?\d*\.?\d+$/
  return reg.test(val)
}

/**
 * @desc 正数
 * @export
 * @param {string} val
 * @returns {Boolean}
 */
export function posPattern(val) {
  const reg = /^\d*\.?\d+$/
  return reg.test(val)
}

export function specialChartPattern(val) {
  const reg = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"
  )
  return reg.test(val)
}
