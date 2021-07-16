// import { applyMiddleware } from 'redux';
// import { compose } from 'ramda';

// const idDev = process.env.NODE_ENV === 'development';

// export default (...middleware) => {
//   if (idDev) {
//     const {
//       composeWithDevTools,
//     } = require('redux-devtools-extension/developmentOnly');
//     const { createLogger } = require('redux-logger');

//     middleware.push(
//       createLogger({
//         collapsed: true,
//       }),
//     );

//     return compose(
//       composeWithDevTools,
//       applyMiddleware,
//     )(...middleware);
//   }

//   return applyMiddleware(...middleware);
// };
