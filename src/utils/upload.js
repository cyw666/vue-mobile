import _ from 'lodash'
import axios from 'axios'
import request from '@/service/request'
const uploadHost = process.env.VUE_APP_UPLOAD_HOST || '/upload'
const store = {
  host: '',
  assetsPrefix: '',
  keyPrefix: '',
  expiration: '',
  certificate: {
    ossAccessKeyId: '',
    policy: '',
    signature: ''
  }
}

const isExpired = function isExpired(date, period = 1) {
  const target = new Date(date)

  return Date.now() >= target.getTime() - period * 60 * 1000
}

export const randomString = function randomString(len = 13) {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
  return _.join(
    _.map(_.range(0, len), () => str[_.random(str.length - 1)]),
    ''
  )
}

export function getUploadConfig() {
  if (store.expiration) {
    const hasExpired = isExpired(store.expiration)

    if (!hasExpired) {
      return Promise.resolve(store)
    }
  }
  return request.get(uploadHost).then(response => {
    _.assign(store, _.pick(response, _.keys(store)))
    return store
  })
}

export async function uploadHandler(file) {
  try {
    const {
      host,
      keyPrefix,
      assetsPrefix,
      certificate
    } = await getUploadConfig()
    const ext = _.last(_.split(file.name, '.'))
    const slug = randomString()
    const filename = `${keyPrefix}${slug}.${ext}`

    const formData = new FormData()

    formData.append('Cache-Control', 'public, max-age=31536000')

    _.forEach(certificate, (value, key) => {
      formData.append(key, value)
    })

    formData.append('key', filename)

    if (file instanceof File) {
      formData.append('file', file)
    } else if (file.blob) {
      formData.append('file', file.blob)
    }
    await axios.post(`//${host}`, formData)
    let url = `${assetsPrefix}/${filename}`
    url = _.startsWith(url, 'http') ? url : `https:${url}`
    const result = {
      ossName: filename,
      originalName: file.name,
      url,
      name: filename
    }
    return result
  } catch (error) {
    console.warn(error)
  }
}
export default {
  upload(context) {
    const file = context.file
    return uploadHandler(file)
  }
}
