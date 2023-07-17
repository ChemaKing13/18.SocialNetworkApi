const express = require('express'); 
const { MongoClient } = require('mongodb'); 

const app = express(); 
const port = 3001; 

const connectionStringURI = `mongodb://localhost:27017`; 
