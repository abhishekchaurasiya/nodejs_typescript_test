import app from './app.js'
import config from './config/config.js'

const server = app.listen(config.PORT)

// web application ke start hone se pahle start karna hota hai some stuff
// like database, some database prefield,
// immediately invoke function

;(() => {
  try {
    // Database configuration
    // eslint-disable-next-line no-console
    console.info('Application started', {
      meta: {
        PORT: config.PORT,
        SERVER_URL: config.SERVER_URL
      }
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Application Error', { meta: error })

    // if server me error mil jati hai to server ko close kar dete hai 
    server.close((error) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.error('Application Error', { meta: error })
      }
      process.exit(1) // terminate the process with error
    })
  }
})()
