import * as types from './types';
import { userApi, countryApi } from '../../services/api';

export function registerUser(data) {
  return {
    type: types.REGISTER_USER,
    payload: userApi.registerUser(data),
  }
}
export function checkEmailAvailability(email) {
  return {
    type: types.EMAIL_CHECK,
    payload: userApi.checkEmailAvailability(email),
  }
}
export function login(data) {
  return {
    type: types.LOGIN,
    payload: userApi.login(data),
  }
}
export function forgetPass(data) {
  return {
    type: types.FORGET_PASS,
    payload: userApi.forgetPass(data),
  }
}
export function verifyEmail(data) {
  return {
    type: types.EMAIL_VERIFY,
    payload: userApi.verifyEmail(data),
  }
}
export function logout({ data }) {
  return {
    type: types.LOGOUT,
    payload: data,
  }
}
export function socialLogin(data) {
  return {
    type: types.SOCIAL_LOGIN,
    payload: userApi.socialLogin(data),

  }
}
export function updateLocalUser(data) {
  return {
    type: types.USER_DETAILS,
    payload: data
  }
}
export function updateUser(data) {
  return {
    type: types.UPDATE_USER,
    payload: userApi.updateUser(data)
  }
}
export function resetPass(data) {
  return {
    type: types.FORGET_PASS,
    payload: userApi.resetPass(data)
  }
}
export function getUserData() {
  return {
    type: types.GET_USER,
    payload: userApi.getUserData()
  }
}
export function uploadImage(file) {
  return {
    type: types.UPLOAD_IMAGE,
    payload: userApi.uploadImage(file),
  }
}
export function updateToken(data) {
  return {
    type: types.UPDATE_TOKEN,
    payload: data
  }
}
export function getDeepLink(data) {
  return {
    type: types.DEEPLINK,
    payload: userApi.getDeepLink(data)
  }
}
export function selectLanguage(data) {
  return {
    type: types.LANGUAGE_CODE,
    payload: data
  }
}
export function getCountries() {
  return {
    type: types.COUNTRIES,
    payload: countryApi.getCountries()
  }
}

export function resumeCountries(countries) {
  return {
    type: types.RESUME_COUNTRIES,
    payload: countries
  }
}