# Prompt 4 - WhatsApp order page

```
Build an order page for a [TYPE OF SHOP, e.g. small restaurant] called "[NAME]".

How it works:
- Shows a menu grouped by category, each item with name, short description and price in [CURRENCY].
- Customer taps + and - to choose quantities. A bar at the bottom shows item count and total.
- Customer enters name, chooses Pickup or Delivery, and types an address if Delivery.
- "Send order on WhatsApp" opens https://wa.me/[PHONE WITH COUNTRY CODE, NO +] with the full order typed as a clear message: items, quantities, line totals, grand total, name, pickup/delivery, address.
- If the cart is empty or the name is missing, show a friendly message instead of opening WhatsApp.
- The menu is one simple list at the top of the script so the owner's prices are easy to change.

Technical rules:
- Give me ONE complete file named index.html with all CSS and JavaScript inside it.
- No external libraries, fonts, frameworks or build steps. It must work offline after loading.
- Design for a small Android screen first (360px wide). Large tap targets, readable text.
- Keep it light for slow mobile data: no large images; use placeholders I can replace with my own photo links.
- I will host it on GitHub Pages using only my phone browser, so nothing may need a server.
- Put all text I need to change (names, prices, phone number) in one clearly marked block at the top of the script.
- After the code, list in plain words exactly what I must edit.
```

A working version of this is in `examples/whatsapp-order-page/`.
