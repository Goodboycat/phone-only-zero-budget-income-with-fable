// Runs the logic inside the example pages without a browser: node tests/run.js
const fs = require("fs"), path = require("path"), assert = require("assert");
function load(file) {
  const html = fs.readFileSync(path.join(__dirname, "..", file), "utf8");
  const js = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  const m = { exports: {} };
  new Function("module", js)(m);
  return m.exports;
}
const inv = load("examples/invoice-generator/index.html");
let r = inv.calc([{ desc: "a", qty: "2", price: "4.50" }, { desc: "b", qty: "1", price: "3" }], "0");
assert.deepStrictEqual([r.subtotal, r.tax, r.total], [12, 0, 12]);
r = inv.calc([{ desc: "a", qty: "3", price: "19.99" }], "7.5");
assert.deepStrictEqual([r.subtotal, r.tax, r.total], [59.97, 4.5, 64.47]);
r = inv.calc([{ desc: "a", qty: "1", price: "1000" }, { desc: "b", qty: "2", price: "250.50" }], "15");
assert.deepStrictEqual([r.subtotal, r.tax, r.total], [1501, 225.15, 1726.15]);
r = inv.calc([{ desc: "", qty: "1", price: "" }, { desc: "x", qty: "abc", price: "-5" }, { desc: "c", qty: "1,5", price: "2" }], "");
assert.strictEqual(r.lines.length, 2);
assert.strictEqual(r.total, 3);
assert.strictEqual(inv.fmt("$", 1234567.5), "$1,234,567.50");

const wa = load("examples/whatsapp-order-page/index.html");
assert.strictEqual(wa.validate("Ann", "Pickup", ""), "Please add at least one item.");
wa.qty[0] = 2; wa.qty[3] = 1;
assert.strictEqual(wa.totals().count, 3);
assert.strictEqual(wa.totals().total, 9.5);
assert.strictEqual(wa.validate(" ", "Pickup", ""), "Please type your name.");
assert.strictEqual(wa.validate("Ann", "Delivery", ""), "Please type your delivery address.");
assert.strictEqual(wa.validate("Ann", "Delivery", "1 Main St"), "");
const msg = wa.buildMessage("Ann", "Delivery", "1 Main St");
assert.ok(msg.includes("2 x Jollof rice & chicken = $9.00"));
assert.ok(msg.includes("1 x Water 50cl = $0.50"));
assert.ok(msg.includes("Total: $9.50") && msg.includes("Address: 1 Main St"));
assert.ok(!wa.buildMessage("Ann", "Pickup", "").includes("Address"));
console.log("All tests passed");
