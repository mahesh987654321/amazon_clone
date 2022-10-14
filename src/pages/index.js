import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch(`https://fakestoreapi.com/products`).then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
