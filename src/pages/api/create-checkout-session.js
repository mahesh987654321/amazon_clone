const stripe = require("stripe")(
  "sk_test_51L0pZ4AUO7tB19c8oeJMRIBsEyK4FenpjbgbJU0jwb7mup0FHWAYE1nxfFlHNjV8g2pM8TTkITXVcbGFG2IFh6x900UHEh6PO4"
);

export default async (req, res) => {
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

    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd",
          },
          display_name: "Free shipping",
          // shipping_rates: [`shr_1Luqp5D7LvnQg3YWbCPjinTv`],
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "usd",
          },
          display_name: "Next day air",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
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
};
