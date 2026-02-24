const express = require('express');
const checkout = require('../controllers/checkout');
const router = express.Router();

// stripe payment
router.post('/create-session', checkout.createSession);
router.get('/success', checkout.paymentConfirmation);

// paypal payment
router.post('/paypal/create', checkout.createPaypalOrder);
router.post('/paypal/capture', checkout.capturePaypalOrder);
router.post('/paypal/finalize', checkout.paypalFinalize);
router.get('/paypal/return', checkout.paypalReturn);

// crypto payment
router.post('/coinbase/create', checkout.createCoinbaseCharge);
router.post('/coinbase/webhook', checkout.coinbaseWebhook);


module.exports = router;