/* This module will hold our connection to 
   our mongo server through the Mongoose API.
   We will access the connection in our express server. */
   const mongoose = require('mongoose')

   /* Connnect to our database */
   // Get the URI of the local database, or the one specified on deployment.
   const ATLAS_URI='mongodb+srv://yumna:yumna@thecluster.mgabc3h.mongodb.net/?retryWrites=true&w=majority'
   
   mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true}) //useIndex = true
   module.exports = { mongoose }  // Export the active connection