const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to MiniPay API');
});

// Simulate a payment API
app.post('/pay', (req, res) => {
  const { amount, method } = req.body;
  if (!amount || !method) {
    return res.status(400).json({ error: 'Amount and payment method required' });
  }
  res.json({ status: 'success', message: `Paid ₹${amount} via ${method}` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
