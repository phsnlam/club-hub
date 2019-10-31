const functions = require('firebase-functions')
const express = require('express')
const expressApp = require('./express/app')

// // Create and Deploy Your Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// Create "api" wrapper to host all other top-level endpoints from Express
const api = express()
api.use('/api', expressApp)
exports.api = functions.https.onRequest(api)
