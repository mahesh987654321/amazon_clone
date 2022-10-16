import Image from "next/image";
import React from "react";
import Header from "../components/Header";

const Checkout = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main style={{ maxWidth: "1400px" }} className="lg:flex mx-auto">
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
              Your shopping items
            </h1>
          </div>
        </div>
        {/* Right section */}
        <div></div>
      </main>
    </div>
  );
};

export default Checkout;