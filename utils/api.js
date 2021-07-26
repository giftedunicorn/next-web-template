import * as log from 'loglevel';
import axios from 'axios';
axios.defaults.timeout = 30000;

async function axiosHelper({ method, url, name, body }) {
  if (name) log.debug(`${name} invoked`);

  try {
    const options = {
      method,
      url: signUrl(method, url, name),
      data: body,
    }

    const response = await axios(options)
    const { data } = response;

    if (data.statusCode !== 200) {
      if (data.message) throw new Error(`${name} ERROR, ${data.message}`)
      else throw new Error(`${name} ERROR, ${data.statusCode}`)
    } else {
      log.debug(`${name} DONE`);
      return data
    }
  } catch (error) {
    log.error(`${name} ERROR`)
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      log.error(error.response.data);
      log.error(error.response.status);
      log.error(error.response.headers);
      throw new Error(error.message)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      log.error(error.request);
      throw new Error(error.message)
    } else {
      // Something happened in setting up the request that triggered an Error
      log.error('Error', error.message);
      throw new Error(error.message)
    }
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
