import * as type from './actiontype'
import axios from 'axios'

const fetchauthRequest = (payload) => {
  return {
    type: type.FETCH_AUTH_REQUEST,
    payload,
  }
}

const fetchauthSuccess = (payload) => {
  return {
    type: type.FETCH_AUTH_SUCCESS,
    payload,
  }
}

const fetchauthFailure = (payload) => {
  return {
    type: type.FETCH_AUTH_FAILURE,
    payload,
  }
}

const fetchToken = (user) => {
  const { email, password } = user
//   console.log(email)
//   console.log(password)

  return (dispatch) => {
    dispatch(fetchauthRequest())
    axios
      .post('https://myassignmentgoogle.herokuapp.com/login', {
        email: email,
        password: password,
      })
      .then((e) => {
        dispatch(fetchauthSuccess(e.user.accessToken))
      })
      .catch((e) => dispatch(fetchauthFailure(e.user)))
  }
}

export { fetchToken }
