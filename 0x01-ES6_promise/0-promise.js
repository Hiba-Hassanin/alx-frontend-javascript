// src/0-promise.js

/**
 * Function that returns a Promise
 * @returns {Promise} A promise object
 */
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve("Response from API");
  });
}

module.exports = getResponseFromAPI;
