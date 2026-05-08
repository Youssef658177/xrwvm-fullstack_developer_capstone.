const express = require('express');
const app = express();
const port = 5000;

app.get('/analyze/:text', (req, res) => {
    const text = req.params.text;
    // هنا يتم وضع منطق التحليل، كمثال بسيط:
    let sentiment = "neutral";
    if (text.includes("Fantastic")) sentiment = "positive";
    res.json({ "sentiment": sentiment });
});

app.listen(port, () => console.log(`Sentiment service running on port ${port}`));
