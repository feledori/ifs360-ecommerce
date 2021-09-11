import Link from "next/link";
import products from "../assets/products.json";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Shop() {
  return (
    <Layout>
      <Head>
        <title>Shop - Inprint</title>
      </Head>
      <main>
        <h2>Shop</h2>
        <ul>
          {products.map((product, i) => (
            <li key={product.name + i}>
              <div
                className="prod-img"
                style={{
                  background: `url(./product-images/${product.image}) no-repeat center`,
                }}
              />
              <h3>
                <Link href={`/product/${product.slug}`}>{product.name}</Link>
              </h3>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <style jsx>
        {`
          main {
            padding: 60px;
          }

          h2 {
            margin-bottom: 40px;
          }

          ul {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 5px;
          }

          li {
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
          }

          .prod-img {
            width: 300px;
            height: 300px;
            background-size: cover !important;
          }

          h3 {
            margin-top: 20px;
          }
        `}
      </style>
    </Layout>
  );
}
