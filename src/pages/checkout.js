import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { signIn, signOut, useSession } from "next-auth/react";
import classes from "../components/Style.module.css";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(
  "pk_test_51L0pZ4AUO7tB19c8Hva7oAiaVErByVwyQEaBJHFoSkyJ19tOngF9uJfyn9LsAtc5YFvxI1jQPIyEqzOwlVAC9mbW002aRWepBD"
);

const Checkout = () => {
  const createCheckOutSession = async () => {
    const stripe = await stripePromise;
    const checkOutSession = await axios.post("./api/create-checkout-session", {
      items,
      email: session.user.email,
    });
  };
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  return (
    <div className="bg-gray-100">
      <Header />
      <main style={{ maxWidth: "1200px" }} className="lg:flex mx-auto">
        {/* Left section */}
        <div className="flex-grow shadow-sm m-5">
          <Image
            src="https://links.papareact.com/ikj"
            height={250}
            width={1020}
            objectFit="contain"
          />
          <div className="flex flex-col bg-white p-5 space-x-10">
            <h1
              style={{
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                paddingBottom: "1rem",
                borderBottomWidth: "1px",
              }}
            >
              {items.length === 0
                ? "Your amazon basket is empty"
                : `You have selected total ${items.length} item from lists`}
            </h1>
            {items.map((item, index) => (
              <CheckoutProduct key={index} item={item} />
            ))}
          </div>
        </div>
        {/* Right section */}
        <div className="flex flex-col p-10 bg-white shadow-lg">
          <h2>
            {items.length > 0 && (
              <>
                <h2 className="whitespace-nowrap">
                  Subtotal ({items.length}) items:
                  <span className=" pl-3 font-bold">
                    <Currency quantity={total} currency="GBP" />
                  </span>
                </h2>
              </>
            )}
          </h2>
          <button
            onClick={createCheckOutSession}
            role="link"
            disabled={!session}
            className={`button mt-5 ${!session && `${classes.button_session}`}`}
          >
            {!session ? "Sign in to checkout" : "Proceed to check out"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
