import axios from 'axios'
import axiosRetry from 'axios-retry'

const baseURL = `${process.env.NEXT_PUBLIC_LIVE_API}/api`

interface ReqParams {
  method: string
  data: any
}

/**
 *
 * @param link: string
 * @param params: ReqParams
 * @param header: any
 * @returns response: AxiosResponse
 */

const request = (link: string, params: ReqParams, header: any = null) => {
  const headers: any = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
  }

  if (header && header.hasOwnProperty('Authorization') && header.Authorization) {
    headers.Authorization = header.Authorization
  }

  if (header && header.hasOwnProperty('Content-Type') && header['Content-Type']) {
    headers['Content-Type'] = header['Content-Type']
  }

  try {
    const ax = axios.create({
      baseURL: baseURL,
      headers: headers
    })

    axiosRetry(ax, {
      retries: 3,
      retryDelay: retryCount => {
        return retryCount * 1000
      }
    })

    const config: any = {
      method: (params && params.method) || 'GET',
      url: link,
      data: (params && params.data) || '',
      'axios-retry': {
        retries: 2
      }
    }

    if (params && params.method && params.method === 'GET' && params.data) {
      config.params = params.data || ''
    }

    return ax(config)
      .then(res => {
        return {
          status: res.status,
          data: res.data,
          headers: res.headers
        }
      })
      .catch(error => {
        if (error.response) {
          const { data, config, status } = error.response
          const throwError = {
            message: data.message || 'Internal Server Error',
            status: status || 500
          }

          if (error && error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log('req error ===========response 1', data, config.url, status)
          } else if (error && error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log('error.request========= 2 ', error.request)
            throwError.message = error.request
            throwError.status = 500
          } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error========== 3', error)
            throwError.message = error.message || error
            throwError.status = status || error.status || 500
          }
          // throw throwError
          return throwError
        } else if (error.request) {
          console.log('Could not connect to the server')
        }
      })
  } catch (error) {
    console.log(error)
  }
}

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default request
