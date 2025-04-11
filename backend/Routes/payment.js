const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe("sk_test_YOUR_SECRET_KEY"); // Replace with your Stripe secret key

router.post("/create-checkout-session", async (req, res) => {
  const { priceId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
