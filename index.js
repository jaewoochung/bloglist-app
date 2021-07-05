const app = require('./app') // the actual Express application
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

/**
 * Next Steps
 * Create a routers
 * Duplicate for post's
 * app.js?
 * simplify index.js
 * utlity middlewares/console.logging
*/