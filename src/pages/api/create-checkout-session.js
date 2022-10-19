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
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CN", "BD", "IN"],
    },
    shipping_rates: [`shr_1LuXTpAUO7tB19c8Kuqtfs9u`],
    payment_method_types: ["card"],
    line_items: transformItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout}`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({ id: session.id });
}
