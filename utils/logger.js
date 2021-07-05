/**
 * Extracting logging into its own module is a good idea
 * We only have to make changes in one place
 */

 const info = (...params) => {
  console.log(...params)
}

const error = (...params) => {
  console.error(...params)
}

module.exports = {
  info, error
}