const functions = require('firebase-functions')
const expressApp = require('./express/app')

// // Create and Deploy Your Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// Create "api" function to host all other top-level endpoints from Express
exports.api = functions.https.onRequest(expressApp)
