// we'll need axios
import axios from 'axios'

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export let FETCH = 'FETCH'
export let SUCCESS = 'SUCCESS'
export let FAIL = 'FAIL'

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetch = (data) => {
  return {
    type: FETCH,
    payload: data
  }
}

export const success = (res) => {
  return {
    type: SUCCESS,
    payload: res
  }
}

export const fail = (err) => {
  return {
    type: FAIL,
    payload: err
  }
}