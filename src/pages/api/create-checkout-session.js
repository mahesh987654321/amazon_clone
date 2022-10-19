const stripe = require("stripe")(
  "sk_test_51L0pZ4AUO7tB19c8oeJMRIBsEyK4FenpjbgbJU0jwb7mup0FHWAYE1nxfFlHNjV8g2pM8TTkITXVcbGFG2IFh6x900UHEh6PO4"
);

export default async function handler(req, res) {
  const { items, email } = req.body;
  const transformItems = items.map((item) => {
    description: item.description;
    quantity: 1;
    price_data: {
      currency: "gbp";
      unit_price: item.price * 100;
      product_data: {
        name: item.title;
        image: [item.image];
      }
    }
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
  });
}
