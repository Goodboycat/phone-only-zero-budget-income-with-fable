# Example: Simple invoice maker

A free micro tool (Idea 3). Type business and customer details, add items, tap **Print / Save as PDF**. Data stays on the phone (localStorage); nothing is uploaded.

## Ways to use it

- Send receipts to your own clients.
- Publish it as a free tool with your portfolio link added at the bottom.
- Customise it with a shop's name and colours and include it with a website job.

## Checked maths

| Items | Tax | Subtotal | Tax | Total |
|---|---|---|---|---|
| 2 x 4.50, 1 x 3.00 | 0% | 12.00 | 0.00 | 12.00 |
| 3 x 19.99 | 7.5% | 59.97 | 4.50 | 64.47 |
| 1 x 1000, 2 x 250.50 | 15% | 1501.00 | 225.15 | 1726.15 |

These cases are run automatically by `tests/run.js`.
