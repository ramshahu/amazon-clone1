
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
    "sk_test_51OHLt2IwAdRUmDRdafwO9YjRJz6FAcb7jWYjTiAY7BVDqclydq9ou0PbJ1LcuuLXLUpSY5InuHqG8MsZcaLHVflR00rSExbbV4"
    );

// API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin : true }));

app.use(express.json());

// - API routes
app.get('/', ( request, response ) => response.status(200).send('hello world'))

app.post('/payments/create', async( request, response) =>{
    const total = request.query.total;

    console.log('Payment Request Received Boom!!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd"
    })
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/my-project-1547014337338/us-central1/api
