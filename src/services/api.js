import axios from 'axios';
import moment from 'moment';
var qs = require('qs');
import store from '@store/configureStore';
import Config from '@config/';
import { Storage } from '@utils';

const instance = axios.create({
  baseURL: Config.SERVER_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000000,
});

store.subscribe(async () => {
  var token = store.getState().user.token;
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
});

const getToken = async () => {
  var localToken = await Storage.get(Storage.TOKEN);
  return localToken;
};



export const API = {
  userApi: {
    registerUser: data => {
      return instance
        .post(Config.USER_HOST, data)
        .then(res => { return res; })
        .catch(err => { return err; });
    },
    checkEmailAvailability: email => {
      return instance
        .get(`${Config.USER_HOST}/count?where=${JSON.stringify({ "email": email })}`)
        .then(res => { return res; })
        .catch(err => { return err; });
    },
    login: data => {
      return instance
        .post(Config.USER_LOGIN, data)
        .then(res => { return res; })
        .catch(err => { return err; });
    },
    forgetPass: data => {
      return instance
        .post(Config.FORGET_PASS, data)
        .then(res => { return res; })
        .catch(err => { return err; });
    },
    verifyEmail: data => {
      return instance
        .post(Config.EMAIL_VERIFY, data)
        .then(res => { return res; })
        .catch(err => { return err; });
    },
    socialLogin: data => {
      return instance
        .post(Config.SOCIAL_LOGIN, data)
        .then(res => { return res; })
        .catch(err => { return err; });
    },
    resetPass: data => {
      return instance
        .post(Config.RESET_PASS, data)
        .then(res => { return res; })
        .catch(err => { return err; });
    }
  }
};

module.exports = API;
