// import { createPromise } from 'redux-promise-middleware';
// import {
//   LOGIN_SUCCESS,
//   LOGOUT
// } from '@store/user/types';

// import {
//   fetchTokens
// } from '@services/secureStore';
// import { Storage, isNotEmpty } from '@utils';
// import { customTrace } from './helpers';
// import createHeadersMiddleware from './headersMiddleware';

// export { default as applyMiddleware } from './applyMiddleware';

// export const PromiseStatus = {
//   START: 'START',
//   SUCCESS: 'SUCCESS',
//   ERROR: 'ERROR',
// };

// export const reduxPromise = createPromise({
//   promiseTypeSuffixes: [
//     PromiseStatus.START,
//     PromiseStatus.SUCCESS,
//     PromiseStatus.ERROR,
//   ],
// });

// const sessionKey = 'Authorization';

// export const headersMiddleware = createHeadersMiddleware({
//   auth: {
//     setToken: async headers => {
//       const response = await Storage.get(Storage.CASPIO_TOKEN)
//       if ( response != null ){
//         const { data : { access_token } } = JSON.parse(response);
//         headers[sessionKey] = `Bearer ${access_token}`;
//       }
//     },
//   },

//   login: {
//     filterBy: ({ type }) => type === LOGIN_SUCCESS,
//     handler: ({ store, action }) => {
//       return async function after(headers) {
//         const { dispatch } = store;
//         const { payload } = action;
//         // await dispatch(updateLastlogin(payload));
//         // const { value } = await dispatch(getMemberProfile(payload));

//         // TODO find better way
//         isNotEmpty(payload.after) && payload.after(payload);
//       };
//     },
//   },

//   logout: {
//     filterBy: ({ type }) => type === LOGOUT,
//     handler: ({ store }) => {
//       return async function after(headers) {
//         const { getState } = store;
//         headers[sessionKey] = null;
//         clearTokens();
//         clearCredentials(clientId);
//       };
//     },
//   },
// });
