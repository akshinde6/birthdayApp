const express = require('express');
const app = express();

app.use(express.static('backend'));

// Start the API server
require('./backend/app');
