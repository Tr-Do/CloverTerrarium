const express = require('express');
const checkout = require('../controllers/checkout');
const router = express.Router();

// stripe payment
router.post('/create-session', checkout.createSession);
router.get('/success', checkout.paymentConfirmation);

// paypal payment: create order -> return url -> capture -> finalize
router.post('/paypal/create', checkout.createPaypalOrder);
router.get('/paypal/return', checkout.paypalReturn);
router.post('/paypal/capture', checkout.capturePaypalOrder);
router.post('/paypal/finalize', checkout.paypalFinalize);

// crypto payment
router.post('/coinbase/create', checkout.createCoinbaseCharge);

module.exports = router;