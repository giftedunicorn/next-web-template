import * as log from 'loglevel';
import axios from 'axios';
axios.defaults.timeout = 30000;

async function axiosHelper({ method, url, name, body, auth }) {
  if (name) log.debug(`${name} invoked`);

  try {
    const options = {
      method,
      url: signUrl(method, url, name),
      data: body,
    }

    if (auth) {
      const token = await getIdTokenHelper()
      if (token) {
        options.headers = {
          "Authorization": token,
        }
      }
    }

    const response = await axios(options)
    const {data} = response;
    if (data.statusCode !== 200) {
      if (data.message) throw new Error(`${name} ERROR, ${data.message}`)
      else throw new Error(`${name} ERROR`)
    } else {
      log.debug(`${name} RESULT`);
      return data
    }
  } catch (error) {
    log.error(`${name} ERROR`, error)
    if (error && error.response && error.response.data && error.response.data.message) throw new Error(error.response.data.message)
    else if (error && error.response && error.response.statusText) throw new Error(error.response.statusText)
    else if (error && error.message) throw new Error(error.message)
    else throw error
  }
}

// ACTIONS
async function createAction(body) {
  try {
    const response = await axiosHelper({
      method: 'POST',
      url: `${APIHOST}/api/v1/actions/new`,
      name: 'createAction',
      body,
    })
    return response
  } catch (error) {
    // throw error
  }
}

export {
  createAction,
}
