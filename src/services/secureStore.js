/**
 * Stores the username and password

 * @param {string} username
 * @param {string} password
 */
const saveCredentials = async ( username, password) => {
  return await setInternetCredentials( username, password);
};

/**
 * @typedef {Object} Credentials
 * @property {string} username - The username
 * @property {string} password - The password
 */
/**
 * Gets the username and password stored for given clientId as key
 * @param {string} clientId
 * @return {Credentials} The credentials for the given clientId
 */
const fetchCredentials = async clientId => {
  return await getInternetCredentials(clientId);
};

const clearCredentials = async clientId => {
  return await resetInternetCredentials(clientId);
};

export {
  saveCredentials,
  fetchCredentials,
  clearCredentials,
};
